
import { openDb, Database } from '../lib/fake-database';

class AsyncDatabase extends Database {

    constructor(databaseUrl) {
        super(databaseUrl);
    }

    queryForNameOrId(nameOrId) {
        return new Promise((resolve, reject) => {
            super.queryForNameOrId(nameOrId, function(err, result) {
                if (err) reject(err);
                else resolve(result);
            })
        });
    }

}

export function openDbAsnc(databaseUrl) {
    return new Promise(resolve => {
        resolve(new AsyncDatabase(databaseUrl));
    });
}