let username = prompt("Bienvenido a game adventure text \nIngresa tu nombre")?.trim();

validateUsername()

alert("Bienvenido " + username);

function alertError(messageError){
  return messageError + alert("No es una opcion valida intentelo nuevamente");
}

function showPrincipalMenu(){
  while(true){
    const intialMenu = "  Menu \n" + "1. Cambiar tu nombre\n" + "2. Iniciar juego\n";

    let userChoice = prompt(intialMenu)

    if (userChoice == 1) {
      username = prompt("Ingrese su nuevo nombre")?.trim();
      changeUsername()
      startGame()
      break
    }
    if (userChoice == 2){
      startGame()
      break
    }else{
      alertError();
    }
  }
}

showPrincipalMenu()

//funcion para iniciar el juego

function startGame(){

  let scene = ("Te encuentras en tu casa. Desde aquí, puedes ver todos los edificios. \n"+"Te diriges a tu cocina a beber algo y encuentras una nota en tu nevera. \n")
  let optionGame = ("\n1. Coger la nota.\n"+"2. Tiras la nota al tacho.\n"+"3. Finges no ver la nota\n");

  while (true) {

    const startGameDialog = scene + optionGame;

    let gameChoice = prompt(startGameDialog)

    if(gameChoice == 1){
      case1();
      break
    }
    if(gameChoice == 2 || gameChoice == 3){
      gameOver();
      break
    }else{
      alertError();
    }
  }
}

// funcion para validad username

function validateUsername(){
  while(!username){
    username = prompt("No es un nombre valido, intentalo nuevamente")?.trim();
  }
}

// funcion para obtener un username nuevo

function changeUsername() {
  let newUsername = username;
  while (!newUsername) {
     newUsername = prompt("Coloca tu nuevo nombre de usuario");
  }
  alert("Cambiaste tu usuario a " + newUsername);
}

// funcion de casos del juego

function case1(){
  alert("Te esperamos a fuera a las 21hrs. \nAtte: Tus amigos.\n");
}
function gameOver(){
  alert("Game Over!!");
}



