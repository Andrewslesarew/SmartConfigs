'use strict';

function contains(firstObj, secondObj) {
  for (var key in firstObj) {
    if (!secondObj.hasOwnProperty(key) || secondObj[key].search(firstObj[key])) {
      return false;
    }
  }
  return true;
}

function MainCtrl($scope) {
  var me = this;

  me.possibleStatuses = {//pairs 'name' : 'value' for output form
    all: {
      title: 'All',
      type: 'all',
      filter:{status: ''}
    },
    problems: {
      title: 'Problems',
      type: 'problems',
      filter:{status: 'problems'}
    },
    warning: {
      title: 'Warning',
      type: 'warning',
      filter:{status: 'warning'}
    },
    normal: {
      title: 'Normal',
      type: 'normal',
      filter: {status: 'normal'}
    }
  };
  me.actualStatus = me.possibleStatuses.all;

  me.addedActors = [];

  me.libruaryActors = [];

  me.addedActors.push(
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
    },
    {
      title: 'Third added actor',
      description: 'It is third actor, which have description and can be displayed',
      addingDate: new Date(),
      liveTime: new Date(),
      starred: false,
      status: 'problems'
    },
    {
      title: 'Fourth added actor',
      description: 'It is fourth actor, which have description and can be displayed',
      addingDate: new Date(),
      liveTime: new Date(),
      starred: false,
      status: 'normal'
    }
  );

  me.libruaryActors.push(
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
    },
    {
      title: 'Third added actor',
      description: 'It is third actor, which have description and can be displayed',
      addingDate: new Date(),
      liveTime: new Date(),
      starred: false,
      status: 'problems'
    },
    {
      title: 'Fourth added actor',
      description: 'It is fourth actor, which have description and can be displayed',
      addingDate: new Date(),
      liveTime: new Date(),
      starred: false,
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
    for (var index in me.addedActors) {
      if (me.addedActors[index].starred == starredStatus) {
        sum++;
      }
    }
    return sum;
  };

  me.getSumByObjectState = function (objectState) {
    var sum = 0;
    for (var index in me.addedActors) {
      var tmpActor = me.addedActors[index];
      if (contains(objectState, tmpActor)) {
        sum++;
      }
    }
    return sum;
  };
  me.getAddedActorsByObjectState = function (objectState) {
    var outAddedActors = [];
    for (var index in me.addedActors) {
      var tmpActor = me.addedActors[index];
      if (contains(objectState, tmpActor)) {
        outAddedActors.push(tmpActor);
      }
    }
    return outAddedActors;
  };
}
