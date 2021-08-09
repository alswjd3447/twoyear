const imges = [
  "0.jpg",
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
  "11.jpg",
  "12.jpg",
  "13.jpg",
  "14.jpg",
  "15.jpg",
  "16.jpg",
  "17.jpg",
];

function getImg() {
  const choseImg = imges[Math.floor(Math.random() * imges.length)];

  const bgImg = document.createElement("img");

  bgImg.src = `./img/${choseImg}`;
  bgImg.id = "bgImg";
  document.body.appendChild(bgImg);
}

getImg();
