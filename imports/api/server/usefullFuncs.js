import {Meteor} from 'meteor/meteor';
const json = require('../../../privat/data.json');

Meteor.methods({
    getLocationsFromJSON() {
        let data = json.photos;
        return data;
    },

});