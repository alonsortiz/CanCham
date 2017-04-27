angular.module('starter.services', [])


.service('UserService', function() { 

//for the purpose of this example I will store user data on ionic local storage but you should save it on a database

  var setUser = function(user_data) {
    window.localStorage.starter_facebook_user = JSON.stringify(user_data);
  };

  var getUser = function(){
    return JSON.parse(window.localStorage.starter_facebook_user || '{}');
  };

  /*var setEmailUser = function(username, password) {
    window.localStorage.setItem("username", JSON.stringify(username));
    window.localStorage.setItem("password", JSON.stringify(password));
  };

  var getEmailUser = function() {
    if(JSON.parse(window.localStorage.getItem("username")) !== undefined && JSON.parse(window.localStorage.getItem("password")) !== undefined) {
          return true;
      } else {
          return false;
      }
  };*/

  return {
    getUser: getUser,
    setUser: setUser
    //getEmailUser: getEmailUser,
    //getEmailUser: getEmailUser
  };
})

.factory('Request', function($http) {
         
         var getJSON = '';
         
         return {
         getInfo: function() {
         return $http.jsonp(getJSON);
         }
         };
         
})

.factory('Events', function($q, $ionicPlatform, $cordovaCalendar, $http, $ionicLoading) {

  var incrementDate = function (date, amount) {
      var tmpDate = new Date(date);
      tmpDate.setDate(tmpDate.getDate() + amount)
      return tmpDate;
  };

  var incrementHour = function(date, amount) {
    var tmpDate = new Date(date);
    tmpDate.setHours(tmpDate.getHours() + amount);
    return tmpDate;
  };
   
  var eventos = [];
  var getEvents = function(){
    $ionicLoading.show();
    return $http.get('https://admin-canchammx-aileennag.c9users.io/eventos')
      .success(function(data, status, headers,config){
        console.log('data success');
        $ionicLoading.hide();
        data.forEach(evento=>{
          eventos.push(evento);
        });
      })
      .error(function(data, status, headers,config){
        $ionicLoading.hide();
        console.log('data error');
      })
      .then(function(result){
        var deferred = $q.defer();
        var promises = [];

        eventos.forEach(function(ev) {
          //add enddate as 1 hour plus
          ev.enddate = incrementHour(ev.fecha, 10);
          ev.fecha = incrementHour(ev.fecha, 5);
          console.log('try to find '+JSON.stringify(ev));
          if (window.plugins && window.plugins.calendar) {
            if (device.platform === "iOS") {
              promises.push($cordovaCalendar.findEvent({
                title:ev.nombre,
                startDate:ev.fecha
              }));
            }
          }else console.log("Calendar plugin not available.");
        });
      
        $q.all(promises).then(function(results) {
          console.log("in the all done");
          //should be the same len as events
          for(var i=0;i<results.length;i++) {
            eventos[i].status = results[i].length === 1;
          }
          deferred.resolve(eventos);
        });
      
      return deferred.promise;
    });
  }
  
  var addEvent = function(event) {
    var deferred = $q.defer();
    if (window.plugins && window.plugins.calendar) {
      $cordovaCalendar.createEvent({
        title: event.nombre,
        location: event.direccion,
        notes: event.descripcion,
        startDate: new Date(event.fecha),
        endDate: event.enddate
      }).then(function (result) {
        alert(" has been added to your calendar.");
        deferred.resolve(1);
      }, function (err) {
        console.log("Calendar fail " + error);
        deferred.resolve(0);
      });
    }else console.log("Calendar plugin not available.");
    
    return deferred.promise;
  }
  
  return {
    get:getEvents,
    add:addEvent
  };

})

.factory('Documents', function($q, $timeout, $cordovaFileTransfer, $http, $ionicLoading) {
  var documentos = [];
  var getDocumentos = function(){
    $ionicLoading.show();
    return $http.get('https://admin-canchammx-aileennag.c9users.io/documentos')
      .success(function(data, status, headers,config){
        $ionicLoading.hide();
        console.log('data success');
        data.forEach(doc=>{
          documentos.push(doc);
        });
      })
      .error(function(data, status, headers,config){
        $ionicLoading.hide();
        console.log('data error');
      })
      .then(function(result){
        var deferred = $q.defer();
        var promises = [];
			
        $q.all(promises).then(function(results) {
          console.log("in the all done");
          //should be the same len as events
          for(var i=0;i<results.length;i++) {
            documentos[i].status = results[i].length === 1;
          }
          deferred.resolve(documentos);
        });
			
			return deferred.promise;
    });
  }
  
  return {
		get:getDocumentos
  };

});


