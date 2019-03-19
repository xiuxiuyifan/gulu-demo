let arrIndexSum = (arr, index) => {
	let result = 0;
	for (let i = 0; i <= index; i++) {
		result += arr[i];
	}
	return result;
};
export {arrIndexSum};
