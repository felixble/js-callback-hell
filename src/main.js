import { readLineAsync } from './promise-wrappers/read-line-async';
import { openDbAsnc } from './promise-wrappers/fake-database-async';

async function main() {
    try {
        let name = await readLineAsync('Enter a name or id');
        let db = await openDbAsnc('contacts');
        let contact = await db.queryForNameOrId(name);
        displayContact(contact);
    } catch(error) {
        console.error(error);
    }
}

function displayContact(contact) {
    console.log(contact);
}

main();