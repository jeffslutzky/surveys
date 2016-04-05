$(function() {

  $(".survey-button").on("click", function(){
    $(".survey").addClass("survey-visible").removeClass("survey-hidden");
  });

  $(".add-question").on("click", function(){
    $(this).parent().before("<div class='question'>\
    <p>Question <input type='text' name='question'> \
    <span class='delete-question'><button type='button'>delete</button></span>\
    </p>\
    </div>");
  });

  $(".survey").on("click", ".delete-question", function(){
    $(this).parent().parent().remove();
  });

  $(".submit").on("click", function(){
    $(".message").empty();
    var object = [];
    var title = $("input[name='title']").val();
    var points = $("input[name='points']").val();
    var description = $("input[name='description']").val();
    if (title.length < 100) {
      object.push({title: title});
    } else {
      $(".message").append("<p>Title must be less than 100 characters.</p>");
    };
    if ($.isNumeric(points) && points > 0) {
      object.push({pointValue: points});
    } else {
      $(".message").append("<p>Point value must be a positive integer.</p>");
    };
    if (description.length < 500) {
      object.push({description: description});
    } else {
      $(".message").append("<p>Description must be less than 500 characters.</p>");
    };
    object.push({title: title, pointValue: points, description: description});
    var questions = [];
    $("input[name='question']").each(function(){
      questions.push({title: $(this).val()});
    });
    object.push(questions);
  });



})

var validate = function(){
  debugger;
};
