// TODO:
// 1. Get the color from the clicked element
// 2. Change the background color of the body to the color from the clicked element

const colorPalette = document.querySelector('#colorPalette');

colorPalette.addEventListener('click',(event) => {
    const color = event.target;
    const bgColor = color.style.backgroundColor;
    document.body.style.backgroundColor = bgColor;
});