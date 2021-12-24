import "./style.css";

/* ---- SELECTORS ---- */

const search = document.getElementById("search");
const filterBtn = document.getElementById("filter-btn");
const filterBtnText = filterBtn.querySelector("span");
const filterDropdown = document.getElementById("filter-dropdown");
const filterLists = document.querySelectorAll("#filter-dropdown > li");
const loading = document.getElementById("loading");
const darkModeToggle = document.getElementById("darkmode-toggle");
const grid = document.getElementById("grid");
const preview = document.getElementById("preview");
const detail = document.getElementById("detail");
const back = document.getElementById("back");
let countries, boxes;
let filter = "";
let input = "";
let URLAll = "https://restcountries.com/v2/all";

/* ---- FUNCTIONS ---- */

function getData(url) {
  return new Promise((resolve) => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        resolve(data);
      });
  });
}

function filterFunc() {
  boxes.forEach((box) => {
    if (
      box.dataset.name.search(input) !== -1 &&
      box.dataset.region.search(filter) !== -1
    ) {
      box.classList.remove("hidden");
    } else {
      box.classList.add("hidden");
    }
  });
}

getData(URLAll).then((value) => {
  countries = value;
  countries.forEach((country) => {
    Preview.show(country);
  });
  boxes = document.querySelectorAll(".box");
});

/* ---- EVENT LISTENERS ---- */

window.onload = function () {
  // show loading for 5s
  Loading.show();
  setTimeout(Loading.close, 5000);

  // Choose them depend on user's prefer
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};

search.addEventListener("keyup", () => {
  input = search.value.toLowerCase();
  filterFunc();
});

filterLists.forEach((filterList) => {
  filterList.addEventListener("click", () => {
    filterBtnText.innerText = filterList.innerText;
    filter = filterList.dataset.filter;
    filterFunc();
  });
});

filterBtn.addEventListener("click", () => {
  filterDropdown.classList.toggle("hidden");
});

filterBtn.addEventListener("focusout", () => {
  setTimeout(() => {
    if (!filterDropdown.classList.contains("hidden")) {
      filterDropdown.classList.toggle("hidden");
    }
  }, 150);
});

darkModeToggle.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
});

back.addEventListener("click", () => {
  Detail.close();
});

/* ---- CLASSES ---- */
class Preview {
  static show(country) {
    // SELECTORS
    const box = document.createElement("div");
    const flagImg = document.createElement("img");
    const info = document.createElement("div");

    // MODIFY ELEMENTS
    box.className = "box";
    box.dataset.name = country.name.toLowerCase();
    box.dataset.region = country.region.toLowerCase();

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
    grid.appendChild(box);

    // ADD EVENT
    flagImg.addEventListener("click", (e) => {
      Detail.add(e.target.dataset.code);
      Detail.show();
    });
  }
}

class Loading {
  static show() {
    loading.classList.remove("hidden");
    document.body.style.overflowY = "hidden";
  }

  static close() {
    loading.classList.add("hidden");
    document.body.style.overflowY = "visible";
  }
}

class Detail {
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
                borderCountryBtn.dataset.code = countryData.alpha3Code;
                borderCountryBtn.textContent = countryData.name;
                this.borderCountries.appendChild(borderCountryBtn);

                borderCountryBtn.addEventListener("click", (e) => {
                  Loading.show();
                  setTimeout(Loading.close, 3000);

                  this.add(e.target.dataset.code);
                  this.clear();
                  this.show();
                });
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
    Loading.show();
    setTimeout(Loading.close, 3000);

    detail.classList.remove("hidden");
    preview.classList.add("hidden");
  }

  static close() {
    this.clear();
    detail.classList.add("hidden");
    preview.classList.remove("hidden");
  }
}
