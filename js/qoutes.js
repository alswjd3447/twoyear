const qoutetext = document.getElementById("qoute");
const qoutes = [
  "λ°λν΄β€π§‘πππππ€π€π",
  "μμΌλ‘λ λ§λκ±° λ§μ΄ λ¨Ήμππππ­πΏπ³",
  "νΈμμ΄κ° λ³΅μμ΄ λ€μμΌλ‘ κ·μ¬μπ€©π€©π€©",
  "λλ λλ¬λ€λμ€μ κ³ λ§μπ",
  "λλ λμ ν΄μμ²π",
  "λλ ν¨κ»ν 2λλμ μ¦κ±°μ μ΄π₯°",
  "λ μνμΌλ©΄ λ½λ½ λ°±λ§λ²πΓ10000",
];

const choseQoute = `"${qoutes[Math.floor(Math.random() * qoutes.length)]}"`;
qoutetext.innerText = choseQoute;
console.log(choseQoute);
