let prompt = require('prompt');
prompt.message = "";
prompt.delimiter = "";

export function readLine(message, callback) {
    prompt.start();

    let schema = {
        properties: {
            string: {
                description: message,
                type: 'string'
            }
        }
    };

    prompt.get(schema, function(err, result) {
        if (err) {
            callback(err);
            return;
        }

        if (result && result.string) {
            callback(err, result.string);
            return;
        }
        callback('invalid-argument');
    });
};