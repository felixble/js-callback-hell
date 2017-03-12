import { readLine } from './lib/read-line';
import { openDb } from './lib/fake-database';

function main() {
    readLine('Enter a name or id', function(err, nameOrId) {
        if (err) console.error(err);
        else {
            openDb('contacts', function (db) {
                db.queryForNameOrId(nameOrId, function (err, contact) {
                    if (err) console.error(err);
                    else displayContact(contact);
                })
            });
        }
    });
}

function displayContact(contact) {
    console.log(contact);
}

main();