let expect = require('chai').expect;
import sinon from 'sinon';

let prompt = require('prompt');
import { readLine } from '../../src/lib/read-line';



describe('read-line', function() {

    const RESULT = 'felix',
        ERR_CODE = 'ERROR-CODE-4711';

    let promptStub;

    beforeEach(function() {
        promptStub = sinon.stub(prompt, 'get', function(msg, callback) {
            msg = msg.properties.string.description;
            if (msg === 'error') {
                callback(ERR_CODE, undefined);
            } else if (msg === 'invalid') {
                callback(false, 'invalid');
            } else {
                callback(false, {string: RESULT});
            }
        });
    });

    afterEach(function() {
        promptStub.restore();
    });

    it('calls the callback with the result of prompt.get as result parameter', function() {
        readLine('Enter your name: ', function(err, result) {
            expect(result).to.equal(RESULT);
        });

    });

    it('passes the error code to the callback function if prompt.get returns an error code', function() {
        readLine('error', function(err, result) {
            expect(err).to.equal(ERR_CODE);
            expect(result).to.be.undefined;
        });
    });

    it('passes the error code to the callback function if prompt.get returns an invalid result', function() {
        readLine('invalid', function(err, result) {
            expect(err).to.equal('invalid-argument');
            expect(result).to.be.undefined;

        })
    });

});