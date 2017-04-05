import {Cards} from '../lib/collections';

Meteor.startup(() => {
    Meteor.methods({
        createSuperUser() {
            return Meteor.users.find().fetch().length === 0;
        },
        createCard(dataObj) {
            Cards.insert(dataObj);
        },
        updateCard(dataObj) {
            Cards.update(dataObj._id, {$set:dataObj});
        }
    });
});