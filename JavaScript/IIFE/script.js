// !function () {
// 	console.log("IIFE");
// }();

const counter = (function () {
	let count = 0;
	return {
		current : () => {
            return count;
        },
		increase : () => { count++ },
	}
})();

counter.increase(); // 1
counter.increase(); // 2
console.log(counter.current()) // 2