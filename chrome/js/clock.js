const clock = document.querySelector("h2#clock")
 
function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,'0');
    const minutes = String(date.getMinutes()).padStart(2,'0');
    clock.innerText = `${hours}:${minutes}`;
}

getClock();
setInterval(getClock, 1000);





//interval은 매번 일어나야 하는 무언가를 의미함//