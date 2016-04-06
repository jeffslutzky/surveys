"use strict";

var questionHTML = "<div class='question'>\
<p>Question <input type='text' name='question'> \
<span class='delete-question'><button type='button'>delete</button></span>\
</p>\
</div>";

$(function() {

  $(".survey-button").on("click", function(){
    showSurvey();
  });

  $(".add-question").on("click", function(){
    $(this).parent().before(questionHTML);
  });

  $(".survey").on("click", ".delete-question", function(){
    $(this).parent().parent().remove();
  });

  $(".submit").on("click", function(){
    $(".message").empty();
    var validTitle = false;
    var validPoints = false;
    var validDescription = false;
    var validQuestions = false;
    var object = new Object();
    var title = $("input[name='title']").val();
    var pointValue = $("input[name='pointValue']").val();
    var description = $("input[name='description']").val();
    var questions = [];

    if (title.length < 100 && title.length > 0) {
      validTitle = true;
    } else {
      $(".message").append("<p>There must be a title of fewer than 100 characters.</p>");
    };

    if ($.isNumeric(pointValue) && pointValue > 0) {
      validPoints = true;
    } else {
      $(".message").append("<p>Point value must be a positive integer.</p>");
    };

    if (description.length < 500 && description.length > 0) {
      validDescription = true;
    } else {
      $(".message").append("<p>There must be a description of fewer than 500 characters.</p>");
    };

    $("input[name='question']").each(function(){
      if ($(this).val() !== "") {
        questions.push({title: $(this).val()});
      };
    });

    if (questions.length) {
      validQuestions = true;
    } else {
      $(".message").append("<p>The survey must contain at least one question.</p>");
    };

    if (validTitle && validPoints && validDescription && validQuestions) {
      makeObject(object, title, pointValue, description, questions);
      reset();
    };
  });
});

var showSurvey = function(){
  $(".survey").addClass("survey-visible").removeClass("survey-hidden");
  $(".message").empty();
}

var makeObject = function(object, title, pointValue, description, questions){
  object.title = title;
  object.pointValue = pointValue;
  object.description = description;
  object.questions = questions;
  $(".message").append("<p>Survey submitted succesfully!</p>" + "<p>" + JSON.stringify(object) + "</p>");
};

var reset = function(){
  $("input[name='title']").val("");
  $("input[name='pointValue']").val("");
  $("input[name='description']").val("");
  $(".question").remove();
  $(".add-question").before(questionHTML);
  $(".survey").removeClass("survey-visible").addClass("survey-hidden");
};
