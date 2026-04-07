function printPyramid(n) {

for (let i = 1; i <= n; i++) {
    let line = " ";
    for (let j = 1; j <= n - i; j++) {
        line = line+" ";
    }
    for (let k = 1; k <= i; k++) {
        line = line + "* ";
    }           
    console.log(line);
}

}
printPyramid(5);

function printPyramid1(n) {

for (let i = 1; i <= n; i++) {
    let line = " ";
    for (let j = 1; j <= n - i; j++) {
        line = line+" ";
    }
    for (let k = 1; k <=i*2-1; k++) {
        line = line + "  *";
    }           
    console.log(line);
}

}
printPyramid1(5);



