import "./style.css"

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
          <div class="button">
            <div class="date">${date}</div>
            <div class="weekday">${weekday}</div>
          </div>
          ${games}
        </div>
        `
}

document.querySelector("main").innerHTML =
  createCard(
    "22/11",
    "Terça",
    createGame("br", "08:00", "serbia") + createGame("br", "08:00", "serbia")
  ) +
  createCard(
    "22/11",
    "Terça",
    createGame("br", "08:00", "serbia") + createGame("br", "08:00", "serbia")
  ) +
  createCard(
    "22/11",
    "Terça",
    createGame("br", "08:00", "serbia") + createGame("br", "08:00", "serbia")
  ) +
  createCard(
    "22/11",
    "Terça",
    createGame("br", "08:00", "serbia") + createGame("br", "08:00", "serbia")
  )
