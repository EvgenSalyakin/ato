Accounts.onCreateUser((options, user) => {

    if (options.profile) {
        user.profile = options.profile;
        return user;
    }
    //if (user.username==='admin') return user;

    if (user.services.facebook) {
        console.log('Facebook user!');
    } else if (user.services.google) {
        console.log('Google user!');
    } else if (user.services.password) {
        user.profile = {
            firstName: user.username,
            lastName: '',
            role: []
        };
    }

    return user;
});
