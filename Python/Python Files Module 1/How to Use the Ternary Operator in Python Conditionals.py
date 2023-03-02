role = 'guest'

# auth = 'can access' if role == 'admin' else 'cannot access'

# print(auth)

if role == 'admin':
    auth = 'can access'
else:
    auth = 'cannot access'

print(auth)
