def quickSort(A):
  if len(A) <= 1:
    return A
  # 피봇 선정
  pivot = A[len(A) // 2]
  left, equal, right = [], [], []
  for num in A:
    if num < pivot:
      left.append(num)
    elif num > pivot:
      right.append(num)
    else:
      equal.append(num)
  return quickSort(left) + equal + quickSort(right)

list = [4, 8, 3, 9, 10, 1, 6, 2, 7, 5]
print(quickSort(list))