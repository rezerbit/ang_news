'use strict';

app.factory('Post', function ($resource) {
  return $resource('https://vivid-fire-764.firebaseIO.com/posts/:id.json');
});
