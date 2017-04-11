import {Meteor} from 'meteor/meteor';
const json = require('../../../privat/data.json');

Meteor.methods({
    getLocationsFromJSON() {
//console.dir(json);
        //let jd = JSON.parse(json);
        //console.log(jd);

        let data = json.photos;
        //console.dir(data);
        return data;
    },

});