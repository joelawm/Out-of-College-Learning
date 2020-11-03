# we import the Twilio client from the dependency we just installed
from twilio.rest import Client
import time

# the following line needs your Twilio Account SID and Auth Token
client = Client("SID", "auth")

# change the "from_" number to your Twilio number and the "to" number
# to the phone number you signed up for Twilio with, or upgrade your
# account to send SMS to any phone number "+16308415379"
num = 0
while(num < 100000):
	client.messages.create(to="+number", from_="+number", body="hello " + str(num))
	num += 1
	time.sleep(1.5)

# I added the looping feature just for fun, I made the account and added this code form a blog.
# Im actually probably gonna use this for a OTP style setup but without the extra 7 cent cost that twillio charges