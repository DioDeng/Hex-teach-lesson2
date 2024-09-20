const questionList = [
  {
    id: "001",
    title: "吃咖哩飯的時候：",
    select: ["不拌", "半拌", "全拌"],
  },
  {
    id: "002",
    title: "這堂課，最喜歡的知識點：(並說明)",
    select: ["forEach", "filter", "reduce"],
  },
  {
    id: "003",
    title: "第一次約會：",
    select: ["動物園", "海邊", "咖啡店"],
  },
  {
    id: "004",
    title: "最常看的串流平台",
    select: ["HBO GO", "Netflix", "Disney +"],
  },
];
const frinendList = [
  {
    name: "狐狸姨姨",
    age: 49,
    describe: "舉手投足散發出貴婦般的優雅，寫code也非常的優雅",
    aptNumber: 8,
    image: "IMG_0123.JPG",
  },
  {
    name: "蝙蝠妹",
    age: 19,
    describe: "喜愛夜生活的地雷系女孩，個性慢熟",
    aptNumber: 7,
    image: "IMG_0124.JPG",
  },
  {
    name: "寶豬奶奶",
    age: 65,
    describe: "擅長保養，完全看不出歲月的痕跡",
    aptNumber: 6,
    image: "IMG_0125.JPG",
  },
  {
    name: "企鵝妹",
    age: 18,
    describe: "喜愛戶外擁抱陽光，看似冰冷實際上很熱情",
    aptNumber: 5,
    image: "IMG_0126.JPG",
  },
  {
    name: "犬小姐",
    age: 28,
    describe: "朝九晚五的前端工程師，喜愛料理",
    aptNumber: 4,
    image: "IMG_0127.JPG",
  },
  {
    name: "兔小姐",
    age: 23,
    describe: "剛進入職場的工程師，正在為成為前端還是後端煩惱",
    aptNumber: 3,
    image: "IMG_0128.JPG",
  },
  {
    name: "鹿姐",
    age: 33,
    describe: "高挑的身材，似乎比你高一顆頭",
    aptNumber: 2,
    image: "IMG_0129.JPG",
  },
  {
    name: "海獺熊貓",
    age: 41,
    describe: "爸爸是海獺，媽媽是熊貓，異國感十足的地方太太",
    aptNumber: 1,
    image: "IMG_0130.JPG",
  },
  {
    name: "狸貓姐",
    age: 35,
    describe: "喜愛中性打扮，相處起來就像是兄弟一樣",
    aptNumber: 0,
    image: "IMG_0131.JPG",
  },
];

const questionView = document.getElementById("questionView");
const bestFriendView = document.getElementById("bestFriendView");
const questionButton = document.getElementById("questionButton");
questionButton.addEventListener("click", () => getAnswer());

// foreach取得每題分數
function getSelectNum() {
  let selectList = [];
  questionList.forEach((item, index) => {
    selectList.push(
      parseInt(
        document.querySelector(`input[name="question${index}"]:checked`).value
      )
    );
  });
  return selectList;
}

// (*´∀`)~♥練習使用foreach or reduce or filter
// 將index.html內的 id="allFriend"區塊用迴圈進行渲染

// (*´∀`)~♥練習使用foreach or reduce or filter
// 計算總分
function calculateSelect(selectList) {
  let totalScore = 0;
  selectList.forEach((score) => {
    totalScore += score;
  });
  return totalScore;
}

// (*´∀`)~♥練習使用foreach or reduce or filter
// 回傳過濾後的結果
function filterBestFriend(totalScore) {
  let bestFriendResult = [];
  frinendList.forEach((friendData) => {
    if (friendData.aptNumber === totalScore) {
      bestFriendResult.push(friendData);
    }
  });
  return bestFriendResult;
}

function getAnswer() {
  const selectList = getSelectNum();
  const totalScore = calculateSelect(selectList);
  const bestFriendResult = filterBestFriend(totalScore);
  renderBestFriend(bestFriendResult);
}

// 渲染測驗結果
function renderBestFriend(bestFriendResult) {
  let html = "";
  bestFriendResult.forEach((item) => {
    html += `<div class="card border-0 text-bg-dark h-100" style="max-width: 27rem;">
            <img
              src="./assets/images/${item.image}"
              class="card-img"
              alt="..."
            />
            <div
              class="card-img-overlay text-secondary d-flex flex-column justify-content-between"
            >
              <h5 class="card-title">
                ${item.name}-<small>${item.age}</small>
              </h5>
              <p
                class="card-text lh-1 shadow-lg bg-light opacity-75"
              >
                <small>${item.describe}</small>
              </p>
            </div>
          </div>`;
  });
  bestFriendView.innerHTML = html;
}

// foreach 渲染題目
function renderQuestionView() {
  let html = "";
  questionList.forEach((item, index) => {
    html += `<div class="mb-4">
        <h6>${index + 1}.${item.title}</h6>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="question${index}"
            id="${item.id}1"
            value=0
            checked
          />
          <label class="form-check-label" for="${item.id}1">${
      item.select[0]
    }</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="question${index}"
            id="${item.id}2"
            value=1
          />
          <label class="form-check-label" for="${item.id}2">${
      item.select[1]
    }</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="question${index}"
            id="${item.id}3"
            value=2
          />
          <label class="form-check-label" for="${item.id}3">${
      item.select[2]
    }</label>
        </div>
      </div>`;
  });
  questionView.innerHTML = html;
}

renderQuestionView();
