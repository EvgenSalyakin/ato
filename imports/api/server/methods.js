import {Cards, Outlets} from '../lib/collections';
import {Meteor} from 'meteor/meteor';

Meteor.startup(() => {
    Meteor.methods({
        createSuperUser() {
            return Meteor.users.find().fetch().length === 0;
        },
        createCard(dataObj) {
            Cards.insert(dataObj);
        },
        createOutlets(dataObj) {
            Outlets.insert(dataObj);
        },
        removeOutlets(dataObj) {
            Outlets.remove(dataObj);
        },
        updateOutlets(dataObj) {
            Outlets.update(dataObj._id, {$set:dataObj});
        },
        updateCard(dataObj) {
            Cards.update(dataObj._id, {$set:dataObj});
        },
        createPerson(dataObj) {
            Accounts.createUser(dataObj);
        },
        removePerson(dataObj) {
            Meteor.users.remove(dataObj);
        },
        updatePerson(dataObj) {
            Meteor.users.update(dataObj._id, {$set:dataObj});
        }
    });
});