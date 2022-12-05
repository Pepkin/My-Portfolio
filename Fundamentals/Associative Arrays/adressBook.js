function createAdressBook(input){
    let adressBook = {}

    for (const line of input) {
        let [name, adress] = line.split(':')
        
        adressBook[name] = adress;
    }

    let adressBookEntries = Object.entries(adressBook)

    adressBookEntries.sort((kvpA, kvpB) => kvpA[0].localeCompare(kvpB[0]));

    for (const entry of adressBookEntries) {
        let [name, adress] = entry
        console.log(`${name} -> ${adress}`);
    };
}
createAdressBook(['Bob:Huxley Rd',
'John:MilwaukeeCrossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:MestaCrossing',
'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd'])