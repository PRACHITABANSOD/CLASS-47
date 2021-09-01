The player have to collect the coins which will be placed in the way of the user till finishing line , the energy drinkes will be placed in between so the score of the user increases by a value . Two mens will be keeping an eye on the treasure and the user have to escape from there trap . if the user hit the man the game will end , displaying a message "CAUGHT" , if the user collects more than 50 coins , the player will be declared as "WINNER" 

<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/8.8.1/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.8.1/firebase-database.js"></script>

    <script type="module">
      // Import the functions you need from the SDKs you need
      import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-app.js";
      // TODO: Add SDKs for Firebase products that you want to use
      // https://firebase.google.com/docs/web/setup#available-libraries
    
      // Your web app's Firebase configuration
      const firebaseConfig = {
        apiKey: "AIzaSyBoyBL6TXNqpR3EsGdFkhbMVIzRKzBdylo",
        authDomain: "my-game-57d10.firebaseapp.com",
        projectId: "my-game-57d10",
        storageBucket: "my-game-57d10.appspot.com",
        messagingSenderId: "812723167042",
        appId: "1:812723167042:web:c41c7c21e477a85c8a72db"
      };
    
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
    </script>

/*var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;*/

/*if(playerCount === 1){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }*/
