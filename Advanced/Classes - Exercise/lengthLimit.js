class Stringer{
    string
    length
    innerString
    innerLength
    constructor(string, length){
        this.string = string;
        this.length = Number(length);
        this.innerString = string;
        this.innerLength = Number(length);

    }
    increase(length){
        this.innerLength = this.length + Number(length)
        this.innerString = this.string.substring(0,this.innerLength)
    }

    decrease(length){
        if(this.innerLength - Number(length) < 0){
            this.innerlength = 0;
        }
        this.innerLength = this.length - Number(length);
        this.innerString = this.string.substring(0,this.innerLength)
        this.innerString += '...'
    }

    toString(){
        return this.innerString;
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test
test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4); 
console.log(test.toString()); // Test
