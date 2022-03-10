import { BASE_URL } from "./api/";
import { query } from "./api/query.graphql";
import { orderBy } from "lodash";

const getData = async () => {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  });
  const data = await response.json();
  const dataArray = orderBy(data.data.allPokemon, ["name"], ["desc"]);
  console.log(dataArray);

  for (let i = 0; i < dataArray.length; i++) {
    if (i === 15) {
      break;
    }

    document.querySelector(".results").innerHTML += `
    <div class= cards>
      <h2>NAME: ${dataArray[i].name}</h2>
      <p>ID: ${dataArray[i].id}</p>
      <p>GROWTH_RATE: ${dataArray[i].growth_rate}</p>
    </div>
    `;
  }

  // dataArray.map(({ name, id, growth_rate }) => {
  //   document.querySelector(".results").innerHTML += `
  //   <div class= cards>
  //     <h2>${name}</h2>
  //     <p>${id}</p>
  //     <p>${growth_rate}</p>
  //   </div>`;
  // });

  return data;
};

getData();
