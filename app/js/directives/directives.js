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
