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
            src="./public/${local}-flag.svg"
            alt="Brazil flag"
            class="flag-1"
          />
          <strong class="hours">${time}</strong>
          <img
            src="./public/${oposite}-flag.svg"
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
        <img id="left-arrow" src="./public/l-arrow.svg" alt="Jogo anterior"/>
        <div class="button">
          <div class="date">${date}</div>
          <div class="weekday">${weekday}</div>
        </div>
        <img id="right-arrow" src="./public/r-arrow.svg" alt="Próximo jogo" />
        </nav>

          ${games}
        </div>
        `
}

let cards = [
  createCard("20/11", "Domingo", createGame("qatar", "13:00", "ecuador")),
  createCard(
    "21/11",
    "Segunda",
    createGame("england", "10:00", "ecuador") +
      createGame("senegal", "13:00", "netherlands") +
      createGame("usa", "16:00", "wales")
  ),
  createCard(
    "22/11",
    "Terça",
    createGame("br", "08:00", "serbia") + createGame("br", "08:00", "serbia")
  ),
  createCard(
    "22/11",
    "Terça",
    createGame("br", "08:00", "serbia") + createGame("br", "08:00", "serbia")
  ),
]

let position = 3

document.querySelector("main").innerHTML = cards[position]
// function back(postion) {
//   postion
// }
