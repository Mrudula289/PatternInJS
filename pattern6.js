function printDiamond(n) {

for (let i=1; i<=n; i++){
    line=' ';
    for (let j=1; j<=n-i; j++){
        line = line + ' ';
    }
    for (let k=1; k<=i; k++){
        line = line + '* ';
    }
    console.log(line);              

}
for (let i=n-1; i>=1; i--){
    line=' ';
    for (let j=1; j<=n-i; j++){
        line = line + ' ';
    }
    for (let k=1; k<=i; k++){
        line = line + '* ';
    }


    console.log(line);              

}
}
printDiamond(5);