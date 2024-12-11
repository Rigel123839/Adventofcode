x = [1, 24596, 0, 740994, 60, 803, 8918, 9405859]
for i in range(75):
    k = 0
    while k < len(x):
        if x[k] == 0:
            x[k] = 1
        else:
            digit_list = [int(digit) for digit in str(x[k])]
            if len(digit_list) % 2 == 0:
                mid = len(digit_list) // 2
                del1 = int("".join(map(str, digit_list[:mid])))
                del2 = int("".join(map(str, digit_list[mid:])))
                x[k] = del1
                x.insert(k + 1, del2)
                k += 1
            else:
                x[k] = x[k] * 2024
        k += 1 
print(len(x)) 