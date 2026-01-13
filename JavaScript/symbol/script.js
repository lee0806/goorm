const PRIVATE = Symbol('private');

const obj = {
    [PRIVATE] : 'secret',
    show() {
        console.log(this[PRIVATE]);
    }
};

obj.show();