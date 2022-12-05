function employees(input){
    let name = ""
    let employee = {
        
    }
    for(let i = 0; i < input.length; i++){
        name = input[i]
        employee.name = name
        employee.personalNumber = name.length

        console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNumber}`);

    }
}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ])