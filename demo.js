let data = [
  {
    id: 0,
    name: "綠島自由行套裝行程",
    imgUrl:
      "https://github.com/hexschool/2022-web-layout-training/blob/main/js_week5/travel_1.png?raw=true",
    area: "高雄",
    description: "嚴選超高CP值綠島自由行套裝行程，多種綠島套裝組合。",
    group: 87,
    price: 1400,
    rate: 10,
  },
  {
    id: 1,
    name: "清境高空觀景步道",
    imgUrl:
      "https://github.com/hexschool/2022-web-layout-training/blob/main/js_week5/travel_4.png?raw=true",
    area: "台北",
    description:
      "清境農場青青草原數十公頃碧草，這些景觀豐沛了清境觀景步道的風格，也涵養它無可取代的特色。",
    group: 99,
    price: 240,
    rate: 2,
  },
  {
    id: 2,
    name: "山林悠遊套票",
    imgUrl:
      "https://github.com/hexschool/2022-web-layout-training/blob/main/js_week5/travel_3.png?raw=true",
    area: "台中",
    description:
      "山林悠遊套票，結合南投清境高空步道、雙龍瀑布七彩吊橋、瑞龍瀑布園區之熱門景點。",
    group: 20,
    price: 1765,
    rate: 7,
  },
];
// 1.取得<ul></ul>DOM
const ticketList = document.getElementById("ticketList");

// 2.forEach版型的累加<li></li>
let html = "";
data.forEach(function (item) {
  // html += `<li class="ticketCard">${item.name}</li>`
  html += `<li class="ticketCard">
            <div class="ticketCard-img">
              <a href="#">
                <img src="${item.imgUrl}" alt="">
              </a>
              <div class="ticketCard-region">${item.area}</div>
              <div class="ticketCard-rank">${item.rate}</div>
            </div>
            <div class="ticketCard-content">
              <div>
                <h3>
                  <a href="#" class="ticketCard-name">${item.name}</a>
                </h3>
                <p class="ticketCard-description">
                  ${item.description}
                </p>
              </div>
              <div class="ticketCard-info">
                <p class="ticketCard-num">
                  <span><i class="fas fa-exclamation-circle"></i></span>
                  剩下最後 <span id="ticketCard-num"> ${item.group} </span> 組
                </p>
                <p class="ticketCard-price">
                  TWD <span id="ticketCard-price">$${item.price}</span>
                </p>
              </div>
            </div>
          </li>`;
});

// 3.將累加結果使用innerHTML寫進DOM
ticketList.innerHTML = html;
