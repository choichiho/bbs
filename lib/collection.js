/**
 * Created by edu on 2015-03-26.
 */
BBSTABLE = new Meteor.Collection("bbsTable");

STOR = new FS.Collection("stor", {
    stores: [new FS.Store.FileSystem("stor", {path: "/home/choe/meteor/media"})]
});

STOR.allow({
    insert: function(userId, file) {
        return true;
    },
    update: function(userId, files, fields, modifier) {
        return true;
    },
    remove: function(userId, files) {
        return true;
    },
    download: function(userId, file) {
        return true;
    }
});