/**
 * Created by edu on 2015-03-28.
 */

Template.bbsInsert.helpers({});

Template.bbsInsert.events({
    'click button[name=bBbsReg]': function (evt, tmpl) {

        // 사용자 등록
        if (tmpl.find('input[name=title]').value === '' ||
            tmpl.find('textarea[name=context]').value === '') {

            alert('값을 입력하세요.');

        } else {

            BBSTABLE.insert({
                id: BBSTABLE.findOne({}, {sort: {id: -1}}).id + 1,
                userName: Meteor.user().emails[0].address,
                title: tmpl.find('input[name=title]').value,
                context: tmpl.find('textarea[name=context]').value,
                regDate: new Date().toLocaleString()
            }, Router.go('/bbs'));
        }

    }
});

Template.bbsInsert.rendered = function () {
    //tinymce.init({selector:'textarea'});
};
