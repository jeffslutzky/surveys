$(function() {

  $(".survey-button").on("click", function(){
    $(".survey").addClass("survey-visible").removeClass("survey-hidden");
  });

  $(".add-question").on("click", function(){
    $(this).before("<div class='question'>\
    <p>Question <input type='text' name='question'> \
    <span class='delete-question'><button type='button'>delete</button></span>\
    </p>\
    </div>");
  });

  $(".survey").on("click", ".delete-question", function(){
    $(this).parent().remove();
  })

})
