const main = require('./main.js');

describe('getUserById', () => {
  let stubGetUserByIdOld;
  beforeEach(() => {
    stubGetUserByIdOld = sinon.stub(global, 'getUserByIdOld');
  });
  afterEach(() => {
    stubGetUserByIdOld.restore();
  });

  it('should call success', (done) => {
    stubGetUserByIdOld.callsFake((id, successFakeFn) => {
      expect(id).to.equal(1);
      successFakeFn({name: 'agreal1'});
    });

    main.getUserById(1)
      .then((user) => {
        expect(user.name).to.equal('agreal1');
      }, (errorMessage) => {
        expect(errorMessage).to.equal('Error: name is agreal1');
      })
      .then(done);
  });

  it('should call failure', (done) => {
    stubGetUserByIdOld.callsFake((id, successFakeFn, failureFakeFn) => {
      expect(id).to.equal(1);
      failureFakeFn('Error: name is agreal2');
    });

    main.getUserById(1)
      .then((user) => {
        expect(user.name).to.equal('agreal2');
      }, (errorMessage) => {
        expect(errorMessage).to.equal('Error: name is agreal2');
      })
      .then(done);
  });
});
