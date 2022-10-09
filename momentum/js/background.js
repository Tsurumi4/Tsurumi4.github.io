const images = ["공각기동대.jpg", "내부자들.jpg", "디파티드.jpg", "범죄와의 전쟁.jpg", "부당거래.jpg"];

const choosenImage = images[Math.floor(Math.random() * images.length)];
const body = document.body;

const bgImage = document.createElement("img");

bgImage.src = `img/${choosenImage}`;

document.body.style.background = `url('img/${choosenImage}') no-repeat 0 0`;
document.body.style.backgroundSize = "cover";
