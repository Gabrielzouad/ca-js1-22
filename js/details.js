const queryString = document.location.search;
const parameters = new URLSearchParams(queryString);
const detailsContainer = document.querySelector(".championDetails");
const abilityContainer = document.querySelector(".championAbility");
const id = parameters.get("id");
const detailsUrl =
  "http://ddragon.leagueoflegends.com/cdn/12.4.1/data/en_US/champion/" + id + ".json";

async function callDetails() {
  try {
    const response = await fetch(detailsUrl);
    const data = await response.json();
    const info = data.data;
    const details = info[id];
    const spells = info[id].spells;
    detailsContainer.innerHTML = "";

    for (let i = 0; i < spells.length; i++) {
      abilityContainer.innerHTML += `<div class="abilities"><img src="http://ddragon.leagueoflegends.com/cdn/12.4.1/img/spell/${spells[i].id}.png">
                                      <p class="spellName">${spells[i].name}</p>
                                      <p>${spells[i].description}</p>
                                      </div>`;
    }

    detailsContainer.innerHTML = `<div class="championImage"><img src="http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_0.jpg"></div>
                                  <div class="championInfo">
                                  <h1>${details.name}</h1>
                                  <p>${details.lore}</p>
                                  </div>`;
  } catch (err) {
    console.log(err);
  }
}

callDetails();
