# def full_name(first, last):
#     return f'{first} {last}'

def greeting(first, last):
    def full_name():
        return f'{first} {last}'
    
    print(f'Hi {full_name()}!')

greeting('Kristine', 'Hudgens')
