/**
 * Created by edu on 2015-03-28.
 */
Template.bbsMod.helpers({

    bbsOneTitle : function() {
        return this.bbsOneData.title;
    },
    bbsOneName : function () {
        return this.bbsOneData.userName;
    },
    bbsOneContext : function() {
        return this.bbsOneData.context;
    }

});

Template.bbsMod.events({

    'click button[name=bBbsMod]' : function(evt, tmpl) {
        BBSTABLE.update(
            {_id : this.bbsOneData._id},
            {$set:
                {
                    title: tmpl.find('input[name=modTitle]').value,
                    userName: tmpl.find('input[name=modRegName]').value,
                    context: tmpl.find('textarea[name=modContext]').value
                }
            },
            {multi : true}
        ,Router.go('/bbs'));
    }

});

Template.bbsMod.rendered = function() {

};
