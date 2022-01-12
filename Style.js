document.getElementById('text').onclick = function () {
    document.getElementById("text").style.display = "none";
}

document.addEventListener('keyup', event => {
    if (event.code === 'Space') {
        document.getElementById("text").remove();
        console.log('Space pressed')
    }
});
