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
      me.actors = getAddedActors();

      me.statuses = getAllStatuses();

      me.actualStatus = me.statuses.all;

      me.setActualStatus = function (newActualStatus) {
        me.actualStatus = newActualStatus;
      };

      me.getStatuses = function () {
        return me.statuses;
      };

      me.containObject = function (array, object) {
        for (var index in array) {
          if (array[index] == object) {
            return true;
          }
        }
        return false;
      };

      me.addActor = function ($scope, $event) {
        var newObj = $event.data;
        if (!me.containObject(me.actors, newObj)) {
          me.actors.push(newObj);
          newObj.addingDate = new Date();
          newObj.liveTime = new Date();
          newObj.status = 'new';
        }
      };
    },
    controllerAs: 'addedActorsCtrl'
  }
}

function ActorPreviewDirective() {
  return {
    replace: true,
    restrict: 'E',
    templateUrl: 'templates/actor-preview.html',
    controller: function () {
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
