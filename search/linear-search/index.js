function search(arr, n, x) {
	let i;
	for (i = 0; i < n; i++) if (arr[i] == x) return i;
	return -1;
}

let arr = [1, 34, 56, 33, 24, 6, 3, 2, 6, 8, 9, 0, 90];
let x = 10;
let n = arr.length;

let result = search(arr, n, x);
result
	? console.log("Element is present at index " + result)
	: console.log("Element is not present in array");