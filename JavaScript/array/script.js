// const array = [1, 4, 9, 16];

// const map1 = array.map(x => x * 2);

// console.log(map1);


const array = [1, 4, 9, 16];

const map = array.map(function (item, index, array) {
	console.log(item, index, array, this);
	return (item * 2);
}, {a : 'a'});

console.log(map);