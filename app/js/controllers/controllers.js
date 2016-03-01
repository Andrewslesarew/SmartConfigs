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
    element.starred = true;
  };
}
