import "./style.css";

// const main = document.querySelector("main");
const preview = document.getElementById("preview");
const detail = document.getElementById("detail");

let urlAll = "https://restcountries.com/v2/all";
// let urlAll = "https://restcountries.com/v3.1/all";
function getData(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        resolve(data);
      });
  });
}

let url = "https://restcountries.com/v2/alpha/mmr";
getData(url).then((value) => {
  console.log(value);
});

getData(urlAll).then((value) => {
  value.forEach((country) => {
    const box = document.createElement("div");
    const flag = document.createElement("img");
    const info = document.createElement("div");

    box.className = "box";

    flag.src = country.flags.svg;
    flag.className = "flag";
    flag.dataset.code = country.alpha3Code;

    info.className = "info";
    info.innerHTML = `
        <h1 class="">${country.name}</h1>
        <h2>
        Population:
            <span>${country.population ?? "unknown"}</span>
        </h2>
        <h2>
        Region:
            <span>${country.region ?? "unknown"}</span>
        </h2>
        <h2>
        Capital:
        <span>${country.capital ?? "unknown"}</span>
        </h2>
    `;
    box.appendChild(flag);
    box.appendChild(info);
    preview.appendChild(box);
  });
});

if (detail.dataset.active === "true") {
  detail.classList.remove("hidden");
  preview.classList.add("hidden");
}

getData("https://restcountries.com/v2/alpha/mmr").then((value) => {
  // SELECTORS
  const flag = document.getElementById("flag");
  const name = document.getElementById("name");
  const nativeName = document.getElementById("native-name");
  const population = document.getElementById("population");
  const region = document.getElementById("region");
  const subRegion = document.getElementById("sub-region");
  const capital = document.getElementById("capital");
  const topLevelDomain = document.getElementById("top-level-domain");
  const currencies = document.getElementById("currencies");
  const languages = document.getElementById("languages");
  const borderCountries = document.getElementById("border-countries");

  // SHOW ON UI
  flag.src = value.flag;
  name.innerText = value.name;
  nativeName.innerText = value.nativeName;
  population.innerText = value.population;
  region.innerText = value.region;
  subRegion.innerText = value.subregion;
  capital.innerText = value.capital;
  topLevelDomain.innerText = value.topLevelDomain;

  value.currencies.forEach((currency) => {
    currencies.innerText += currency.name;
  });
  value.languages.forEach((language) => {
    languages.innerText += language.name;
  });

  value.borders.forEach((border) => {
    getData(`https://restcountries.com/v2/alpha/${border}`).then(
      (countryData) => {
        const borderCountryBtn = document.createElement("button");
        borderCountryBtn.className = "btn";
        borderCountryBtn.textContent = countryData.name;

        borderCountries.appendChild(borderCountryBtn);
      }
    );
  });
});
