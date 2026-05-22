#https://medium.com/stories-from-upstatement/how-to-build-a-web-kiosk-with-a-raspberry-pi-some-cables-and-a-tv-3dc2724acaa1

# https://pimylifeup.com/raspberry-pi-kiosk/

sudo apt-get install xdotool unclutter

sudo apt-get purge wolfram-engine scratch scratch2 nuscratch sonic-pi idle3 -y
sudo apt-get purge smartsim java-common minecraft-pi libreoffice* -y
sudo apt-get clean
sudo apt-get autoremove -y

sudo cp  config_autostart /etc/xdg/lxsession/LXDE-pi/autostart
