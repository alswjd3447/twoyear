const clock = document.getElementById("clock");
const date = document.getElementById("date");

function nowClock() {
  const nowdate = new Date();
  const nowyear = String(nowdate.getFullYear()).padStart(2, "0");
  const nowmonth = String(nowdate.getMonth() + 1).padStart(2, "0");
  const nowday = String(nowdate.getDate()).padStart(2, "0");
  const nowhour = String(nowdate.getHours()).padStart(2, "0");
  const nowminute = String(nowdate.getMinutes()).padStart(2, "0");
  const nowsecond = String(nowdate.getSeconds()).padStart(2, "0");
  date.innerText = `${nowyear}.${nowmonth}.${nowday}`;
  clock.innerText = `${nowhour}:${nowminute}:${nowsecond}`;
}

nowClock();
setInterval(nowClock, 1000);
