import "./style.css";

// const main = document.querySelector("main");
const darkModeToggle = document.getElementById("darkmode-toggle");
const preview = document.getElementById("preview");
const detail = document.getElementById("detail");
const back = document.getElementById("back");

darkModeToggle.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
});

back.addEventListener("click", () => {
  Preview.close();
});

let urlAll = "https://restcountries.com/v2/all";

function getData(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        resolve(data);
      });
  });
}

class Preview {
  // SELECTORS
  static flag = document.getElementById("flag");
  static name = document.getElementById("name");
  static nativeName = document.getElementById("native-name");
  static population = document.getElementById("population");
  static region = document.getElementById("region");
  static subRegion = document.getElementById("sub-region");
  static capital = document.getElementById("capital");
  static topLevelDomain = document.getElementById("top-level-domain");
  static currencies = document.getElementById("currencies");
  static languages = document.getElementById("languages");
  static borderCountries = document.getElementById("border-countries");

  // METHODS
  static add(countryCode) {
    getData(`https://restcountries.com/v2/alpha/${countryCode}`).then(
      (value) => {
        // SHOW ON UI
        this.flag.src = value.flag;
        this.name.innerText = value.name;
        this.nativeName.innerText = value.nativeName;
        this.population.innerText = value.population;
        this.region.innerText = value.region;
        this.subRegion.innerText = value.subregion;
        this.capital.innerText = value.capital;
        this.topLevelDomain.innerText = value.topLevelDomain;

        value.currencies.forEach((currency) => {
          currencies.innerText += currency.name;
        });

        value.languages.forEach((language) => {
          languages.innerText += language.name;
        });

        if (value.borders !== undefined) {
          value.borders.forEach((border) => {
            getData(`https://restcountries.com/v2/alpha/${border}`).then(
              (countryData) => {
                const borderCountryBtn = document.createElement("button");
                borderCountryBtn.className = "btn";
                borderCountryBtn.textContent = countryData.name;
                this.borderCountries.appendChild(borderCountryBtn);
              }
            );
          });
        } else {
          const borderCountryBtn = document.createElement("button");
          borderCountryBtn.className = "btn";
          borderCountryBtn.textContent = "None";
          this.borderCountries.appendChild(borderCountryBtn);
        }
      }
    );
  }

  static clear() {
    this.currencies.innerText = "";
    this.languages.innerText = "";

    let numOfBorderCountries = this.borderCountries.childNodes.length;
    for (let i = 0; i < numOfBorderCountries; i++) {
      const child = this.borderCountries.childNodes[0];
      child.remove();
    }
  }

  static show() {
    this.clear();
    detail.classList.remove("hidden");
    preview.classList.add("hidden");
  }

  static close() {
    this.clear();
    detail.classList.add("hidden");
    preview.classList.remove("hidden");
  }
}

getData(urlAll).then((value) => {
  value.forEach((country) => {
    // SELECTORS
    const box = document.createElement("div");
    const flagImg = document.createElement("img");
    const info = document.createElement("div");

    box.className = "box";

    flagImg.src = country.flags.svg;
    flagImg.className = "flag";
    flagImg.dataset.code = country.alpha3Code;

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

    // SHOW ON UI
    box.appendChild(flagImg);
    box.appendChild(info);
    preview.appendChild(box);

    // ADD EVENTS
    flagImg.addEventListener("click", function () {
      Preview.add(this.dataset.code);
      Preview.show();
    });
  });
});
