Meteor.startup(() => {
    Meteor.methods({
        createSuperUser() {
            return Meteor.users.find().fetch().length === 0;
        }
    });
});