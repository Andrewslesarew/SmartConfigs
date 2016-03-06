'use strict';

function contains(firstObj, secondObj) {
  for (var key in firstObj) {
    try {
      if (!secondObj.hasOwnProperty(key) || secondObj[key].search(firstObj[key])) {
        return false;
      }
    } catch (TypeError) {
      if (secondObj[key] != firstObj[key]) {
        return false;
      }
    }
  }
  return true;
}

function MainCtrl() {
  var me = this;

  me.toStar = function (element) {
    element.starred = !element.starred;
  };

  me.getSumByObjectState = function (actors, objectState) {
    var sum = 0;
    for (var index in actors) {
      var tmpActor = actors[index];
      if (contains(objectState, tmpActor)) {
        sum++;
      }
    }
    return sum;
  };
  me.getActorsByObjectState = function (actors, objectState) {
    var outAddedActors = [];
    for (var index in actors) {
      var tmpActor = actors[index];
      if (contains(objectState, tmpActor)) {
        outAddedActors.push(tmpActor);
      }
    }
    return outAddedActors;
  };

  me.getObjectKeys = function (object) {
    return Object.keys(object);
  };

  me.alert = function (string) {
    alert(string);
  }
}
