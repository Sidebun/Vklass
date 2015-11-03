 $(document).ready(function () {
     /* $('.forgot-pass').click(function (event) {
          $(".pr-wrap").toggleClass("show-pass-reset");
      });

      $('.pass-reset-submit').click(function (event) {
          $(".pr-wrap").removeClass("show-pass-reset");
      });*/

     var user = $('input[name="username"]');
     var pass = $('input[name="password"]');
     var sub = $('#logins');


     var users = [
         {
             username: 'gustaf',
             password: 'eden'
         },
         {
             username: 'soren',
             password: 'swag123'
         }



     ];

     sub.click(function () {
         console.log("clicked");
         user = user.val();
         pass = pass.val();


         if (user != "" && pass != "") {

             console.log("confirmed");
             check(user, pass);


         } else {
             console.log("no text");
         }

     });


     function check(user, pass) {
         for (var i = 0; i <= users.length; i++) {
             if (user == users[i].username && pass == users[i].password) {
                 console.log("success");
                 // window.location = 'index.html'
                 //  window.location.replace = ("index.html");
                 window.open('index.html');

                 break;
             } else {
                 console.log("error");
             }

         }


     }

 });