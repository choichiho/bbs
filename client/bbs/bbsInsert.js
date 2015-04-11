/**
 * Created by edu on 2015-03-28.
 */
var fileEvt = "";

Template.bbsInsert.helpers({});

Template.bbsInsert.events({

    //파일첨부
    "change input[name=fileUpload]": function (evt, tmpl) {

        FS.Utility.eachFile(evt, function (file) {
            yourFile = new FS.File(file);
            //yourFile.creatorId = Meteor.userId(); // add custom data
            alert("file upload");

            STOR.insert(yourFile, function (err, fileObj) {
                if (!err) {
                    tmpl.find('input[name=fileInsertList]').value = fileObj._id;
                    alert("첨부하였습니다.!!" + fileObj._id);

                }
            });
        });

    },
    'submit form': function (evt, tmpl) {
        evt.preventDefault();

        // 사용자 등록
        if (tmpl.find('input[name=title]').value === '' ||
            tmpl.find('textarea[name=context]').value === '') {

            alert('값을 입력하세요.');

        } else {

            var post = {
                    id: parseInt(BBSTABLE.findOne({}, {sort: {id: -1}}).id) + 1,
                    userName: Meteor.user().emails[0].address,
                    title: tmpl.find('input[name=title]').value,
                    context: tmpl.find('textarea[name=context]').value,
                    regDate: new Date().toLocaleString(),
                    fileId : tmpl.find('input[name=fileInsertList]').value
            };

            post._id = BBSTABLE.insert(post);
            Router.go('bbs', post);
        }


    }

});

Template.bbsInsert.rendered = function () {

};
