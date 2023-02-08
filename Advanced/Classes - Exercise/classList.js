class List {
    list = []
    add(number){
        this.list.push(number)
        this.list.sort((a, b) => a - b)
        this.size = this.list.length;
    }
    remove(index){
        if(this.list[index] != undefined)
        this.list.splice(index, index).sort((a, b) => a - b)
        this.size = this.list.length;
    }
    get(index){
        return this.list[index]
    } 
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
console.log(list.size);
