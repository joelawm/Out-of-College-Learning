import secrets

# This can be used for password reseting, or even just user Auth
token = secrets.token_hex()

token2 = secrets.token_urlsafe()

print(token)
print(token2)