var user = {};

if(!/(&|\?)username=/.test(window.location.search)){
  var newSearch = window.location.search;
  if(newSearch !== '' & newSearch !== '?'){
    newSearch += '&';
  }
  newSearch += 'username=';
  user.name = prompt('What is your name?') || 'anonymous';
  newSearch += user.name;
  window.location.search = newSearch;
  // var userName = newSearch;
} else {
  user.name = window.location.search.replace(/^\?username=/, '');
}

// Don't worry about this code, it will ensure that your ajax calls are allowed by the browser
$.ajaxPrefilter(function(settings, _, jqXHR) {
  jqXHR.setRequestHeader("X-Parse-Application-Id", "voLazbq9nXuZuos9hsmprUz7JwM2N0asnPnUcI7r");
  jqXHR.setRequestHeader("X-Parse-REST-API-Key", "QC2F43aSAghM97XidJw8Qiy1NXlpL5LR45rhAVAf");
});

// $.get('https://api.parse.com/1/classes/messages', {order:'createdAt'}, function(data){
//   $.each(data.results, function(index){
//     // return $('#main').append('<p>' + JSON.stringify(data.results[index].username) + ': ' + JSON.stringify(data.results[index].text) + '</p>');
//     return $('#main').append ('<p>' + data.results[index].username + ': ' + data.results[index].text + '</p>');
//   });
//   //console.log(data.results);
// });

// $.ajax('https://api.parse.com/1/classes/messages', {
//   contentType: 'application/json',
//   success: function(data){
//     $('#main').append(data.results[1].username);
//     console.log(data);
//   },error: function(data) {
//     console.log('Ajax request failed');
//   }
//   
// });
