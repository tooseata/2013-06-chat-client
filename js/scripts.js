$(document).ready(function(){


var refresh = function(){
$.get('https://api.parse.com/1/classes/messages', {limit:'100', order:'-createdAt'}, function(data){
          $.each(data.results, function(index){
            var $userName = $('<a src="#" class="userName"></a>').text(data.results[index].username);
            var $message = $('<span></span>').text(data.results[index].text);
            var $element = $('<p class="userlist"></p>').append($userName.add($message));
            console.log(data);
            $('#messages').after($element);
          });
        });
};

  setTimeout(refresh, 1000);
  user.friends = {
  };

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
      var $userName = $('<a src="#" class="userName"></a>').text(user.name);
      var $message = $('<span></span>').text(message_value);
      var $element = $('<p class="userlist"></p>').append($userName.add($message));
      $('#messages').append($element);
      console.log("Posting to Server");
      console.log(objectToPost);
    },
    error: function(data) {
      console.log('Ajax request failed again', data);
    }
    });

  });

  $('body').on("click", ".userName", function(e){
    e.preventDefault();
    var uniqueId = $(this).text().replace(/\s/, '-');
    if (user.friends[uniqueId]) {
      $('.friends #'+uniqueId).remove();
      delete user.friends[uniqueId];
    } else {
      $('.friends').prepend('<div id="' + uniqueId + '">' + uniqueId.replace(/-/, ' ') + '</div>');
      user.friends[uniqueId] = true;
    }
  });


});