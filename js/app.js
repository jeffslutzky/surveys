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
    var survey = new surveyController();

    if (!survey.validTitle()) {
      $(".message").append("<p>There must be a title of fewer than 100 characters.</p>");
    };

    if (!survey.validPointValue()) {
      $(".message").append("<p>Point value must be a positive integer.</p>");
    };

    if (!survey.validDescription()) {
      $(".message").append("<p>There must be a description of fewer than 500 characters.</p>");
    };

    if (!survey.validQuestions()) {
      $(".message").append("<p>The survey must contain at least one question.</p>");
    };

    // create and show JSON object
    if (survey.validate()) {
      debugger;
      $(".message").append("<p>Survey submitted succesfully!</p>" + "<p>" + JSON.stringify(survey) + "</p>");
      reset();
    };
  });
});

var showSurvey = function(){
  $(".survey").addClass("survey-visible").removeClass("survey-hidden");
  $(".message").empty();
}

var reset = function(){
  $("input[name='title']").val("");
  $("input[name='pointValue']").val("");
  $("input[name='description']").val("");
  $(".question").remove();
  $(".add-question").before(questionHTML);
  $(".survey").removeClass("survey-visible").addClass("survey-hidden");
};
