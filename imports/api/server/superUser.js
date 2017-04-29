import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
    Meteor.call('createSuperUser', (err, res) => {
        if(err) {
            console.log(err);
        }
        else {
            if(res) {
                console.log('Created super user');
                Accounts.createUser({
                    username: 'admin',
                    email: 'admin',
                    password: 'atoadmin',
                    profile: {
                        name: 'Admin',
                        firstName: 'Admin',
                        role: 'admin'
                    }
                });
            }
        }
    });
});