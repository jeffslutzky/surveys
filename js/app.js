"use strict";

var questionHTML = "<div class='question'>\
<p>Question <input type='text' name='question'> \
<span class='delete-question'><button type='button'>delete</button></span>\
</p>\
</div>";


$(function() {

  // show survey form when "create survey" button is clicked
  $(".survey-button").on("click", function(){
    showSurvey();
  });

  // add a new question field
  $(".add-question").on("click", function(){
    $(this).parent().before(questionHTML);
  });

  // remove a question field
  $(".survey").on("click", ".delete-question", function(){
    $(this).parent().parent().remove();
  });

  $(".submit").on("click", function(){
    // remove any previous error or success messages
    $(".message").empty();

    // instantiate a new survey from js/controller.js
    var survey = new surveyController();

    // show error messages if any field is invalid
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

    // create and display JSON object
    if (survey.validate()) {
      $(".message").append("<p>Survey submitted successfully!</p>" + "<p>" + JSON.stringify(survey) + "</p>");
      reset();
    };
  });
});


// show the survey form and remove any messages
var showSurvey = function(){
  $(".survey").addClass("survey-visible").removeClass("survey-hidden");
  $(".message").empty();
}

// reset the page if the user wants to create a new survey
var reset = function(){
  $("input[name='title']").val("");
  $("input[name='pointValue']").val("");
  $("input[name='description']").val("");
  $(".question").remove();
  $(".add-question").before(questionHTML);
  $(".survey").removeClass("survey-visible").addClass("survey-hidden");
};
