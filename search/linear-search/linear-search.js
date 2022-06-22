// x in arr[]. If x is present then return its location,
// otherwise return -1

function search(arr, n, x) {
	let i;
	for (i = 0; i < n; i++) if (arr[i] == x) return i;
	return -1;
}
