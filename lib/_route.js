/**
 * Created by edu on 2015-03-28.
 */

// 게시판 리스트
Router.route('/bbs',{
    Template : 'bbs',
    waitOn : function() {
        return [Meteor.subscribe('getAllBbs')];
    },
    data : function() {
        return {
          bbsList : BBSTABLE.find({},{sort:{id:1}}).fetch()
        }
    }
});

// 게시판 등록
Router.route('/bbsInsert',{
    Template : 'bbsInsert',
    waitOn : function() {
        return [Meteor.subscribe('getAllBbs')];
    }
});

// 게시판 수정
Router.route('/bbsMod/:_id',{
    //Template : 'bbsMod',
    name : 'bbsMod',
    waitOn : function() {
        return [Meteor.subscribe('getAllBbs')];
    },
    data : function() {
        return {
            bbsOneData : BBSTABLE.findOne(this.params._id)
        }

    }
});

