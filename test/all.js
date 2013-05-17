var should = require('should');
var Prowl = require('../lib/prowl');
var p = new Prowl( process.env.PROWL_KEY ); // be sure to insert your own here
var p2 = new Prowl( '' ); // be sure to insert your own here

describe('Prowl Node.js API', function(){
	it('pushes when minimum valid information is added', function(done){
		p.push( 'i be in you iphonez', 'mah application', function( err, remaining ){
			remaining.should.be.a('number');	
			should.not.exist(err);
      done();	
		});
	});

  it('detects errors properly when pushing', function( done ){
    p2.push('tezt your iphonez', 'app', function( error, remaining ){
      should.not.exist(remaining);
      error.message.should.be.a('string');
      error.code.should.be.a('string');
      done();
    });
  });

  it('callbacks with an error when request returns one', function( done ){
    p2.push('hey', 'app', function( err, remaining ){
      should.not.exist(remaining);
      err.should.be.a("object");

      done();
    });
  });
});
