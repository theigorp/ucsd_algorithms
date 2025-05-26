import sys

def read_line():
    for line in sys.stdin:
        if line.strip() != '':
            number = int(line.strip().split(' ')[0])
            print(max_number_of_prizes(number))
            break

def get_sum(array):
    if len(array) < 1:
        return 0
    total = 0
    for num in array:
        total += num
    return total

def max_number_of_prizes(n):
    k = []

    if n < 3:
        k.append(n)
        return f"{len(k)}\n{' '.join(map(str, k))}"

    sum_so_far = 0
    i = 1
    while sum_so_far + i <= n:
        k.append(i)
        sum_so_far += i
        i += 1

    total_sum = get_sum(k)

    if total_sum != n:
        last_element = k.pop()
        current_sum = total_sum - last_element
        number_needed = n - current_sum

        if number_needed not in k:
            k.append(number_needed)
        else:
            last_element = k.pop()
            new_current_sum = current_sum - last_element
            number_needed = n - new_current_sum
            k.append(number_needed)

    return f"{len(k)}\n{' '.join(map(str, k))}"

if __name__ == "__main__":
    read_line()
