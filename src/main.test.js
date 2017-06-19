const main = require('./main.js');

describe('getUserById', () => {
  let stubGetUserByIdOld;
  beforeEach(() => {
    stubGetUserByIdOld = sinon.stub(global, 'getUserByIdOld');
  });
  afterEach(() => {
    stubGetUserByIdOld.restore();
  });

  it('stub', () => {
    const successFn = sinon.stub().returns({name: 'agreal1'});
    expect(successFn().name).to.equal('agreal1');

    const failureFn = sinon.stub().returns('Error: name is agreal');
    expect(failureFn()).to.equal('Error: name is agreal');
  });

  it('should call success', (done) => {
    const successFn = sinon.stub().returns({name: 'agreal1'});

    stubGetUserByIdOld.callsFake((id, successFakeFn) => {
      expect(id).to.equal(1);
      successFakeFn(successFn());
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
    const failureFn = sinon.stub().returns('Error: name is agreal2');

    stubGetUserByIdOld.callsFake((id, successFakeFn, failureFakeFn) => {
      expect(id).to.equal(1);
      failureFakeFn(failureFn());
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