document.addEventListener("DOMContentLoaded", () => {
  //le nostre cards
  const cardArray = [
    {
      name: "html",
      img: "img/01.png",
    },
    {
      name: "html",
      img: "img/01.png",
    },
    {
      name: "css",
      img: "img/02.png",
    },
    {
      name: "css",
      img: "img/02.png",
    },
    {
      name: "js",
      img: "img/03.png",
    },
    {
      name: "js",
      img: "img/03.png",
    },
    {
      name: "vue",
      img: "img/04.png",
    },
    {
      name: "vue",
      img: "img/04.png",
    },
    {
      name: "php",
      img: "img/05.png",
    },
    {
      name: "php",
      img: "img/05.png",
    },
    {
      name: "laravel",
      img: "img/06.png",
    },
    {
      name: "laravel",
      img: "img/06.png",
    },
    {
      name: "back",
      img: "img/back.png",
    },
    {
      name: "back",
      img: "img/back.png",
    },
    {
      name: "white",
      img: "img/white.png",
    },
    {
      name: "white",
      img: "img/white.png",
    },
  ];

  const grid = document.querySelector(".grid");
  var cardChosen = [];
  var cardChosenId = [];

  //creiamo la board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement("img"); //creiamo l'elemento
      card.setAttribute("src", "img/back.png"); //path verso il back
      card.setAttribute("data-id", i); //assegniamo id
      //   card.addEventListener("click", flipcard);
      grid.appendChild(card); //aggiungiamo le card al grid
    }
  }

  //verifica uguali

  createBoard();
});
