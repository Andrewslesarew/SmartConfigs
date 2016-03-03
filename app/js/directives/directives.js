'use strict';

function ActorPreviewDirective() {
  return {
    replace: true,
    restrict: 'E',
    templateUrl: 'templates/actor-list-item.html'
  }
}

function ActorPreviewListDirective() {
  return {
    replace: true,
    restrict: 'E',
    templateUrl: 'templates/actors-libruary-list.html'
  }
}
