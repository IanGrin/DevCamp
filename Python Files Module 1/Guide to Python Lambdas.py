# full_name = lambda first, last: f'{first}{last}'

# def greeting(name):
#     print(f'Hi there {name}')

# greeting(full_name('Kristine', 'Hudgens'))

# name = lambda first: f'{first}'
    
# def greeting(name):
#     print(f'Hi, {name}')
        
# greeting(name('Ian'))

def fizz_buzz(max_num):
  for num in range(1, max_num + 1):
    if num % 3 == 0 and num % 5 == 0:
      print('FizzBuzz')
    elif num % 5 == 0:
      print('Buzz')
    elif num % 3 == 0:
      print('Fizz')
    else:
      print(num)


fizz_buzz(100)