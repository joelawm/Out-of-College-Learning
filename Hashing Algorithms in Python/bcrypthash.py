import bcrypt
import time

passwd = b'password123!'

start = time.time()
salt = bcrypt.gensalt(rounds=13)
hashed = bcrypt.hashpw(passwd, salt)
end = time.time()

print(salt) # For brcypt you wont need to save the salt seperately in the database
print(hashed) # the salt is attached and seperated by .
print("Cost factor: " + str(end - start))

if bcrypt.checkpw(passwd, hashed):
    print("match")
else:
    print("does not match")