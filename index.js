function showData() {
    const sentence =  document.getElementById("sentence").value;
    const letter =  document.getElementById("letter").value;

    const index = sentence.indexOf(letter);

    if(index === -1){
        document.getElementById("answer").innerHTML="The letter does not exist in the sentence";

    }else{
        document.getElementById("answer").innerHTML =  sentence.substring(index+1);
    }
    
   }