# a >= b >= 0
a, b = map(int, input().split());

def Euclid(a, b):
  while (b != 0):
    a, b = b, a % b;
  return a;
  
print(Euclid(a, b));