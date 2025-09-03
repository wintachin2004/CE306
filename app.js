function testVar() {
    var v = 10;
    if (true) {
        var v = 20; 
        console.log(v);
    }
    console.log(v);
}

function testLet() {
    let l =10;
    if (true) {
        let l =20;
        console.log(l);
    }
    console.log(l)
}

function testConst() {
    const c = 10;
    if (true) {
        const c = 20;
        console.log(c);
    }
    console.log(c);
}
testVar();
console.log();
testLet();
console.log()
testConst();

var v = 10;
v = 20
console.log(v);
console.log();

let l = 10;
l = 20;
console.log(l);

const c = 10;
c = 20;
console.log(c);