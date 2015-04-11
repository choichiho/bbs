/**
 * Created by edu on 2015-03-26.
 */
Meteor.startup(function() {


        if(BBSTABLE.find().count() === 0) {
            BBSTABLE.insert({id: 1, userName: '최치호', title: '게시판수정해주세요.', context: '게시판수정해주세요', regDate: '20150325'});
            BBSTABLE.insert({id: 2, userName: '김진영', title: '장난입니다.', context: '게시판수정해주세요', regDate: '20150325'});
            BBSTABLE.insert({id: 3, userName: '이샛별', title: '안녕하세요.', context: '게시판수정해주세요', regDate: '20150325'});
        }
    }
)