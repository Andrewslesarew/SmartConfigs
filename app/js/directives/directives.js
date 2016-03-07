'use strict';

function ActorPreviewListDirective() {
  return {
    replace: true,
    restrict: 'E',
    templateUrl: 'templates/actors-libruary-list.html',
    controller: function () {
      var me = this;
      me.actors = getActors();

      me.statuses = getPreviewStatuses();

      me.actualStatus = me.statuses.all;

      me.setActualStatus = function (newActualStatus) {
        me.actualStatus = newActualStatus;
      };

      me.getStatuses = function () {
        return me.statuses
      };
    },
    controllerAs: 'actorsLibruaryCtrl'
  }
}

function AddedActorsDirective() {
  return {
    replace: true,
    restrict: 'E',
    templateUrl: 'templates/added-actors-list.html',
    controller: function () {
      var me = this;

      me.emptyActor = {
        title: 'This is example of actor',
        description: 'Please, drop to this place actors from the left listthat you want to use in your project',
        addingDate: new Date(),
        liveTime: new Date()
      };

      me.actors = getAddedActors();

      me.statuses = getAllStatuses();

      me.actualStatus = me.statuses.all;

      me.setActualStatus = function (newActualStatus) {
        me.actualStatus = newActualStatus;
      };

      me.getEmptyActor = function () {
        return me.emptyActor;
      };

      me.getStatuses = function () {
        return me.statuses;
      };

      me.containObject = function (array, object) {
        if (!array || !object) { // if null
          return false;
        }
        for (var index in array) {
          if (array[index] == object) {
            return true;
          }
        }
        return false;
      };

      me.addActor = function ($scope, $event) {
        var newObj = $event.data;
        if (!newObj || me.containObject(me.actors, newObj)) {
          return;
        }
        me.actors.push(newObj);
        newObj.addingDate = new Date();
        newObj.liveTime = new Date();
        newObj.status = 'new';
      };

      me.removeActor = function ($scope, $event) {
        var removeActor = $event.data;
        if (!removeActor || !me.containObject(me.actors, removeActor)) {
          return;
        }
        me.actors.splice(me.actors.indexOf(removeActor), 1);
        removeActor.addingDate = undefined;
        removeActor.liveTime = undefined;
        removeActor.status = undefined;
      };

      me.actorsListIsEmpty = function () {
        return me.actors.length == 0;
      };
    },
    controllerAs: 'addedActorsCtrl'
  }
}

function ActorPreviewDirective($parse) {
  return {
    replace: true,
    restrict: 'E',
    templateUrl: 'templates/actor-preview.html',
    controller: function ($scope, $element, $attrs) {
      var me = this;
      me.actor = $parse($attrs.actor)($scope);//getting the actor from actor attribute
    },
    controllerAs: 'actorPreviewCtrl'
  }
}

function ActorMiniPreviewDirective() {
  return {
    replace: true,
    restrict: 'E',
    templateUrl: 'templates/actor-mini-preview.html',
    controller: function () {
    },
    controllerAs: 'actorMiniPreviewCtrl'
  }
}
