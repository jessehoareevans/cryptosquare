$(document).ready(function(){

  function scramble(sentence){
    var lettersOnly = /[^A-Za-z]/gi;
    sentence = sentence.replace(lettersOnly, "").toLowerCase();
    var boxes = 0;

    //determines box size
    var square = Math.sqrt(sentence.length)
    var roundSquare = Math.round(square);

    //separates letters into groups of 5 rows(never touch)
    // var counter = 0;
    // var charCounter = 0;
    var rows = [];
    var fiveRows = [];
    for(i=0;i<sentence.length;i+=roundSquare){
      rows.push(sentence.substring(i,i+roundSquare));
      // fiveRows.push(sentence.substring(i,i+roundSquare));
      // charCounter += sentence.substring(i,i+roundSquare).length;
      // counter++;
      // if(counter===5||charCounter===sentence.length){
      //   rows.push(fiveRows);
      //   fiveRows = [];
      //   counter = 1;
      //   charCounter = 1;
      // }
    }
    console.log(rows);

    //gets coded letters in order to OBEY
    var answer = [];
    // for(i=0;i<rows.length;i++){
    //   for(j=0;j<rows[i][0].length;j++){
    //     for(k=0;k<rows[i].length;k++){
    //       if(rows[i][k][j]!=undefined){
    //       answer.push(rows[i][k][j])
    //       }
    //     }
    //   }
    // }
    for(i=0;i<rows[0].length;i++){
      for(j=0;j<rows.length;j++){
        if(rows[j][i]!=undefined){
          answer.push(rows[j][i]);
        }
      }
    }
    var final = answer.slice();
    for(i=5;i<=final.length;i+=6){
      final.splice(i,0," ");
    }
    return final.join("");
  }


  $('form').submit(function(event){
    var sentence = $('#sentence').val();
    $('#answer').text(scramble(sentence));
    event.preventDefault();
  });

});
