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
          bbsList : BBSTABLE.find({}).fetch()
        }
    }
});

// 게시판 등록
Router.route('/bbsInsert',{
    Template : 'bbsInsert',
    //name : 'bbsInsert',
    waitOn : function() {
        return [
            Meteor.subscribe('getAllBbs'),
            Meteor.subscribe('userData'),
            Meteor.subscribe('stor'),

        ];
    }
});

// 게시판 수정
Router.route('/bbsMod/:_id',{
    //Template : 'bbsMod',
    name : 'bbsMod',
    waitOn : function() {
        return [
            Meteor.subscribe('getAllBbs'),
            Meteor.subscribe('stor')
        ];
    },
    data : function() {
        return {
            bbsOneData : BBSTABLE.findOne(this.params._id)
        }

    }
});

// test
Router.route('/imageView',{
    Template : 'imageView',
    waitOn : function() {
        return [
            Meteor.subscribe('stor'),
        ];
    }
});


// test
Router.route('/test',{
    Template : 'test',
    waitOn : function() {
        return [
            Meteor.subscribe('stor'),
        ];
    }
});

