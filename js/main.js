const btnMode = document.querySelector("button.btn");
const contriesContainer = document.querySelector(".container-contries");
const search = document.getElementById("search-input");
const selectRegion = document.getElementById("select-region");

const contriesArray = [];

function changeTheme() {
  document.body.classList.toggle("bg-white-theme");
  document.body.classList.toggle("bg-dark-theme");
}

function createBlocks(country) {
  // console.log(country);
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

function showSearchedCountries() {
  contriesContainer.innerHTML = "";
  const filterCountries = contriesArray.filter((country) => {
    return country.name.toLowerCase().includes(search.value.toLowerCase());
  });

  filterCountries.forEach((filterCountry) => createBlocks(filterCountry));
}

function showFilterByRegion() {
  if (selectRegion.value.toLowerCase() == "filter by region");

  contriesContainer.innerHTML = "";

  const filterCountries = contriesArray.filter((country) => {
    return country.region
      .toLowerCase()
      .includes(selectRegion.value.toLowerCase());
  });

  filterCountries.forEach((filterCountry) => createBlocks(filterCountry));

  if (search.value !== "") {
    showSearchedCountries();
  }
}

async function handlingData() {
  try {
    const data = await fetch("data.json");
    const response = await data.json();

    for (let i = 0; i < response.length; i++) {
      createBlocks(response[i]);
      contriesArray.push(response[i]);
    }
  } catch (err) {
    console.error(err);
  }
}

handlingData();

btnMode.addEventListener("click", changeTheme);
search.addEventListener("input", showSearchedCountries);
selectRegion.addEventListener("change", showFilterByRegion);
