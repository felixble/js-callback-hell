
import { STORAGE } from '../storage/storage';

export class Database {
    constructor(databaseUrl) {
    }

    queryForNameOrId(nameOrId, callback) {
        setTimeout(function() {
            let filter;
            if (isNaN(nameOrId)) {
                filter = (entry) => {
                    return entry.name === nameOrId;
                }
            } else {
                filter = (entry) => {
                    return entry.id === parseInt(nameOrId, 10);
                }
            }

            let matches = STORAGE.filter(filter);
            if (matches.length > 0) {
                callback(false, matches[0]);
            } else {
                callback('Could not find matching entry');
            }
        }, 1500);
    }
}

export function openDb(databaseUrl, callback) {
    setTimeout(function() {
        callback(new Database(databaseUrl));
    }, 1000);
}