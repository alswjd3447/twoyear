const qoutetext = document.getElementById("qoute");
const qoutes = [
  "따랑해❤🧡💛💚💙💜🤎🖤💗",
  "앞으로도 맛난거 많이 먹자🍕🍔🍟🌭🍿🍳",
  "호영이가 복순이 다음으로 귀여워🤩🤩🤩",
  "나랑 놀러다녀줘서 고마워😚",
  "너는 나의 휴식처💑",
  "너랑 함께한 2년동안 즐거웠어🥰",
  "나 잘했으면 뽀뽁 백만번😘×10000",
];

const choseQoute = `"${qoutes[Math.floor(Math.random() * qoutes.length)]}"`;
qoutetext.innerText = choseQoute;
console.log(choseQoute);
