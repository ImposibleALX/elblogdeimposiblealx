import time
BAR_LEN = 24
elements = ['-', '\\', '|', '/']

for i in range (BAR_LEN+1):
  frame = i % len(elemets)
  print(f'\r[{elemets[frame]*i:=<{BAR_LEN}}]', end='')

  time.sleep(0.2)
