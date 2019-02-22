var addResults = function(results){

};

$(document).ready(function(){
  $("#form form").submit(function(){
    var question1 = parseInt($("input:radio[name=question1]:checked").val());
    var question2 = parseInt($("input:radio[name=question2]:checked").val());
    alert(question1);
    alert(question2);
  });

});
