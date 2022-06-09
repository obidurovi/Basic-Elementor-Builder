const heading = document.getElementById('heading');
const font_size = document.getElementById('font_size');
const color = document.getElementById('color');
const ff = document.getElementById('ff');
const fs = document.getElementById('fs');
const fw = document.getElementById('fw');
const bgcolor = document.getElementById('bgcolor');
const h1 = document.querySelector('h1');
const align = document.querySelectorAll('.align');

heading.onkeyup = () =>{
    h1.innerHTML = heading.value;
    h1.style.fontSize = '20px';
}

align.forEach(item =>{
    item.onchange = () => {
        h1.style.textAlign = item.value;
    }
});


font_size.oninput = () => {
    h1.style.fontSize = font_size.value + 'px';
}

color.oninput = () => {
    h1.style.color = color.value;
}

ff.onchange = () => {
    h1.style.fontFamily = ff.value;
	return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}

fs.onchange = () => {
    h1.style.fontStyle = fs.value;
}

fw.onchange = () => {
    h1.style.fontWeight = fw.value;
}

bgcolor.oninput = () => {
    h1.style.backgroundColor = bgcolor.value;
}