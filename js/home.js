const region = document.querySelector("#region");

const regions = ["All","Africa", "America", "Asia", "Europe", "Oceania"];

regions.map((el) => {
  region.innerHTML += `<option class="item" value="${el}">${el}</option>`;
});

region.addEventListener("change",function(){
  let region = this.value.toLowerCase();
  if(region === "all"){
    getCountries(`https://restcountries.com/v3.1/all`);
  }
  else{
    getCountries(`https://restcountries.com/v3.1/region/${region}`);
  }
});





