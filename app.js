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
  })

  $(".submit").on("click", function(){
    var title = $("input[name='title']").val();
    var points = $("input[name='points']").val();
    var description = $("input[name='description']").val();
    var questions = [];
    $("input[name='question']").each(function(){
      questions.push($(this).val());
    })
  })

})
