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

    var title = $("input[name='title']").val();
    var pointValue = $("input[name='pointValue']").val();
    var description = $("input[name='description']").val();
    var questions = [];

    // validate title
    if (title.length < 100 && title.length > 0) {
      validTitle = true;
    } else {
      $(".message").append("<p>There must be a title of fewer than 100 characters.</p>");
    };

    // validate points
    if ($.isNumeric(pointValue) && pointValue > 0) {
      validPoints = true;
    } else {
      $(".message").append("<p>Point value must be a positive integer.</p>");
    };

    // validate description
    if (description.length < 500 && description.length > 0) {
      validDescription = true;
    } else {
      $(".message").append("<p>There must be a description of fewer than 500 characters.</p>");
    };

    // collect non-empty questions into array
    $("input[name='question']").each(function(){
      if ($(this).val() !== "") {
        questions.push({title: $(this).val()});
      };
    });

    // validate array of questions
    if (questions.length) {
      validQuestions = true;
    } else {
      $(".message").append("<p>The survey must contain at least one question.</p>");
    };

    // create and show JSONobject
    if (validTitle && validPoints && validDescription && validQuestions) {
      var survey = new Survey(title, pointValue, description, questions);
      $(".message").append("<p>Survey submitted succesfully!</p>" + "<p>" + JSON.stringify(survey) + "</p>");
      reset();
    };
  });
});

var showSurvey = function(){
  $(".survey").addClass("survey-visible").removeClass("survey-hidden");
  $(".message").empty();
}

var Survey = function(title, pointValue, description, questions){
  this.title = title;
  this.pointValue = pointValue;
  this.description = description;
  this.questions = questions;
};

var reset = function(){
  $("input[name='title']").val("");
  $("input[name='pointValue']").val("");
  $("input[name='description']").val("");
  $(".question").remove();
  $(".add-question").before(questionHTML);
  $(".survey").removeClass("survey-visible").addClass("survey-hidden");
};
