var surveyController = function(){
  self = this;

  this.title = $("input[name='title']").val();
  this.pointValue = $("input[name='pointValue']").val();
  this.description = $("input[name='description']").val();
  this.questions = [];
  getQuestions();

  function getQuestions(){
    $("input[name='question']").each(function(){
      if ($(this).val() !== "") {
        self.questions.push({title: $(this).val()});
      };
    })
  };

  this.validTitle = function(){
    if (self.title.length < 100 && self.title.length > 0){
      return true;
    } else {
      return false;
    }
  };

  this.validPointValue = function(){
    if ($.isNumeric(self.pointValue) && self.pointValue > 0){
      return true;
    } else {
      return false;
    }
  };

  this.validDescription = function(){
    if (self.description.length < 500 && self.description.length > 0){
      return true;
    } else {
      return false;
    }
  };

  this.validQuestions = function(){
    if (self.questions.length){
      return true;
    } else {
      return false;
    }
  };

};

surveyController.prototype.validate = function(){
  if (this.validTitle() && this.validPointValue() && this.validDescription() && this.validQuestions()){
    return true;
  } else {
    return false;
  };
}
