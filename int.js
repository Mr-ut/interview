const btn1 = document.getElementById('btn1');

const btn2 = document.getElementById('btn2');

btn1.addEventListener('click', function onClick() {
    document.body.style.color = 'white';
});

btn2.addEventListener('click', function onClick() {
    document.getElementById('div').style.backgroundColor = 'red';
});