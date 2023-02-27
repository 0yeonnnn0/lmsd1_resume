const images = ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)]

 const bgImage = document.createElement("img");

 bgImage.id = 'bg';

 bgImage.src = `img/${chosenImage}`;

 document.body.appendChild(bgImage);

function addBackgroundName() {
    document.getElementById('bg').className += 'background';
}

addBackgroundName()