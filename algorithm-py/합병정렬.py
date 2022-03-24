def mergeSort(A):
  if len(A) == 1:
    return A
  mid = len(A) // 2
  left = mergeSort(A[:mid])
  right = mergeSort(A[mid:])
  sortedList = []
  l = 0
  r = 0
  while l < len(left) and r < len(right):
    if left[l] < right[r]:
        sortedList.append(left[l])
        l += 1
    else:
        sortedList.append(right[r])
        r += 1
  sortedList += left[l:]
  sortedList += right[r:]
  return sortedList

list = [4, 8, 3, 9, 10, 1, 6, 2, 7, 5]
print(mergeSort(list))