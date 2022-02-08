
     function makBlue(){
        document.body.style.backgroundColor='blue';
      }


      const blueBg = document.getElementById('makeGreen'); //id একটা  variable এ store করতে হবে ।

      blueBg.onclick = makeGreen; // তারপর variable.onclick এর মধ্যে কোন function এর নাম দিয়ে দিতে হবে ।

      function makeGreen(){
          document.body.style.backgroundColor = 'green'; // তারপর funtion এর মধ্যে প্রয়োজনীয় কাজ করতে হবে । 
      } 