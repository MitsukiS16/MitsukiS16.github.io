#!/bin/bash

CYAN='\033[0;36m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BOLD='\033[1m'
RESET='\033[0m'

section() { echo -e "\n${BOLD}${CYAN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n $1${RESET}"; }
ok()   { echo -e "  ${GREEN}✔ $1${RESET}"; }
warn() { echo -e "  ${YELLOW}⚠ $1${RESET}"; }
bad()  { echo -e "  ${RED}✘ $1${RESET}"; }
info() { echo -e "  $1"; }

# ── DISK HEALTH ───────────────────────────────────────────
section "💽 DISK HEALTH (SMART)"
smart=$(sudo smartctl -a /dev/nvme0n1p5 2>/dev/null)

health=$(echo "$smart" | grep "SMART overall" | awk -F': ' '{print $2}' | xargs)
[ "$health" = "PASSED" ] && ok "Overall: $health" || bad "Overall: $health"

temp=$(echo "$smart" | grep "^Temperature:" | awk '{print $2}')
if [ -n "$temp" ]; then
    (( temp >= 75 )) && bad "Temperature: ${temp}°C (hot!)" || \
    (( temp >= 60 )) && warn "Temperature: ${temp}°C (warm)" || \
    ok "Temperature: ${temp}°C"
fi

spare=$(echo "$smart" | grep "Available Spare:" | head -1 | awk '{print $3}' | tr -d '%')
if [ -n "$spare" ]; then
    (( spare <= 10 )) && bad "Available Spare: ${spare}% (critical!)" || \
    (( spare <= 50 )) && warn "Available Spare: ${spare}%" || \
    ok "Available Spare: ${spare}%"
fi

used=$(echo "$smart" | grep "Percentage Used:" | awk '{print $3}' | tr -d '%')
if [ -n "$used" ]; then
    (( used >= 80 )) && bad "Drive Wear: ${used}% (replace soon)" || \
    (( used >= 50 )) && warn "Drive Wear: ${used}%" || \
    ok "Drive Wear: ${used}%"
fi

errors=$(echo "$smart" | grep "Media and Data Integrity Errors:" | awk '{print $6}')
[ "$errors" = "0" ] && ok "Media Errors: 0" || bad "Media Errors: $errors"

unsafe=$(echo "$smart" | grep "Unsafe Shutdowns:" | awk '{print $3}')
if [ -n "$unsafe" ]; then
    (( unsafe >= 20 )) && warn "Unsafe Shutdowns: $unsafe" || ok "Unsafe Shutdowns: $unsafe"
fi

# ── DISK SPACE ────────────────────────────────────────────
section "📦 DISK SPACE"
df -h | grep -E '^/dev/' | while read fs size used avail pct mount; do
    pct_num=${pct/\%/}
    (( pct_num >= 90 )) && bad "$mount — $used / $size (${pct} FULL!)" || \
    (( pct_num >= 70 )) && warn "$mount — $used / $size (${pct})" || \
    ok "$mount — $used / $size (${pct})"
done

# ── BATTERY ──────────────────────────────────────────────
section "🔋 BATTERY"
bat_path=$(find /sys/class/power_supply -name "BAT*" 2>/dev/null | head -1)
if [ -n "$bat_path" ]; then
    status=$(cat "$bat_path/status" 2>/dev/null)
    capacity=$(cat "$bat_path/capacity" 2>/dev/null)
    energy_full=$(cat "$bat_path/energy_full" 2>/dev/null)
    energy_full_design=$(cat "$bat_path/energy_full_design" 2>/dev/null)

    if [ -n "$capacity" ]; then
        if [ "$status" = "Charging" ] || [ "$status" = "Full" ]; then
            ok "Charge: ${capacity}% ($status)"
        else
            (( capacity <= 20 )) && warn "Charge: ${capacity}% ($status) — plug in!" || ok "Charge: ${capacity}% ($status)"
        fi
    fi

    if [ -n "$energy_full" ] && [ -n "$energy_full_design" ] && (( energy_full_design > 0 )); then
        health_pct=$(( energy_full * 100 / energy_full_design ))
        (( health_pct <= 60 )) && bad "Battery Health: ${health_pct}% (replace recommended)" || \
        (( health_pct <= 80 )) && warn "Battery Health: ${health_pct}% (degraded)" || \
        ok "Battery Health: ${health_pct}%"
    fi
else
    info "No battery detected"
fi

# ── CPU ───────────────────────────────────────────────────
section "🧠 CPU"
cpu_model=$(grep "model name" /proc/cpuinfo | head -1 | awk -F': ' '{print $2}')
info "Model: $cpu_model"
info "Cores: $(nproc)"

cpu_temp=$(sensors 2>/dev/null | grep -E "Core 0|Tctl|CPU" | head -1 | grep -oP '[0-9]+\.[0-9]+°C' | head -1)
if [ -n "$cpu_temp" ]; then
    temp_num=$(echo "$cpu_temp" | grep -oP '[0-9]+' | head -1)
    (( temp_num >= 90 )) && bad "Temperature: $cpu_temp (hot!)" || \
    (( temp_num >= 70 )) && warn "Temperature: $cpu_temp (warm)" || \
    ok "Temperature: $cpu_temp"
else
    info "Temperature: install 'lm_sensors' + run 'sudo sensors-detect'"
fi

load=$(uptime | awk -F'load average:' '{print $2}' | xargs)
info "Load Average: $load"

# ── RAM ───────────────────────────────────────────────────
section "🧩 RAM"
total=$(free -h | awk '/^Mem:/ {print $2}')
used_ram=$(free -h | awk '/^Mem:/ {print $3}')
avail_ram=$(free -h | awk '/^Mem:/ {print $7}')
pct_ram=$(free | awk '/^Mem:/ {printf "%d", $3/$2*100}')
info "Total: $total"
(( pct_ram >= 90 )) && bad "Used: $used_ram / $total (${pct_ram}% — low memory!)" || \
(( pct_ram >= 70 )) && warn "Used: $used_ram / $total (${pct_ram}%)" || \
ok "Used: $used_ram / $total (${pct_ram}%)"
info "Available: $avail_ram"
info "Swap: $(free -h | awk '/^Swap:/ {print $3}') / $(free -h | awk '/^Swap:/ {print $2}')"

# ── SYSTEM ────────────────────────────────────────────────
section "🖥️  SYSTEM"
info "Hostname:  $(cat /proc/sys/kernel/hostname)"
info "Kernel:    $(uname -r)"
info "Uptime:    $(uptime -p)"
info "Last Boot: $(who -b | awk '{print $3, $4}')"

# ── FAILED SERVICES ───────────────────────────────────────
section "⚙️  FAILED SERVICES"
failed=$(systemctl --failed --no-legend 2>/dev/null | grep "failed" | grep -v "not-found")
if [ -z "$failed" ]; then
    ok "No failed services"
else
    echo "$failed" | while read line; do bad "$line"; done
fi

# ── TOP PROCESSES ─────────────────────────────────────────
section "🔥 TOP 5 CPU PROCESSES"
printf "  %-10s %-8s %s\n" "PID" "CPU%" "Command"
ps aux --sort=-%cpu | awk 'NR>1 && NR<=6 {printf "  %-10s %-8s %s\n", $2, $3, $11}'

section "💧 TOP 5 RAM PROCESSES"
printf "  %-10s %-8s %s\n" "PID" "MEM%" "Command"
ps aux --sort=-%mem | awk 'NR>1 && NR<=6 {printf "  %-10s %-8s %s\n", $2, $4, $11}'

# ── DOCKER ────────────────────────────────────────────────
section "🐳 DOCKER"
if systemctl is-active --quiet docker; then
    running=$(docker ps --format "{{.Names}} ({{.Status}})" 2>/dev/null)
    if [ -n "$running" ]; then
        ok "Docker running"
        echo "$running" | while read line; do info "  → $line"; done
    else
        ok "Docker running — no containers up"
    fi
    docker system df 2>/dev/null | tail -n +2 | while read line; do info "$line"; done
else
    warn "Docker is not running"
fi

# ── PENDING UPDATES ───────────────────────────────────────
section "🔄 PENDING UPDATES"
updates=$(checkupdates 2>/dev/null | wc -l)
aur_updates=$(yay -Qu 2>/dev/null | wc -l)
if (( updates == 0 )); then
    ok "System: up to date"
else
    warn "System: $updates package(s) to update"
fi
if (( aur_updates == 0 )); then
    ok "AUR: up to date"
else
    warn "AUR: $aur_updates package(s) to update"
fi

# ── NETWORK ───────────────────────────────────────────────
section "🌐 NETWORK"
local_ip=$(ip route get 1.1.1.1 2>/dev/null | awk '{print $7; exit}')
[ -n "$local_ip" ] && info "Local IP: $local_ip" || info "Local IP: not found"

if ping -c 1 -W 2 8.8.8.8 &>/dev/null; then
    ok "Internet: connected"
else
    bad "Internet: no connection"
fi

echo -e "\n${BOLD}${CYAN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${RESET}\n"
