"""
[
    [0, 1, 2, 3, 4],
    [1, 2, 3, 4, 5],
    [2, 3, 4, 5, 6],
    [3, 4, 5, 6, 7],
    [4, 5, 6, 7, 8],
]
"""

def manual_incrementing_matrix(n):
    # matrix n x n
    matrix = [ [ None for y in range(n) ] for x in range(n)]

    
    return matrix

print(manual_incrementing_matrix(5))