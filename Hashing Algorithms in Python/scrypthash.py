import pyscrypt

# Hash
hashed = pyscrypt.hash(password = b"correct horse battery staple", 
                       salt = b"seasalt", 
                       N = 1024, 
                       r = 1, 
                       p = 1, 
                       dkLen = 256)
print(hashed)

# Write a file
with pyscrypt.ScryptFile('filename.scrypt', b'password', 1024, 1, 1) as f:
    f.write(b"Hello world")

# Read a file
with pyscrypt.ScryptFile('filename.scrypt', b'password') as f:
    data = f.read()
    print(data)