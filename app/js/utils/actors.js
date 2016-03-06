'use strict';

var knowedActors = [
  {
    title: 'First added actor',
    description: 'It is first actor, which have description and can be displayed',
    addingDate: new Date(),
    liveTime: new Date(),
    starred: false,
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
    starred: false
    //addingDate: new Date(),
    //liveTime: new Date(),
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

var allStatuses = {//pairs 'name' : 'value' for output form
  all: {
    title: 'All',
    type: 'all',
    filter:{}
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
  },
  new: {
    title: 'New actors',
    type: 'newActors',
    filter: {status: 'new'}
  }
};

var previewStatuses = {//pairs 'name' : 'value' for output form
  all: {
    title: 'All',
    type: 'all',
    filter:{}
  },
  starred: {
    title: 'Starred',
    type: 'starred',
    filter:{starred: true}
  },
  unstarred: {
    title: 'Unstarred',
    type: 'unstarred',
    filter:{starred: false}
  }
};

function getPreviewStatuses() {
  return previewStatuses;
}

function getAllStatuses() {
  return allStatuses;
}

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
