import { readLine } from '../lib/read-line';

export function readLineAsync(message) {
    return new Promise(function(resolve, reject) {
        readLine(message, function(err, result) {
            if (err) reject(err);
            else resolve(result);
        });
    });
}