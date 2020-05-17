# Workstation

This project captures the steps necessary to create a developer workstation using a Raspberry Pi 4.  After testing, the most effective distribution for using the Raspberry Pi 4 as a workstation is still Raspbian.  Ubuntu GUI environments are still too slow on the Raspberry Pi 4.

## Setup

### Operating System
After initial installation, make sure you update to latest:

`sudo apt update`
`apt dist-upgrade`
`reboot`

You will want to overclock your Raspberry Pi 4.  You can watch CPU frequency in the terminal with this command:
`watch -n 1 vcgencmd measure_clock arm`

Edit the boot config with nano:
`sudo nano /boot/config.txt`

Find the line that says "uncomment to overclock" and add these lines:
`over_voltage=6`
`arm_freq=2000`

Reboot to finish overclocking:
`reboot`

Most overclocking issues show up immediately with a failure to boot. If this occurs, hold down the SHIFT key during the next boot.

### Desktop Environment
Considering adding the following items to your top panel

- 

### Critical Software
Firefox
`sudo apt install firefox-esr`

VSCodium
script TBD