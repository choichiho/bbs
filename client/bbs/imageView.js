/**
 * Created by edu on 2015-04-07.
 */
Template.test.helpers({
    images: function () {
        return STOR.find(); // Where Images is an FS.Collection instance
    }
});