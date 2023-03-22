const btnMode = document.querySelector("button.btn");
const contriesContainer = document.querySelector(".container-contries");
const search = document.getElementById("search-input");
const selectRegion = document.getElementById("select-region");

const contriesArray = [];

function changeTheme() {
  document.body.classList.toggle("bg-white-theme");
  document.body.classList.toggle("bg-dark-theme");
}

function createSingleBlock(country) {
  const btn = document.createElement("button");
  btn.classList.add("btn", "btn-secondary");
  btn.textContent = "Back";
  btn.addEventListener("click", () => {
    contriesContainer.innerHTML = "";
    contriesContainer.id = "all-contries";
    contriesArray.forEach((singleCountry) => {
      createBlocks(singleCountry);
    });
  });

  const container = document.createElement("div");
  container.classList.add("container", "mt-5");

  const row = document.createElement("div");
  row.classList.add("row", "mt-4");
  const img = document.createElement("img");
  img.classList.add("img-fluid", "col-6");
  img.src = country.flag;
  img.alt = "";
  const columnContainer = document.createElement("div");
  columnContainer.classList.add("col-6");
  const h2 = document.createElement("h2");
  h2.textContent = country.name;

  console.log(country);

  const secondRow = document.createElement("div");
  secondRow.classList.add("row", "mt-4");
  const firstDetalisContainer = document.createElement("div");
  firstDetalisContainer.classList.add("col-6");

  const name = document.createElement("p");
  name.innerHTML = `<b>Native Name:</b> ${country.name}`;
  const population = document.createElement("p");
  population.innerHTML = ` <b>Population:</b> ${country.population}`;
  const region = document.createElement("p");
  region.innerHTML = ` <b>Region:</b> ${country.region}`;
  const subRegion = document.createElement("p");
  console.log(country);
  subRegion.innerHTML = `<b>Sub Region:</b> ${country.subregion}`;
  const capital = document.createElement("p");
  capital.innerHTML = `<b>Capital:</b> ${country.capital}`;

  const secondDetailsContainer = document.createElement("div");
  secondDetailsContainer.classList.add("col-6");

  console.log(country);

  const domain = document.createElement("p");
  domain.innerHTML = `<b>Top Level Domain:</b> ${country.topLevelDomain}`;
  const currencies = document.createElement("p");
  currencies.innerHTML = `<b>Currencies:</b> ${country.currencies[0].name}`;
  const languages = document.createElement("p");
  languages.innerHTML = `<b>Languages:</b> ${country.languages[0].name}`;

  console.log(country.borders);
  // console.log(country.bordres == true);

  // if (country.bordres) {

  // }

  console.log(country);

  container.appendChild(row);
  row.appendChild(img);
  row.appendChild(columnContainer);

  firstDetalisContainer.appendChild(name);
  firstDetalisContainer.appendChild(population);
  firstDetalisContainer.appendChild(region);
  firstDetalisContainer.appendChild(subRegion);
  firstDetalisContainer.appendChild(capital);
  secondRow.appendChild(firstDetalisContainer);

  secondDetailsContainer.appendChild(domain);
  secondDetailsContainer.appendChild(currencies);
  secondDetailsContainer.appendChild(languages);
  secondRow.appendChild(secondDetailsContainer);

  columnContainer.appendChild(h2);
  columnContainer.appendChild(secondRow);

  contriesContainer.appendChild(btn);
  contriesContainer.appendChild(container);

  try {
    const btnsContainer = document.createElement("div");
    btnsContainer.classList.add("d-flex", "mt-4");
    const borderCountries = document.createElement("p");
    borderCountries.textContent = "Border Countries";
    btnsContainer.appendChild(borderCountries);
    country.borders.forEach((border) => {
      const btn = document.createElement("btn");
      btn.textContent = border;
      btn.classList.add("btn");
      btnsContainer.appendChild(btn);
    });
    columnContainer.appendChild(btnsContainer);
  } catch {
    console.error("doesnt have borders");
  }

  //    <button class="btn btn-secondary" type="submit">Back</button>

  // <div class="container mt-5">
  //   <div class="row">
  //     <img
  //       class="img-fluid col-6"
  //       src="https://flagcdn.com/ax.svg"
  //       alt=""
  //     />
  //     <div class="col-6">
  //       <h2>Belgium</h2>
  //       <div class="row mt-4">
  //         <div class="col-6">
  //           <p>Native Name: Belgie</p>
  //           <p>Population: 11.319.511</p>
  //           <p>Region: Europe</p>
  //           <p>Sub Region: Western Europe</p>
  //           <p>Capital: Brussels</p>
  //         </div>
  //         <div class="col-6">
  //           <p>Top Level Domain: .be</p>
  //           <p>Currencies: Euro</p>
  //           <p>Langugaes: Dutch, French, Greman</p>
  //         </div>
  //       </div>
  //       <div class="d-flex mt-4">
  //         <p class="d-flex me-3">Border Countries:</p>
  //         <button class="btn btn-secondary">France</button>
  //         <button class="btn btn-secondary">Germany</button>
  //         <button class="btn btn-secondary">Netherlands</button>
  //       </div>
  //     </div>
  //   </div>
  // </div>
}

function showCountryDetails() {
  const countryName = this.querySelector("h2").textContent.trim();
  const country = contriesArray.find((country) => {
    return country.name == countryName;
  });

  contriesContainer.innerHTML = "";
  contriesContainer.id = "single-country";

  createSingleBlock(country);
}

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
  container.addEventListener("click", showCountryDetails);
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

{
  /* <button class="btn btn-secondary" type="submit">Back</button>

<div class="container mt-5">
  <div class="row">
    <img
      class="img-fluid col-6"
      src="https://flagcdn.com/ax.svg"
      alt=""
    />
    <div class="col-6">
      <h2>Belgium</h2>
      <div class="row mt-4">
        <div class="col-6">
          <p>Native Name: Belgie</p>
          <p>Population: 11.319.511</p>
          <p>Region: Europe</p>
          <p>Sub Region: Western Europe</p>
          <p>Capital: Brussels</p>
        </div>
        <div class="col-6">
          <p>Top Level Domain: .be</p>
          <p>Currencies: Euro</p>
          <p>Langugaes: Dutch, French, Greman</p>
        </div>
      </div>
      <div class="d-flex mt-4">
        <p class="d-flex me-3">Border Countries:</p>
        <button class="btn btn-secondary">France</button>
        <button class="btn btn-secondary">Germany</button>
        <button class="btn btn-secondary">Netherlands</button>
      </div>
    </div>
  </div>
</div> */
}
