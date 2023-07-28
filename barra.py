import time
BAR_LEN = 24
elements = ['-', '\\', '|', '/']

while True:
    for i in range (BAR_LEN+1):
        frame = i % len(elements)
        print(f'\r[{elements[frame]*i:=<{BAR_LEN}}]', end='')

        time.sleep(0.2)
