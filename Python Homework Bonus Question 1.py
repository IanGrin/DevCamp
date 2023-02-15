# name = "Terry is lame, and that\'s okay."

# for phrase in range(15, 30):
#     print(name[phrase])

# names = {
#     'coding_worriors': ['ian', 'zach', 'jose', 'tyler']
# }

# coding_warriors = names[0]

# print(coding_warriors)

# names = {
#   ('Ian', 'Jose', 'Tyler', 'Zach'),
  
# }

# name = names[0:1]
# print(name)



# def sum_two_numbers(number):
#     return f'{1} + {2}'

# two_numbers = sum_two_numbers(1 + 2)

# def total_sum(number):
# role = 'guest'

# auth = 'can access' if role == 'admin' else 'cannot access'

# if role == 'admin':
#   auth = 'can access'
# else:
#   auth = 'cannot access'

# print(auth)
def guessing_game():
  while True:
    print('What is your guess?')
    guess = input()

    if guess == '42':
      print('You correctly guessed it!')
      return False
    else:
      print(f"No, {guess} isn't the answer, please try again\n")

guessing_game()
