//function for adding total scores.
var addResults = function(results){
  var totalScore = 0;
  for(var i = 0; i<results.length; i++){
    totalScore += results[i];
  }
  return totalScore;
};

$(document).ready(function(){
  $("#form form").submit(function(event){
    event.preventDefault();
    //array for storing results
    var results =[];
    // for loop for entering values from the form to the array
    for(var index =0; index<10; index++){
      results[index]= parseInt($("input:radio[name=question"+(index+1)+"]:checked").val());
    }

     var totalScore = addResults(results);
    $("#scoreResult").text(totalScore);
  });

});
