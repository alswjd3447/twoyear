const clockTitle = document.querySelector("#day");

function ddayCounter() {
  const date = new Date();
  const nowYear = date.getFullYear();
  const nowMonth = date.getMonth() + 1;
  const nowDay = date.getDay();
  const nowHours = date.getHours();
  const nowMinutes = date.getMinutes();
  const nowSeconds = date.getSeconds();

  const twoyearDate = new Date(2019, 8, 10);
  const nowDate = new Date(nowYear, nowMonth, nowDay);
  const diffMs = nowDate.getTime() - twoyearDate.getTime();
  const diffDay = diffMs / (1000 * 60 * 60 * 24) + 7;

  const lovingDay = `우리 사귄지 ${diffDay}일 ${nowHours}시간 ${nowMinutes}분 ${nowSeconds}초`;
  clockTitle.innerText = lovingDay;
}

ddayCounter();
setInterval(ddayCounter, 1000);
