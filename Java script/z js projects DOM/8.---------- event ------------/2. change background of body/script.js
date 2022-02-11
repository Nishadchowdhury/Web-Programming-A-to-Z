
     function makBlue(){
        document.body.style.backgroundColor='blue';
      }


      const blueBg = document.getElementById('makeGreen'); //id একটা  variable এ store করতে হবে ।

      blueBg.onclick = makeGreen; // তারপর variable.onclick এর মধ্যে কোন function এর নাম দিয়ে দিতে হবে ।

      function makeGreen(){
          document.body.style.backgroundColor = 'green'; // তারপর funtion এর মধ্যে প্রয়োজনীয় কাজ করতে হবে । 
      } 


      // ***********************************an other way -- anonymous Function
      const FuchsiaBg = document.getElementById('make-Fuchsia');

      FuchsiaBg.onclick = function makeFuchsia(){
        document.body.style.backgroundColor= ('Fuchsia')
      }



      const IndigoBg = document.getElementById('makeIndigo');

      IndigoBg.addEventListener('click', makeIndigo )

      function makeIndigo(){
        document.body.style.backgroundColor='Indigo';

      }
      
 // ***********************************an other way of anonymous Function
      const MaroonBg = document.getElementById('makeMaroon');

      MaroonBg.addEventListener('click',function makeMaroon(){
        document.body.style.backgroundColor='Maroon';

      })

      //   ***********************************most shortCut 

      document.getElementById('makeBlack').addEventListener('click', function (){
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
      })

     