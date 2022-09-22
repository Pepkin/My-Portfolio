function triangle(num){
    let string = ''
    for (let i = 1; i <= num; i++) {
        // Internal loop
        for (let j = 1; j <= i; j++) {
          string += i + ' ';
        }
        string += "\n";
      }
    console.log(string);  
}
triangle(5)