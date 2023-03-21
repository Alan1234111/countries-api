const contriesContainer = document.querySelector(".container-contries");

function createBlocks(country) {
  console.log(country);
}

async function handlingData() {
  const data = await fetch("data.json");
  const response = await data.json();

  for (let i = 0; i < response.length; i++) {
    createBlocks(response[i]);
  }
}

handlingData();
