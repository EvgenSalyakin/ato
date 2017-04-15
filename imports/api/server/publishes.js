import {Meteor} from 'meteor/meteor';
import { Cards, Outlets } from '../lib/collections';

Meteor.publish('users', function() {
    return Meteor.users.find();
});


Meteor.publish('Cards', () => {
    return Cards.find();
});

Meteor.publish('CardsByOwnerID', function (id) {
    return Cards.find({'OwnerID': id});
});

Meteor.publish('Outlets', () => {
    return Outlets.find();
});

Meteor.publish('OutletsByOwnerID', function (id) {
    return Outlets.find({'OwnerID': id});
});
