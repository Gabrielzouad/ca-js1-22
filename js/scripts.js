const url = "http://ddragon.leagueoflegends.com/cdn/12.4.1/data/en_US/champion.json";
const dataContainer = document.querySelector(".championContainer");

async function callAPI() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const champion = data.data;
    dataContainer.innerHTML = "";
    for (const key in champion) {
      var item = champion[key];

      for (const key in item) key, item[key];

      dataContainer.innerHTML += `<div class="champions">
                                  <div><a href="details.html?id=${item.id}" class="champName">${item.name}</a>
                                  <p class="champTitle">${item.title}</p>
                                  <p class="champType">${item.tags}</p></div>
                                  <img class="champIcon"src="http://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/${item.id}.png"></div>`;
    }
  } catch (err) {
    console.log(err);
  }
}
callAPI(url);
