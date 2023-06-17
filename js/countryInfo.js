let country = JSON.parse(localStorage.getItem("country"));
const cardInfo = document.querySelector(".card");
const flag = document.querySelector(".img");
flag.innerHTML += `<img src="${country.flags.svg}" alt="">`;
function getInfo({
  name,
  population,
  capital,
  region,
  borders,
}) {
  return `
      <h2 class="tit">${name.common}</h2>
      
        <div class="box">
          <p class="info">Population:<span>${population}</span></p>
          <p class="info">Top Level Domain:<span>5000</span></p>
          <p class="info">Region:<span>${region}</span></p>
          <p class="info">Sub Region:<span>${region}</span></p>
          <p class="info">Languages:<span>Uzbek</span></p>
        </div>
      <p class="info">Capital:<span>${capital}</span></p>
      <p class="info">Border Countries: <span>${borders[0]}</span> <span>${
    borders[1] ? borders[1] : borders[0]
  }</span><span>${borders[2] ? borders[2] : borders[0]}</span></p>
  `;
}

cardInfo.innerHTML = getInfo(country);
