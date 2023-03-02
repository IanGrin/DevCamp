def greeting(time_of_day, *args):
    print(f"Hi {' '.join(args)}, I hope that you are have a good {time_of_day}")
    # print(args)

greeting('Morning', 'Kristine', 'M', 'Hudgens')
greeting('Afternoon', 'Tiffany', 'Hudgens')

# def greeting(*names):
#     print('Hi' + ''.join(names))