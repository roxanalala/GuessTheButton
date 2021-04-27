'strict mode';

const btns = document.querySelector('.check');
const againBtn = document.querySelector('.again');
const inputButton = document.querySelector('.inputBtn');
const inputValue = document.querySelector('.n');

let n;
let randomNum;

inputButton.addEventListener('click', function () {
  n = inputValue.value;
  randomNum = Math.trunc(Math.random() * n + 1);

  for (let i = 0; i < n; i++) {
    const btn = document.createElement('button');

    btn.innerHTML = `${i + 1}`;
    btn.className = `btn check btn_${i + 1}`;
    btn.id = 'buttons';

    document.getElementById('btns').appendChild(btn);
  }
});

btns.addEventListener('click', function (e) {
  const clicked = e.target.closest('.check');

  if (clicked.classList.contains(`btn_${randomNum}`)) {
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('main').style.opacity = 0;
  }
});

againBtn.addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = 'pink';
  document.querySelector('main').style.opacity = 1;
  inputValue.value = null;
  randomNum = Math.trunc(Math.random() * 3 + 1);

  for (let i = 0; i < n; i++) {
    const btns = document.getElementById('buttons');
    btns.parentNode.removeChild(btns);
  }
});
