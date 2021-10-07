console.log("merge");

const changeBackgroundVar = document.querySelector('.whole-body');

changeBackgroundVar.addEventListener('mousemove', changeBackgroundFunction);

function changeBackgroundFunction (e) {
    changeBackgroundVar.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}