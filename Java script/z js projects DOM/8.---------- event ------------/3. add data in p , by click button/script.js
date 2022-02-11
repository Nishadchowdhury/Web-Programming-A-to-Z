//1
    function worker(){
        const theOutput = document.getElementById('output-text');
        theOutput.innerText = "it's first method";
     }
//2
     document.getElementById('clickBtnDirect').addEventListener('click', function(){
        const clickBtn = document.getElementById('output-text');
        clickBtn.innerText = 'kamon aso ?';
      })

//3
      document.getElementById('updateOfInputBox').addEventListener('click', function(){
        const inputDataToBox = document.getElementById('input-box');
           
        const outputAtP = document.getElementById('output3');
        outputAtP.innerText = inputDataToBox.value;
      })
       