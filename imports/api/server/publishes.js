import {Meteor} from 'meteor/meteor';
import {Cards, Outlets} from '../lib/collections';

Meteor.publish('users', function() {
    return Meteor.users.find();
});

Meteor.publish('Cards', () => {
    // if (this.userId === null) {
    //     return false;
    // }

    return Cards.find();
});

Meteor.publish('CardsByOwnerID', function (id) {
    // if (this.userId === null) {
    //     return false;
    // }
    return Cards.find({'OwnerID': id});
});

Meteor.publish('Outlets', () => {
    // if (this.userId === null) {
    //     return false;
    // }

    return Outlets.find();
});

Meteor.publish('OutletsByOwnerID', function (id) {
    // if (this.userId === null) {
    //     return false;
    // }
    return Outlets.find({'OwnerID': id});
});
