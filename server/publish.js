/**
 * Created by edu on 2015-03-28.
 */
Meteor.publish('getAllBbs',function(){
    return BBSTABLE.find();
});