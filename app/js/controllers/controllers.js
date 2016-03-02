'use strict';

function MainCtrl($scope) {
  var me = this;

  me.actualStatus = '';
  me.possibleStatuses = {//pairs "name" : "value" for output form
    all: '',
    warning: 'warning',
    problems: 'problems',
    normal: 'normal'
  };

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

  me.setActualStatus = function (newValue) {
    me.actualStatus = newValue;
  };
  me.getPossibleStatusKeys = function () {
    return Object.keys(me.possibleStatuses)
  };

  me.toStar = function (element) {
    element.starred = !element.starred;
  };
  me.getStarredSum = function (starredStatus) {
    var sum = 0;
    for (var index in me.actors) {
      if (me.actors[index].starred == starredStatus) {
        sum++;
      }
    }
    return sum;
  };

  me.getStatusSum = function (statusName) {
    var sum = 0;
    for (var index in me.actors) {
      if (me.actors[index].status.search(statusName) != -1) {
        sum++;
      }
    }
    return sum;
  };
  me.getActorsByStatus = function (statusName) {
    var outActors = [];
    for (var index in me.actors) {
      var tmpActor = me.actors[index];
      if (tmpActor.status.search(statusName) != -1) {
        outActors.push(tmpActor);
      }
    }
    return outActors;
  };
}
