"use strict";

let them = document.querySelector("#them");
let header = document.querySelector("header");
let footer = document.querySelector("footer");
let card = document.querySelectorAll(".card");
const loginBtn = document.querySelectorAll(".btn-login");
const login = document.querySelector(".login");
const login_inner = document.querySelector(".login__inner");
const filterBtn = document.querySelectorAll(".fill_btn");
const form_exit = document.querySelector(".form_exit");
const iconEye = document.querySelector(".icon-eye");
const password = document.querySelector("#password");
const email = document.querySelector("#email");
const form = document.querySelector(".form");
const card_wrapper = document.querySelector(".wrapper__cards");
let listFragment = new DocumentFragment();

them.addEventListener("input", (e) => {
  localStorage.setItem("dark", e.target.checked);
  console.log(e.target.checked);
  changeMode();
});

//==============================   LOGIN  START   =================================================
loginBtn[0].addEventListener("click", (e) => {
  login.classList.remove("hidden");
  login.classList.add("flex");
  document.querySelector("body").classList.add("overflow-y-hidden");
});

loginBtn[0].addEventListener("click", (e) => {
  removeMenu();
  login.classList.remove("hidden");
  login.classList.add("flex");
  document.querySelector("body").classList.add("overflow-y-hidden");
});

login.addEventListener("click", (e) => {
  if (e.target.classList.contains("login")) {
    login.classList.add("hidden");
    login.classList.remove("flex");
    document.querySelector("body").classList.remove("overflow-y-hidden");
    password.value = "";
    email.value = "";
  }
});

form_exit.addEventListener("click", (e) => {
  login.classList.add("hidden");
  login.classList.remove("flex");
  password.value = "";
  email.value = "";
  document.querySelector("body").classList.remove("overflow-y-hidden");
});

iconEye.addEventListener("click", (e) => {
  if (e.target.classList.contains("bxs-show")) {
    iconEye.classList.remove("bxs-show");
    iconEye.classList.add("bxs-hide");
    password.type = "text";
  } else {
    iconEye.classList.remove("bxs-hide");
    iconEye.classList.add("bxs-show");
    password.type = "password";
  }
});
//==============================   LOGIN  END   =================================================

const filter__buttons = document.querySelector(".filter__buttons");
filter__buttons.addEventListener("click", (e) => {
  if (e.target.classList.contains("fill_btn")) {
    document
      .querySelector(".filter__buttons-active")
      .classList.remove("filter__buttons-active");

    e.target.classList.add("filter__buttons-active");
    console.log(e.target.textContent);
    renderCard(cards, e.target.textContent.trim());
  }
});

const allBtn = document.querySelector(".all-btn");
allBtn.addEventListener("click", (e) => {
  document
    .querySelector(".filter__buttons-active")
    .classList.remove("filter__buttons-active");
  renderCard(cards, e.target.textContent.trim());
  allBtn.classList.add("filter__buttons-active");
});

const swiperWrap = document.querySelector(".swiper-wrapper");
const pagin = document.querySelector(".pagin");
let contents = [
  {
    id: 1,
    title: "Compact cars",
    info: "Rent cars as you are comfortable and where you are comfortable.",
    img: "./images/carousel_1.png",
  },
  {
    id: 2,
    title: "Sports cars",
    info: "Rent cars as you are comfortable and where you are comfortable.",
    img: "./images/carousel_2.png",
  },
  {
    id: 3,
    title: "Vans ",
    info: "Rent cars as you are comfortable and where you are comfortable.",
    img: "./images/carousel_3.png",
  },
];

contents.forEach((val) => {
  const element = createElement(
    "div",
    "swiper-slide h-[358px]  w-[300px] sm:w-full  sm:h-[500px] bg-cover bg-no-repeat bg-center rounded-2xl duration-300 ",
    `
  
  <div class="bg_linear w-full h-full pt-[60px] text-center">
  <h1
    class="font-semibold text-[36px] leading-[44px] text-center text-white"
  >
    ${val.title}
  </h1>
  <p
    class="font-normal w-[416px] text-[16px] leading-[20px] text-center text-white mx-auto mt-[10px]"
  >
   ${val.info}
  </p>
</div>
  `
  );
  const paginElem = createElement("div", "swiper-pagination", "");
  element.style.backgroundImage = `url('${val.img}')`;
  swiperWrap.append(element);
  pagin.append(paginElem);
});


const cards = [
  {
    id: 1,
    name: "Ford Fiesta",
    type: "Economy Car",
    img: "./images/ford_fiesta.svg",
    seats: "5 Seats",
    lever: "Automatic",
    age: "21+ Years",
    fuel: "1-lit / 2.5 km",
    filter: "Compact",
  },
  {
    id: 2,
    name: "Nissan Versa",
    type: "Compact Car",
    img: "./images/nissan_versa.svg",
    seats: "5 Seats",
    lever: "Automatic",
    age: "21+ Years",
    fuel: "1-lit / 2.5 km",
    filter: "Compact",
  },
  {
    id: 3,
    name: "Toyota Corolla",
    type: "Mid-size Car",
    img: "./images/toyota_corolla.svg",
    seats: "5 Seats",
    lever: "Automatic",
    age: "21+ Years",
    fuel: "1-lit / 2.5 km",
    filter: "Compact",
  },
  {
    id: 4,
    name: "Nissan Rogue",
    type: "Mid-size SUV",
    img: "./images/nissan_rogue.svg",
    seats: "5 Seats",
    lever: "Automatic",
    age: "21+ Years",
    fuel: "1-lit / 2.5 km",
    filter: "Compact",
  },
  {
    id: 5,
    name: "Chevy Traverse",
    type: "Full-size SUV ",
    img: "./images/chevu_traversa.svg",
    seats: "5 Seats",
    lever: "Automatic",
    age: "21+ Years",
    fuel: "1-lit / 2.5 km",
    filter: "Compact",
  },
  {
    id: 6,
    name: "Nissan Altima",
    type: "Full-size Car",
    img: "./images/nissan_altima.svg",
    seats: "5 Seats",
    lever: "Automatic",
    age: "21+ Years",
    fuel: "1-lit / 2.5 km",
    filter: "Compact",
  },
  {
    id: 7,
    name: "Royce rolls ghost",
    type: "Full-size Car",
    img: "./images/rolls_roys.svg",
    seats: "5 Seats",
    lever: "Automatic",
    age: "21+ Years",
    fuel: "1-lit / 2.5 km",
    filter: "Sports cars",
  },
  {
    id: 8,
    name: "Mercedes s class",
    type: "Full-size Car",
    img: "./images/mers_s_class.svg",
    seats: "5 Seats",
    lever: "Automatic",
    age: "21+ Years",
    fuel: "1-lit / 2.5 km",
    filter: "Sports cars",
  },
  {
    id: 9,
    name: "Lamborghini urus",
    type: "Mid-size Car",
    img: "./images/lamba_urus.svg",
    seats: "5 Seats",
    lever: "Automatic",
    age: "21+ Years",
    fuel: "1-lit / 2.5 km",
    filter: "Sports cars",
  },
  {
    id: 10,
    name: "Mercedes g63 amg",
    type: "Mid-size SUV",
    img: "./images/mers_gelik.svg",
    seats: "5 Seats",
    lever: "Automatic",
    age: "21+ Years",
    fuel: "1-lit / 2.5 km",
    filter: "Sports cars",
  },
  {
    id: 11,
    name: "15-Passenger Ford Transit ",
    type: "Full-size Car",
    img: "./images/ford_sprinter.svg",
    seats: "15 Seats",
    lever: "Automatic",
    age: "21+ Years",
    fuel: "1-lit / 2.5 km",
    filter: "Vans",
  },
  {
    id: 12,
    name: "Chrysler Pacifica",
    type: "Full-size Car",
    img: "./images/chrysler_pacifica.svg",
    seats: "5 Seats",
    lever: "Automatic",
    age: "21+ Years",
    fuel: "1-lit / 2.5 km",
    filter: "Vans",
  },
  {
    id: 13,
    name: "Chevy Silverado 4500HD",
    type: "Mid-size Car",
    img: "./images/chevy_selverado.svg",
    seats: "5 Seats",
    lever: "Automatic",
    age: "21+ Years",
    fuel: "1-lit / 2.5 km",
    filter: "Vans",
  },
  {
    id: 14,
    name: "12-Passenger Ford Transit",
    type: "Mid-size SUV",
    img: "./images/ford_sprinter.svg",
    seats: "12 Seats",
    lever: "Automatic",
    age: "21+ Years",
    fuel: "1-lit / 2.5 km",
    filter: "Vans",
  },
  {
    id: 15,
    name: "Mercedes-Benz Sprinter",
    type: "Mid-size SUV",
    img: "./images/mers_sprinter.svg",
    seats: "12 Seats",
    lever: "Automatic",
    age: "21+ Years",
    fuel: "1-lit / 2.5 km",
    filter: "Vans",
  },
];


renderCard(cards, "Compact");

function renderCard(cards,filter){
  card_wrapper.innerHTML = "";
  cards.forEach((val)=>{
    if(val.filter === filter || filter== "View all cars"){
      const  newItem = document.createElement('li')
      newItem.setAttribute(
        "class",
        "card bg-[#f5f5f5]  w-[381px] h-[433px] rounded-2xl"
      );
      const info = `<h3 class="text-[24px] leading-[29px] text-start pt-[30px] pl-[24px] font-bold ">${val.name}</h3>
      <p class="mt-2 text-[16px] leading-[20px] pl-6 pb-4 text-start ">${val.type}</p>
            <img class="pb-4" src="${val.img}" alt="">  
            <ul class="flex justify-start flex-wrap "> 
            <li class=" pl-[24px] pb-6 w-[156px] flex justify-start">
              <img class="pr-[16px] " src="./images/seats_default.svg" alt="">
              <p class="text-[16px]">${val.seats}</p>
            </li>
            <li class="pl-[24px] pb-6 w-[175px] flex justify-start">
              <img class="pr-[16px] " src="./images/pkk_default.svg" alt="">
              <p class="text-[16px]">${val.lever}</p>
            </li>
            <li class="pl-[24px] pb-6 w-[175px] flex justify-start">
              <img class="pr-[16px] " src="./images/years_default.svg" alt="">
              <p class="text-[16px]">${val.age}</p>
            </li>
            <li class="pl-[24px] pb-6 w-[175px] flex justify-start items-center">
              <img class="pr-[21px]" src="./images/oil_default.svg" alt="">
              <p class="text-[16px]">${val.fuel}</p>
            </li> 
      </ul>`;
      newItem.innerHTML = info
      listFragment.appendChild(newItem);
    }
  })
  card_wrapper.appendChild(listFragment)
}

