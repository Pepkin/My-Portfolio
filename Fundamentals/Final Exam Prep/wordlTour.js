function worldTour(input){
    let destination = input.shift();
    let command = input.shift();

    while(command != 'Travel'){
        if(command.includes('Add Stop:')){
            command = command.replace('Add Stop:', '');
            command = command.split(':')
            let inputIndex = command[0];
            let newStop = command[1];
            let something = destination.substring(inputIndex)
            let somethingNew = something.padStart(something.length + newStop.length, newStop)
            destination = destination.replace(something, somethingNew);
            console.log(destination);
        }else if(command.includes('Remove Stop:')){
            command = command.replace('Remove Stop:', '');
            command = command.split(':')
            let sliceStart = Number(command[0]);
            let sliceEnd = Number(command[1]) + 1;
            let slicedpart = destination.substring(sliceStart,sliceEnd)
            destination = destination.replace(slicedpart, '')
            console.log(destination);
        }else if(command.includes('Switch:')){
            command = command.replace('Switch:', '');
            command = command.split(':')
            let oldDestination = command[0];
            let newDestination = command[1];
            destination = destination.replace(oldDestination, newDestination)
            console.log(destination);
        }
        command = input.shift();
    }

    console.log(`Ready for world tour! Planned stops: ${destination}`);
}
worldTour(["Hawai::Cyprys-Greece",
"Add Stop:7:Rome",
"Remove Stop:11:16",
"Switch:Hawai:Bulgaria",
"Travel"]);