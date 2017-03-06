
 angular.module('<NameHere>.httpModule', [])
.factory('httpFactory', function ($http) {

//Sample functions

  var getAll = function () {
    return $http({
      method: 'GET',
      url: '/api/createdAt'
    })
    .then(function (resp) {
      return resp;
    });
  };

  var addOne = function (story) {
    return $http({
      method: 'POST',
      url: '/api/postto',
      data: { story: story }
    });
  };

  var updateVotes= function(id){
    return $http({
      method: 'POST',
      url: '/api/addVote',
      data: { id : id }
    });
  };

  return {
    getAll: getAll,
    addOne: addOne,
    updateVotes: updateVotes
  };

});
