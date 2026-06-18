#!/bin/bash

RED='\033[0;31m'
GREEN='\033[0;32m'
CYAN='\033[0;36m'
YELLOW='\033[1;33m'
BOLD='\033[1m'
RESET='\033[0m'

section() { echo -e "\n${BOLD}${CYAN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n $1${RESET}"; }
freed() { echo -e "${GREEN}✔ Freed: $1${RESET}"; }

section "🧹 CLEANING TEMP & CACHE FILES"

before=$(df / | awk 'NR==2 {print $3}')

echo "→ pacman cache..."
sudo pacman -Sc --noconfirm 2>/dev/null

echo "→ yay cache..."
yay -Sc --noconfirm 2>/dev/null

echo "→ journal logs (keeping 7 days)..."
sudo journalctl --vacuum-time=7d 2>/dev/null

echo "→ thumbnails & user cache..."
rm -rf ~/.cache/thumbnails/*
rm -rf ~/.cache/*

echo "→ /tmp..."
sudo rm -rf /tmp/*

echo "→ orphaned packages..."
orphans=$(pacman -Qdtq 2>/dev/null)
if [ -n "$orphans" ]; then
    sudo pacman -Rns $orphans --noconfirm 2>/dev/null
    echo -e "${GREEN}✔ Removed orphans: $orphans${RESET}"
else
    echo "  No orphans found."
fi

after=$(df / | awk 'NR==2 {print $3}')
diff_kb=$(( before - after ))
diff_mb=$(( diff_kb / 1024 ))

section "💾 SPACE FREED"
freed "${diff_mb} MB"

section "📦 TOP 10 LARGEST INSTALLED PACKAGES"
printf "%-35s %10s\n" "Package" "Size"
printf "%-35s %10s\n" "-------" "----"
expac -s "%n %m" 2>/dev/null | sort -k2 -rn | head -10 | while read name size; do
    mb=$(( size / 1048576 ))
    gb_int=$(( size / 1073741824 ))
    gb_dec=$(( (size % 1073741824) * 100 / 1073741824 ))
    if (( gb_int >= 1 )); then
        printf "%-35s ${YELLOW}%d.%02d GB${RESET}\n" "$name" "$gb_int" "$gb_dec"
    else
        printf "%-35s %8d MB\n" "$name" "$mb"
    fi
done

section "📁 LARGEST FOLDERS IN HOME"
du -sh ~/* 2>/dev/null | sort -rh | head -10

section "🖥️  FULL SYSTEM DISK USAGE"
sudo du -sh /* 2>/dev/null | sort -rh | head -10

section "💽 DISK OVERVIEW"
df -h /
