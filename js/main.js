const contriesContainer = document.querySelector(".container-contries");

function createBlocks(country) {
  const container = document.createElement("div");
  container.classList.add("bg-white", "p-0", "rounded", "pb-2", "mx-auto");

  const img = document.createElement("img");
  img.classList.add("img-fluid", "rounded-top");
  img.src = country.flag;
  img.alt = "";

  const h2 = document.createElement("h2");
  h2.classList.add("ms-4", "mt-4");
  h2.textContent = country.name;

  const countryDetails = document.createElement("div");
  countryDetails.classList.add("ms-4", "mt-3", "lh-2");

  const population = document.createElement("p");
  const region = document.createElement("p");
  const capital = document.createElement("p");

  population.classList.add("mt-4");
  region.classList.add("mt-4");
  capital.classList.add("mt-4");

  population.innerHTML = `<b>Population:</b> ${country.population}`;
  region.innerHTML = `<b>Region:</b> ${country.region}`;
  capital.innerHTML = `<b>Capital:</b> ${country.capital}`;

  countryDetails.appendChild(population);
  countryDetails.appendChild(region);
  countryDetails.appendChild(capital);

  container.appendChild(img);
  container.appendChild(h2);
  container.appendChild(countryDetails);
  contriesContainer.appendChild(container);
}

async function handlingData() {
  const data = await fetch("data.json");
  const response = await data.json();

  for (let i = 0; i < response.length; i++) {
    createBlocks(response[i]);
  }
}

handlingData();
