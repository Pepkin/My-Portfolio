function easterEggs(input){
    let pattern = /(\@+|\#+)(?<color>[a-z]{3,})([\W]+)\/+(?<number>[0-9]+)\/+/gm
    let exec = pattern.exec(input)
    let print = []

    while(exec){
        let color = exec.groups['color'];
        let number = exec.groups['number'];
        if(number < 0){
            let line = `You found ${number} ${color} eggs!`
        print.push(line);
        }

        exec = pattern.exec(input)
    }

    for(let i = 0; i < print.length; i++){
        console.log(print[i]);
    }

}
easterEggs(`@@@@green@*/10/@yel0w@*26*#red#####//8//@limon*@*23*@@@red#*/%^&/6/@gree_een@/notnumber/###purple@@@@@*$%^&*/5/`)