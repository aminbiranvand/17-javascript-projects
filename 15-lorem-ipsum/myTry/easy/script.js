const run = (valueNum) => {
  const result = fetch(
    `https://baconipsum.com/api/?type=meat-and-filler&paras=${valueNum}`
  )
    .then((e) => e.json())
    .then((t) => update(t));
};

const update = (t) => {
  const divShow = document.getElementById("result");

  divShow.innerHTML = t.map((f) => `<p>${f}<p/>`).join('');
};

const btn = document.getElementById("btn");
const inputNum = document.getElementById("inputNum");
btn.onclick = () => {
  const valueNum = inputNum.value;
  run(valueNum);
  inputNum.value='';
};
