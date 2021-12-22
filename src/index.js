import "./style.css";

const main = document.querySelector("main");

let countriesData = new Promise((resolve, reject) => {
  let dataURL = "https://restcountries.com/v2/all";
  fetch(dataURL)
    .then((response) => response.json())
    .then((data) => {
      resolve(data);
    });
});

countriesData.then((value) => {
  value.forEach((country) => {
    const box = document.createElement("div");
    const flag = document.createElement("img");
    const info = document.createElement("div");

    box.className = "box";

    flag.src = country.flags.png;
    flag.className = "flag";

    info.className = "info";
    info.innerHTML = `
        <h1 class="">${country.name}</h1>
        <h2>
        Population:
            <span>${country.population || "unknow"}</span>
        </h2>
        <h2>
        Region:
            <span>${country.region || "unknow"}</span>
        </h2>
        <h2>
        Capital:
        <span>${country.capital || "unknow"}</span>
        </h2>
    `;
    box.appendChild(flag);
    box.appendChild(info);
    main.appendChild(box);
  });
});

// <div class="box">
// <img src="https://flagcdn.com/mm.svg" alt="flag" />
// <div class="box__text">
//   <h1 class="">Myanmar</h1>
//   <h2>
//     Population:
//     <span>100000000</span>
//   </h2>
//   <h2>
//     Region:
//     <span>Asia</span>
//   </h2>
//   <h2>
//     Capital:
//     <span>Nay Pyi Daw</span>
//   </h2>
// </div>
// </div>
