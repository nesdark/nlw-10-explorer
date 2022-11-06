// import "./style.css"

// var theme = prompt("Escolha a cor: {yellow}, {blue}, {green}")

let themes = ["blue", "green", "yellow"]
let sequence = 0
let button = document.querySelector("#theme")
let lamp = document.querySelector("#theme svg path")
button.addEventListener("click", () => {
  lamp.style.fill = "var(--primary-color)"
  document.body.setAttribute("class", themes[sequence])
  sequence = sequence <= 2 ? sequence + 1 : 0
})

function createGame(local, time, oposite) {
  return `
    <ul class="card">
      <li>
          <img
            src="./public/flags/${local}-flag.svg"
            alt="Brazil flag"
            class="flag-1"
          />
          <strong class="hours">${time}</strong>
          <img
            src="./public/flags/${oposite}-flag.svg"
            alt="Serbia Flag"
            class="flag-2"
          />
      </li>
    </ul>

    <div class="stroke"></div>
  `
}

let delay = -0.2
function createCard(date, weekday, games) {
  delay += 0.2
  return `
        <div class="cards" style="animation-delay: ${delay}s;">
        <nav>
        <img 
          id="left-arrow" 
          src="./public/l-arrow.svg" 
          alt="Jogo anterior" 
          onclick="backCard()"
          />
          
        <div class="button">
          <div class="date">${date}</div>
          <div class="weekday">${weekday}</div>
        </div>
        <img 
        id="right-arrow" 
        src="./public/r-arrow.svg" 
        alt="Próximo jogo" 
        onclick="nextCard()"
        />
        </nav>
          ${games}
        </div>
        `
}

let cards = [
  createCard("20/11", "Domingo", createGame("qatar", "13:00", "ecuador")) +
    createCard(
      "21/11",
      "Segunda",
      createGame("england", "10:00", "iran") +
        createGame("senegal", "13:00", "netherlands") +
        createGame("usa", "16:00", "wales")
    ),
  createCard(
    "22/11",
    "Terça",
    createGame("argentina", "07:00", "arabia") +
      createGame("denmark", "10:00", "tunisia") +
      createGame("mexico", "13:00", "poland") +
      createGame("france", "16:00", "australia")
  ) +
    createCard(
      "23/11",
      "Quarta",
      createGame("morocco", "07:00", "croatia") +
        createGame("germany", "10:00", "japan") +
        createGame("spain", "13:00", "costa") +
        createGame("belgium", "16:00", "canada")
    ),
  createCard(
    "24/11",
    "Quinta",
    createGame("switzerland", "07:00", "cameroon") +
      createGame("uruguay", "10:00", "skorea") +
      createGame("portugal", "13:00", "ghana") +
      createGame("brazil", "16:00", "serbia")
  ) +
    createCard(
      "25/11",
      "Sexta",
      createGame("wales", "07:00", "iran") +
        createGame("qatar", "10:00", "senegal") +
        createGame("netherlands", "13:00", "ecuador") +
        createGame("england", "16:00", "usa")
    ),
  createCard(
    "26/11",
    "sabado",
    createGame("tunisia", "07:00", "australia") +
      createGame("poland", "10:00", "arabia") +
      createGame("france", "13:00", "denmark") +
      createGame("argentina", "16:00", "mexico")
  ) +
    createCard(
      "27/11",
      "Domingo",
      createGame("Japan", "07:00", "costa") +
        createGame("belgium", "10:00", "morocco") +
        createGame("croatia", "13:00", "canada") +
        createGame("spain", "16:00", "germany")
    ),
  createCard(
    "28/11",
    "Segunda",
    createGame("cameroon", "07:00", "serbia") +
      createGame("skorea", "10:00", "ghana") +
      createGame("brazil", "13:00", "switzerland") +
      createGame("portugal", "16:00", "uruguay")
  ) +
    createCard(
      "29/11",
      "Terça",
      createGame("ecuador", "12:00", "senegal") +
        createGame("netherlands", "12:00", "qatar") +
        createGame("iran", "16:00", "usa") +
        createGame("wales", "16:00", "england")
    ),
  createCard(
    "30/11",
    "Quarta",
    createGame("tunisia", "12:00", "france") +
      createGame("australia", "12:00", "denmark") +
      createGame("poland", "16:00", "argentina") +
      createGame("arabia", "16:00", "mexico")
  ) +
    createCard(
      "1/12",
      "Terça",
      createGame("croatia", "12:00", "belgium") +
        createGame("canada", "12:00", "morocco") +
        createGame("japan", "16:00", "spain") +
        createGame("costa", "16:00", "germany")
    ) +
    createCard(
      "2/12",
      "Terça",
      createGame("skorea", "12:00", "portugal") +
        createGame("ghana", "12:00", "uruguay") +
        createGame("serbia", "16:00", "switzerland") +
        createGame("cameroon", "16:00", "brazil")
    ),
]

let leftArrow = document.querySelector("left-arrow")
let position = 2

document.querySelector("main").innerHTML = cards[position - 1]

function backCard() {
  if (position === 1) {
    return
  }
  position--
  document.querySelector("main").innerHTML = cards[position - 1]
}

function nextCard() {
  if (cards.length === position) {
    return
  }

  position++
  document.querySelector("main").innerHTML = cards[position - 1]
}
