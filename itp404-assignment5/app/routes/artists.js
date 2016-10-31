import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return $.ajax({
      type: 'get',
      url: 'http://itp-api.herokuapp.com/api/artists',
    }).then(function(promise){
      return promise.artists;
    });
  }
});
