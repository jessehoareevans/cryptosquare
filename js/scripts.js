$(document).ready(function(){



  $('form').submit(function(event){
    var sentence = $('#sentence').val();
    var lettersOnly = /[^A-Za-z]/gi;
    sentence = sentence.replace(lettersOnly, "").toLowerCase();
    var boxes = 0;

    //determines box size
    var square = Math.sqrt(sentence.length)
    if(Number.isInteger(square)===true){
      boxes = sentence.length;
    }
    else{
      var roundSquare = Math.round(square);
      if(roundSquare<square){//rounded down
        boxes = roundSquare * (roundSquare+1);
      }
      else{//rounded up
        boxes = roundSquare * roundSquare;
      }
    }

    //separates letters into groups of 5 rows(never touch)
    var counter = 0;
    var rows = [];
    var fiveRows = [];
    for(i=0;i<sentence.length;i+=roundSquare){
      fiveRows.push(sentence.substring(i,i+roundSquare));
      counter++;
      if(counter===5||){
        rows.push(fiveRows);
        fiveRows = [];
        counter = 1;
      }
    }
    console.log(sentence.length, rows)

    //gets coded letters in order to OBEY
    var answer = [];
    for(i=0;i<rows.length;i++){
      for(j=0;j<rows[i][0].length;j++){
        for(k=0;k<rows[i].length;k++){
          if(rows[i][k][j]!=undefined){
          answer.push(rows[i][k][j])
          }
        }
      }
    }

    var final = answer.slice();
    for(i=5;i<final.length;i+=6){
      final.splice(i,0," ");
    }

    $('#answer').text(final.join(""));


    event.preventDefault();
  });

});
