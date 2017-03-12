let expect = require('chai').expect;

import { openDb, Database } from '../../src/lib/fake-database';

describe('Fake Database', function() {

    const DB_URL = 'contacts';

    beforeEach(function() {

    });

    afterEach(function() {
    });

    it('returns a database object', function(done) {
        openDb(DB_URL, function(db) {
            expect(db instanceof Database).to.be.true;
            done();
        });
    });

    it('returns the entry identified by the id', function(done) {
        let db = new Database(DB_URL);
        db.queryForNameOrId('7', function(err, entry) {
            expect(entry.id).to.equal(7);
            expect(entry.name).to.equal('Cullen Schroeder');
            done();
        });
    });

    it('returns the entry identified by the name', function(done) {
        let db = new Database(DB_URL);
        db.queryForNameOrId('Finn Pratt', function(err, entry) {
            console.log(entry);
            expect(entry.id).to.equal(32);
            expect(entry.name).to.equal('Finn Pratt');
            done();
        });
    });

    it('passes an error if the id was not found', function(done) {
        let db = new Database(DB_URL);
        db.queryForNameOrId(101, function(err, entry) {
            expect(err).to.equal('Could not find matching entry');
            expect(entry).to.be.undefined;
            done();
        });
    });

    it('passes an error if the name was not found', function(done) {
        let db = new Database(DB_URL);
        db.queryForNameOrId('Felix', function(err, entry) {
            expect(err).to.equal('Could not find matching entry');
            expect(entry).to.be.undefined;
            done();
        });
    });

});