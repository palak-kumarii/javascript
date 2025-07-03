const bulbOnURL = 'https://res.cloudinary.com/dcgghyuav/image/upload/v1751522915/bulb-on_va0euz.jpg';
const bulbOffURL = 'https://res.cloudinary.com/dcgghyuav/image/upload/v1751453496/bulb-off_rgjumy.jpg';
const catOnURL = 'https://res.cloudinary.com/dcgghyuav/image/upload/v1751540644/cat-on_yarbaw.jpg';
const catOffURL = 'https://res.cloudinary.com/dcgghyuav/image/upload/v1751453489/cat-off_pz4bri.jpg';


const bulbImg = document.getElementById('bulb');
const catImg = document.getElementById('cat');
const onBtn = document.getElementById('onbtn');
const offBtn = document.getElementById('offbtn');


onBtn.addEventListener('click', () => {
    bulbImg.src = bulbOnURL;
    catImg.src = catOnURL;
});

offBtn.addEventListener('click', () => {
    bulbImg.src = bulbOffURL;
    catImg.src = catOffURL;
});