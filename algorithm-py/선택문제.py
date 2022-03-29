def kth_smallest_sort(A, k):
    A.sort()  # 배열 오름차순 정렬
    return A[k-1]  # k번째 작은 수(k-1 위치) 반환


def quick_select(A, left, right, k):  # k번째 작은 수를 찾는 경우
    pos = partition(A, left, right)  # 그룹 크기 계산
    if (pos+1 == left+k):  # k번째 작은 수가 피봇인 경우
        return A[pos]  # 해를 반환
    elif (pos+1 > left+k):  # 조건에 일치할 때까지 값이 존재하는 그룹에 재귀호출
        return quick_select(A, left, pos-1, k)  # Small group
    else:
        return quick_select(A, pos+1, right, k-(pos+1-left))  # Large group


def partition(A, left, right):
    low = left + 1
    high = right
    pivot = A[left]  # 피봇을 가장 좌측으로
    while (low <= high):  # 양쪽 포인터를 이동하며 피봇과 비교
        while low <= right and A[low] < pivot:
            low += 1
        while high >= left and A[high] > pivot:
            high -= 1
        if low < high:
            A[low], A[high] = A[high], A[low]  # 피봇을 기준으로 값 맞바꾸기
    A[left], A[high] = A[high], A[left]  # 피봇보다 작고 가장 우측의 값과 피봇 교환
    return high  # 피봇 위치 반환


list = [12, 3, 5, 7, 4, 19, 26, 23, 15]
print("입력 리스트 =", list)
print("[정렬] 3번째 작은 수: ", kth_smallest_sort(list, 3))
print("[정렬] 6번째 작은 수: ", kth_smallest_sort(list, 6))
n = len(list)
print("[선택문제] 3번째 작은 수: ", quick_select(list, 0, n-1, 3))
print("[선택문제] 6번째 작은 수: ", quick_select(list, 0, n-1, 6))
