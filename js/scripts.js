$(document).ready(function(){
  var refresh = function(){
$.get('https://api.parse.com/1/classes/messages', {order:'-createdAt'}, function(data){
          $.each(data.results, function(index){
            var userName = $('<a src="#" class="userName"></a>').text(data.results[index].username);
            var message = $('<span></span>').text(data.results[index].text);
            var element = $('<p class="userlist"></p>').append(userName.add(message));
            $('#messages').after(element);
          });
        });
};

  setInterval(refresh, 3000);

  user.friends = {};

  $('.send').on('click', function() {
    var message_value = $('#message').val();
    var objectToPost = {
      username: user.name,
      text:message_value
    };

    $.ajax("https://api.parse.com/1/classes/messages", {
      type: 'post',
      contentType: 'application/json',
      data: JSON.stringify(objectToPost),
      success: function(data) {
      $('#messages').append('<p>' + user.name + ': ' + objectToPost.text + '</p>');
      console.log("Posting to Server");
    },
    error: function(data) {
      console.log('Ajax request failed again', data);
    }
    });
  });

  $('#messages').on("click", ".userName", function(e){
    e.preventDefault();
    var clickedUserName = $(this).text();
    if (user.friends[clickedUserName]) {
      delete user.friends[clickedUserName];
    } else {
      user.friends[clickedUserName] = true;
    }
  });


});