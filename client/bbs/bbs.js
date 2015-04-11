/**
 * Created by edu on 2015-03-25.
 */
Template.bbs.helpers({

    headerTitle: function () {
        return "Q/A 게시판";
    },
    headerDes: function () {
        return "버그 및 개선사항 리스트";
    },
    list: function () {
        if (Meteor.userId()) {
            return this.bbsList;
        } else {
            return [];
        }
    }
});

Template.bbs.events({

    // 전체 체크
    'click input[name=all]': function () {
        if ($("input[name=all]").prop("checked") == true) {
            $("input[type=checkbox]").prop("checked", true);
        }
        if ($("input[name=all]").prop("checked") == false) {
            $("input[type=checkbox]").prop("checked", false);
        }
    },

    // 삭제
    'click button[name=bDel]': function (evt, tmpl) {

        if ($('input[name="checkboxList"]:checked').length > 1) {
            alert("1개만 선택해주세요.");
        } else {
            var vDelId = $('input[name="checkboxList"]:checked').val();
            BBSTABLE.remove({_id: vDelId});
        }

    }


});

Template.bbs.rendered = function () {

};