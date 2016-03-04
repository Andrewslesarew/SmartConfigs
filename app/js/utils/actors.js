'use strict';

var knowedActors = [
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
    //addingDate: new Date(),
    //liveTime: new Date(),
    //starred: false,
    //status: 'problems'
  },
  {
    title: 'Fourth added actor',
    description: 'It is fourth actor, which have description and can be displayed',
    addingDate: new Date(),
    liveTime: new Date(),
    starred: false,
    status: 'normal'
  }
];

function getActors() {
  return knowedActors;
}

function getAddedActors() {
  var result = [];
  for (var index in knowedActors) {
    var currentActor = knowedActors[index];
    if (currentActor.addingDate) {
      result.push(currentActor);
    }
  }
  return result;
}
