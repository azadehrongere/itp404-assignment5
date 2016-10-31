import Ember from 'ember';

export default Ember.Route.extend({

  model: function(params) {
    var artistId = params.id;
    var theUrl = 'http://itp-api.herokuapp.com/api/artists/' + artistId + '/songs';
    var promise = $.ajax({
      type: 'get',
      url:  theUrl
    });
    return promise;
  }
});
