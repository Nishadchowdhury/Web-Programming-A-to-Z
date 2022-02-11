
      //click (to work a button at press)
      document.getElementById("delete-btn").addEventListener("click", function () {
        const deleteField = document.getElementById('secrate-info').style.display = 'none';
      });

      //focus (input box active condition)
      document.getElementById("confirm-delete").addEventListener("focus", function () {
        document.body.style.backgroundColor = "lightcoral";
      });


      //blur (active input box কে unactive করার পরের অবস্থা , বক্স এর বাইরে ক্লিক করলেই unactive হয় । )
      document.getElementById("confirm-delete").addEventListener("blur", function () {
        document.body.style.backgroundColor = "white";
      });

      //keydown (input box এর মধ্যে কোন কোন কিছু অ্যাড করলেই keydown সম্পন্ন হয় ।)
      //^^^^^^^ (এ ক্ষেত্রে একটা সংখ্যা কম অউটপুট হয়   ,, ami = am ,, ।)
      document.getElementById("confirm-delete").addEventListener("keydown", function () {
        const deleteField = document.getElementById("confirm-delete");
        console.log(deleteField.value);
      });

      //keypress (input box এর মধ্যে কোন কোন কিছু অ্যাড করলেই keypress সম্পন্ন হয়)
      //^^^^^^^ (এ ক্ষেত্রে একটা সংখ্যা কম অউটপুট হয়   ,, ami = am ,, ।)
      document.getElementById("confirm-delete").addEventListener("keypress", function () {
        const deleteField = document.getElementById("confirm-delete");
        console.log(deleteField.value);
      });

      //keyup (input box এর মধ্যে কোন কোন কিছু অ্যাড করলেই keydown সম্পন্ন হয় ।)
      //^^^^^^^ (তবে এ ক্ষেত্রে সব কিছুই output হয়  ,, ami = ami  ,, ।)

      document.getElementById("confirm-delete").addEventListener("keyup", function () {
        const deleteField = document.getElementById("confirm-delete");
        console.log(deleteField.value);
      });

    //change (input box এর মধ্যে কোন কোন কিছু pest করলে যখন keyup সেটাকে বুজতে পারেনা তখন সেটাকে বোঝর জন্য change ব্যেবহার করতে হয় । )
      document.getElementById("confirm-delete").addEventListener("change", function () {
        const deleteField = document.getElementById("confirm-delete");
        console.log(deleteField.value);
      });

    //event এর মধ্যে সাহায্যে কোন input box এর value কে পাওয়া যায় । 
      document.getElementById("confirm-delete").addEventListener("keyup", function (event) {
        const conditionForDlt = document.getElementById('delete-btn')
        if(event.target.value== 'Delete'){
          conditionForDlt.removeAttribute('disabled')
        }
        else{conditionForDlt.setAttribute('disabled',true)}
      });
     