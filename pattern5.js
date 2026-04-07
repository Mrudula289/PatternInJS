function printHollowPyramid(n) {
    
for (let i=1; i<=n; i++){
    line=' ';
    for (let j=1; j<=n-i; j++){
        line = line + ' ';
    }
    for (let k=1; k<=i; k++){
        if (k==1 || k==i || i==n){
            line = line + '* ';
        } else {
            line = line + '  ';
        }
    }
    console.log(line);              

}
}
printHollowPyramid(5);

