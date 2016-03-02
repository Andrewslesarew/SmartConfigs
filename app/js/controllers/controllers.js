'use strict';

function MainCtrl($scope) {
    var me = this;
    me.actors = [];
    me.actors.push(
      {
        title: 'First added actor',
        description: 'It is first actor, which have description and can be displayed',
        addingDate: new Date(),
        liveTime: new Date(),
        status: 'warning'
      },
      {
        title: 'Second added actor',
        description: 'It is second actor, which have description and can be displayed',
        addingDate: new Date(),
        liveTime: new Date(),
        starred: true,
        status: 'normal'
      }
    );
    me.toStar = function (element) {
        element.starred = !element.starred;
    };
    me.getStarredSum = function(){
        var sum = 0;
        for (var index in me.actors){
            if (me.actors.starred){
                sum++;
            }
        }
        return sum;
    };
    me.getStatusSum = function(statusName){
        var sum = 0;
        for (var index in me.actors){
            if (me.actors.status == statusName){
                sum++;
            }
        }
        return sum;
    };
}
