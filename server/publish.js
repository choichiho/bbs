/**
 * Created by edu on 2015-03-28.
 */
Meteor.publish('getAllBbs',function(){
    return BBSTABLE.find();
});

Meteor.publish("userData", function () {
    if (this.userId) {
        return Meteor.users.find({_id: this.userId},
            {fields: {'other': 1, 'things': 1}});
    } else {
        this.ready();
    }
});

Meteor.publish("stor", function () {
    return STOR.find();
});