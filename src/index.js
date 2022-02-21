const reviews = [
  {
    id: 1,
    name: "baby yoda eating",
    img:
      "https://images.rtl.fr/~r/880v587/rtl/www/1144688-baby-yoda-dans-la-saison-2-de-the-mandalorian.jpg"
  },
  {
    id: 2,
    name: "baby yoda laughting",
    img:
      "https://tel.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Ftel.2F2020.2F11.2F13.2F050a6789-8260-43ea-be47-2d241a204f58.2Ejpeg/1200x600/crop-from/top/quality/80/cr/wqkgQ2FwdHVyZSDDqWNyYW4vRGlzbmV5Ky9MdWNhc0ZpbG0%3D/the-mandalorian-disney-mais-qui-est-vraiment-baby-yoda.jpg"
  },
  {
    id: 3,
    name: "baby yoda upset",
    img:
      "https://t1.ldh.be/bk_GewZGQX0ZJu3KJ27oDddvfpk=/0x100:1600x900/1280x640/5fc4adf8d8ad585a45a5d0ac.jpg"
  },
  {
    id: 4,
    name: "baby yoda drinking",
    img:
      "https://s.yimg.com/ny/api/res/1.2/gq4oNKAMsyHpYAcMBGBdXQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTcyMA--/https://s.yimg.com/uu/api/res/1.2/hfs7oSVNMDIVaHajhhJQHg--~B/aD04MjU7dz0xMTAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/fr/article.bfmtv.com/c57f3bd20aa6b135833b28fe0c32b721"
  }
];

// selectionner les éléments,
const img = document.getElementById("person-img");
const titre = document.getElementById("titre");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

// set starting item
let currentItem = 0;

// show person based on item
function showImage(yoda) {
  img.src = reviews[yoda].img;
  titre.textContent = reviews[yoda].name;
}

// show next person
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showImage(currentItem);
});
// show prev person
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showImage(currentItem);
});
//mouseover
img.addEventListener("mouseover", function (e) {
  img.style.transition = "all 1s ease";
  img.style.transform = "scale(1.5)";
});

img.addEventListener("mouseleave", function (e) {
  img.style.transition = "all 1s ease";
  img.style.transform = "scale(1)";
});
