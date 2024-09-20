const questionList = [
  {
    id: "001",
    title: "吃咖哩飯的時候：",
    select: [
      { name: "不拌", value: "E" },
      { name: "全拌", value: "I" },
    ],
  },
  {
    id: "002",
    title: "第一次約會：",
    select: [
      { name: "動物園", value: "N" },
      { name: "遊樂園", value: "S" },
      { name: "海邊", value: "N" },
      { name: "咖啡店", value: "S" },
    ],
  },
  {
    id: "003",
    title: "這堂課，最喜歡的知識點：(並說明)",
    select: [
      { name: "forEach", value: "T" },
      { name: "filter", value: "T" },
      { name: "reduce", value: "T" },
    ],
  },
  {
    id: "004",
    title: "最常看的串流平台",
    select: [
      { name: "Netflix", value: "P" },
      { name: "Disney +", value: "J" },
      { name: "HBO Go", value: "P" },
      { name: "愛奇藝", value: "J" },
    ],
  },
];
const frinendList = [
  {
    name: "狐狸姨姨",
    age: 49,
    mbti: "INTP",
    describe: "舉手投足散發出貴婦般的優雅，寫code也非常的優雅",
    image: "IMG_0123.JPG",
  },
  {
    name: "蝙蝠妹",
    age: 19,
    mbti: "INTJ",
    describe: "喜愛夜生活的地雷系女孩，個性慢熟",
    image: "IMG_0124.JPG",
  },
  {
    name: "寶豬奶奶",
    age: 65,
    mbti: "ENTJ",
    describe: "擅長保養，完全看不出歲月的痕跡",
    image: "IMG_0125.JPG",
  },
  {
    name: "企鵝妹",
    age: 18,
    mbti: "ENTP",
    describe: "喜愛戶外擁抱陽光，看似冰冷實際上很熱情",
    image: "IMG_0126.JPG",
  },
  {
    name: "犬小姐",
    age: 28,
    mbti: "ISTP",
    describe: "朝九晚五的前端工程師，喜愛料理",
    image: "IMG_0127.JPG",
  },
  {
    name: "兔小姐",
    age: 23,
    mbti: "ISTJ",
    describe: "剛進入職場的工程師，正在為成為前端還是後端煩惱",
    image: "IMG_0128.JPG",
  },
  {
    name: "鹿姐",
    age: 33,
    mbti: "ESTP",
    describe: "高挑的身材，似乎比你高一顆頭",
    image: "IMG_0129.JPG",
  },
  {
    name: "海獺熊貓",
    age: 41,
    mbti: "ESFJ",
    describe: "爸爸是海獺，媽媽是熊貓，異國感十足的地方太太",
    image: "IMG_0130.JPG",
  },
  {
    name: "狸貓姐",
    age: 35,
    mbti: "ESTJ",
    describe: "喜愛中性打扮，相處起來就像是兄弟一樣",
    image: "IMG_0131.JPG",
  },
];

const questionView = document.getElementById("questionView");
const allFriendView = document.getElementById("allFriend");
const bestFriendView = document.getElementById("bestFriendView");
const questionButton = document.getElementById("questionButton");
questionButton.addEventListener("click", () => getAnswer());

// foreach取得每題分數
function getSelectNum() {
  let selectList = [];
  questionList.forEach((item, index) => {
    selectList.push(
      document.querySelector(`input[name="question${index}"]:checked`).value
    );
  });
  return selectList;
}

// reduce計算總分
function calculateSelect(selectList) {
  const totalString = selectList.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    ""
  );
  return totalString;
}

// filter 回傳過濾後的結果
function filterBestFriend(totalString) {
  const bestFriendResult = frinendList.filter(function (friendData) {
    return friendData.mbti === totalString;
  });
  return bestFriendResult;
}

function getAnswer() {
  const selectList = getSelectNum();
  const totalString = calculateSelect(selectList);
  const bestFriendResult = filterBestFriend(totalString);
  renderBestFriend(bestFriendResult);
}

// 渲染測驗結果
function renderBestFriend(bestFriendResult) {
  let html = "";
  bestFriendResult.forEach((item) => {
    html += `<div class="card border-0 text-bg-dark h-100">
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
    const questionHtml = renderSelectView(item.select, index);
    html += `<div class="mb-4">
        <h6>${index + 1}.${item.title}</h6>
        ${questionHtml}
      </div>`;
  });
  questionView.innerHTML = html;
}

// 選染題目中的選項
function renderSelectView(selectList, id) {
  let questionHtml = "";
  selectList.forEach((item, index) => {
    if (index === 0) {
      questionHtml += `<div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="question${id}"
            id="${id}${index}"
            value=${item.value}
            checked
          />
          <label class="form-check-label" for="${id}${index}">${item.name}</label>
        </div>`;
    } else {
      questionHtml += `<div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="question${id}"
            id="${id}${index}"
            value=${item.value}
          />
          <label class="form-check-label" for="${id}${index}">${item.name}</label>
        </div>`;
    }
  });
  return questionHtml;
}

// 渲染allfriend
function renderAllFriendView() {
  let html = "";
  frinendList.forEach((friendData) => {
    html += `<div class="col">
          <div class="card border-0 text-bg-dark h-100">
            <img
              src="./assets/images/${friendData.image}"
              class="card-img"
              alt="..."
            />
            <div
              class="card-img-overlay p-2 text-secondary d-flex flex-column justify-content-between"
            >
              <p class="card-title" style="font-size: 12px">
                ${friendData.name}-<small>${friendData.age}</small>
              </p>
              <p
                class="card-text lh-1 shadow-lg bg-light opacity-75"
                style="font-size: 10px"
              >
                <small>${friendData.describe}</small>
              </p>
            </div>
          </div>
        </div>`;
  });
  allFriendView.innerHTML = html;
}

renderQuestionView();
