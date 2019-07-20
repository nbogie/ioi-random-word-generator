import RPi.GPIO as GPIO
import os
from time import sleep

# other keys are possible such as "ctrl+Tab"
def button_callback(channel):
	keyName = "Tab"
	if channel == 23:
		keyName = "1"
	elif channel == 24:
		keyName = "2"
	elif channel == 25:
		keyName = "3"
	print("button falling edge detected pin:" + str(channel) + " so sending keypress " + keyName)
	os.system('export XAUTHORITY=/home/pi/.Xauthority; export DISPLAY=:0; xdotool key ' + keyName)
        
GPIO.setmode(GPIO.BCM)
GPIO.setup(23, GPIO.IN, pull_up_down=GPIO.PUD_UP)
GPIO.setup(24, GPIO.IN, pull_up_down=GPIO.PUD_UP)
GPIO.setup(25, GPIO.IN, pull_up_down=GPIO.PUD_UP)

GPIO.add_event_detect(23,GPIO.FALLING,callback=button_callback, bouncetime=200)
GPIO.add_event_detect(24,GPIO.FALLING,callback=button_callback, bouncetime=200)
GPIO.add_event_detect(25,GPIO.FALLING,callback=button_callback, bouncetime=200)

print("Will send keypress '1', '2', or '3' when pin 23 24 or 25 sees falling edge")

while True:
    sleep(5)

GPIO.cleanup()
