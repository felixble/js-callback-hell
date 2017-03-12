import { readLineAsync } from './promise-wrappers/read-line-async';
import { openDbAsnc } from './promise-wrappers/fake-database-async';

function main() {
    let enteredName;
    readLineAsync('Enter a name or id')
        .then(function(name) {
            enteredName = name;
            return openDbAsnc('contacts');
        })
        .then(function(db) {
            return db.queryForNameOrId(enteredName);
        })
        .then(function(contact) {
            displayContact(contact);
        })
        .catch(error => {
            console.error(error);
        });
}

function displayContact(contact) {
    console.log(contact);
}

main();