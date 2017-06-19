global.getUserByIdOld = function getUserByIdOld(id, successFn, failureFn) {
    setTimeout(function() {
        successFn({name: 'agreal'});
    }, 500);
}

exports.getUserById = function getUserById(id) {
    return new Promise(function(resolve, reject) {
        getUserByIdOld(id,
            function(user) {
                resolve(user);
            },
            reject);
    });
}