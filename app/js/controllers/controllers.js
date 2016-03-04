'use strict';

function contains(firstObj, secondObj) {
  for (var key in firstObj) {
    if (!secondObj.hasOwnProperty(key) || secondObj[key].search(firstObj[key])) {
      return false;
    }
  }
  return true;
}

function MainCtrl() {
  var me = this;
  me.addedActors = [];

  me.libruaryActors = [];

  me.possibleStatuses = {};

  //------------------------------May be, will be getted from backend or generated on front:
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
  //-------------------------------------------end of statuses filling
  //----------------------------------- Start of filling datas
  me.libruaryActors = getAddedActors();
  me.addedActors = me.libruaryActors;
  //----------------------------------- End of filling datas
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
