function createGames(player1, hour, player2) {
  return `
  <li>
              <img src="./img/icon=${player1}.svg" alt="Bandeira ${player1}" />
              <strong>${hour}</strong>
              <img src="./img/icon=${player2}.svg" alt="Bandeira ${player2}" />
            </li>
  `
}

let delay = -0.4
function createCard(date, day, games) {
  delay = delay + 0.4
  return `
  <div class="card" style="animation-delay: ${delay}s">
          <h2>${date} <span>${day}</span></h2>

          <ul>
            ${games}
          </ul>
        </div>
  `
}

document.querySelector("#cards").innerHTML =
  createCard("24/11", "quinta", createGames("brazil", "15:00", "serbia")) +
  createCard(
    "28/11",
    "segunda",
    createGames("brazil", "12:00", "switzerland") +
      createGames("portugal", "15:00", "uruguay")
  ) +
  createCard("02/12", "sexta", createGames("cameroon", "15:00", "brazil"))
