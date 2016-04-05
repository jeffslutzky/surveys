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
    var valid = false;
    var object = [];
    var title = $("input[name='title']").val();
    var points = $("input[name='points']").val();
    var description = $("input[name='description']").val();
    if (title.length < 100) {
      valid = true;
    } else {
      $(".message").append("<p>Title must be less than 100 characters.</p>");
    };
    if ($.isNumeric(points) && points > 0) {
      valid = true;
    } else {
      $(".message").append("<p>Point value must be a positive integer.</p>");
    };
    if (description.length < 500) {
      valid = true;
    } else {
      $(".message").append("<p>Description must be less than 500 characters.</p>");
    };
    var questions = [];
    $("input[name='question']").each(function(){
      if ($(this).val() !== "") {
        questions.push({title: $(this).val()});
      };
    });
    if (questions.length) {
      valid = true;
    } else {
      $(".message").append("<p>The survey must contain at least one question.</p>");
    };
    if (valid == true) {
      object.push({title: title, pointValue: points, description: description, questions: questions});
      $("input[name='title']").val("");
      $("input[name='points']").val("");
      $("input[name='description']").val("");
      // clear question fields
      // refactor code
    };

  });



})

var validate = function(){
  debugger;
};
