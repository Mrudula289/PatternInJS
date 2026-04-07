function printInvertedTriangle(n) {
    for (let i=n; i>=1; i--){
        line=" ";
        for (let j=1; j<=i; j++){
            line = line + "* ";
        }
        console.log(line);  
    }
}
printInvertedTriangle(5);