const questionList = [
  {
    id: "001",

    title: "第一次約會：",
    select: [
      { name: "水族館(I)", value: "I" },
      { name: "遊樂園(E)", value: "E" },
    ],
  },
  {
    id: "002",
    title: "吃咖哩飯時：",
    select: [
      { name: "不拌(N)", value: "N" },
      { name: "全拌(S)", value: "S" },
    ],
  },
  {
    id: "003",
    title: "這堂課，最喜歡的知識點：(並說明)",
    select: [
      { name: "map(T)", value: "T" },
      { name: "filter(F)", value: "F" },
    ],
  },
  {
    id: "004",
    title: "出國遊玩時：",
    select: [
      { name: "走到哪逛到哪(P)", value: "P" },
      { name: "事前安排行程(J)", value: "J" },
    ],
  },
];

const frinendList = [
  {
    name: "狐狸姨姨",
    mbti: "INTP",
    describe: "舉手投足散發出貴婦般的優雅，寫code也非常的優雅",
    image: "IMG_0123.JPG",
  },
  {
    name: "蝙蝠妹",
    mbti: "INTJ",
    describe: "喜愛夜生活的地雷系女孩，個性慢熟",
    image: "IMG_0124.JPG",
  },
  {
    name: "豬奶奶",
    mbti: "ENTJ",
    describe: "擅長保養，完全看不出歲月的痕跡",
    image: "IMG_0125.JPG",
  },
  {
    name: "企鵝妹",
    mbti: "ENTP",
    describe: "喜愛戶外擁抱陽光，看似冰冷實際上很熱情",
    image: "IMG_0126.JPG",
  },
  {
    name: "犬小姐",
    mbti: "ISTP",
    describe: "朝九晚五的前端工程師，喜愛料理",
    image: "IMG_0127.JPG",
  },
  {
    name: "兔小姐",
    mbti: "ISTJ",
    describe: "剛進入職場的工程師，正在為成為前端還是後端煩惱",
    image: "IMG_0128.JPG",
  },
  {
    name: "鹿姐",
    mbti: "ESTP",
    describe: "高挑的身材，似乎比你高一顆頭",
    image: "IMG_0129.JPG",
  },
  {
    name: "海獺熊貓",
    mbti: "ESFJ",
    describe: "爸爸是海獺，媽媽是熊貓，異國感十足的地方太太",
    image: "IMG_0130.JPG",
  },
  {
    name: "狸貓姐",
    mbti: "INFJ",
    describe: "喜愛中性打扮，相處起來就像是兄弟一樣",
    image: "IMG_0131.JPG",
  },
  {
    name: "嗨鼠妹",
    mbti: "ESFP",
    describe: "熬夜寫code，團體中的開心果，隨時都能嗨起來",
    image: "IMG_0181.JPG",
  },
  {
    name: "乳牛咩",
    mbti: "ISFJ",
    describe: "雖然怕生，但做事不易出錯，值得信賴的夥伴",
    image: "IMG_0182.JPG",
  },
  {
    name: "藍貓姐",
    mbti: "ENFJ",
    describe: "外表看似冷酷，其實酷愛交友",
    image: "IMG_0183.JPG",
  },
  {
    name: "庫Ｘ米醬",
    mbti: "ISFP",
    describe: "叛逆卻可愛的個性，人見人愛",
    image: "IMG_0184.JPG",
  },
  {
    name: "美Ｘ蒂醬",
    mbti: "ENFP",
    describe: "天真無邪，雖然時常搞砸，但惹人愛",
    image: "IMG_0185.JPG",
  },
  {
    name: "蛇蛇妹",
    mbti: "INFP",
    describe: "其實不怕冷，但害羞喜愛用圍巾遮著表情",
    image: "IMG_0186.JPG",
  },
  {
    name: "海狸兄",
    mbti: "ESTJ",
    describe: "肌肉兄貴，寫code大學長",
    image: "IMG_0187.JPG",
  },
];

const questionView = document.getElementById("questionView");
const bestFriendView = document.getElementById("bestFriendView");
const questionButton = document.getElementById("questionButton");
questionButton.addEventListener("click", getAnswer);

// 測驗結果
function getAnswer() {
  const mbtiList = getSelectValue(); //1.取得選取的值
  const mbtiString = calculateSelect(mbtiList);//2.將陣列做字串合併
  const bestFriendResult = filterBestFriend(mbtiString);//3.篩選
  renderBestFriend(bestFriendResult);
}

// --------------------修改開始--------------------
// 1.(*´∀`)~♥練習使用foreach or filter or map
function getSelectValue() {
  const selectList = questionList.map(function(item, index) {
    return document.querySelector(`input[name="question${index}"]:checked`).value
  });
  return selectList
}

// 2.(*´∀`)~♥練習使用foreach or filter or map
// mbti字串合併
function calculateSelect(selectList) {
  let mbtiString ='';
  selectList.forEach(function(item){
    mbtiString += item
  })
  return mbtiString;
}

// 3.(*´∀`)~♥練習使用foreach or filter or map
// 對frinendList進行mbti篩選
function filterBestFriend(mbtiString) {
  const bestFriendResult = frinendList.filter(function(item) {
    return item.mbti === mbtiString
  })
  return bestFriendResult;
}

// --------------------修改結束--------------------

// 渲染測驗結果
function renderBestFriend(bestFriendResult) {
  let html = "";
  bestFriendResult.forEach(function (item) {
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
                  ${item.name}-<small>${item.mbti}</small>
                </h5>
                <p
                  class="card-text lh-1 h2 shadow-lg bg-light opacity-75"
                >
                  ${item.describe}
                </p>
              </div>
            </div>`;
  });
  bestFriendView.innerHTML = html;
}

// 渲染friendView
const friendView = document.getElementById('friendView');
let html = '';
frinendList.forEach(function(item) {
  html+= `<div class="col">
          <div class="card border-0 text-bg-dark h-100">
            <img
              src="./assets/images/${item.image}"
              class="card-img"
              alt="..."
            />
            <div
              class="card-img-overlay p-1 text-secondary d-flex flex-column justify-content-between"
            >
              <p class="card-title">
                ${item.name}-<small>${item.mbti}</small>
              </p>
              <p
                class="card-text lh-1 shadow-lg bg-light opacity-75 fontSet"
              >
                <small>${item.describe}</small>
              </p>
            </div>
          </div>
        </div>`;
})
friendView.innerHTML = html;

// foreach 渲染題目
function renderQuestionView() {
  let html = "";
  questionList.forEach(function (question, index) {
    const questionHtml = renderSelectView(question.select, index);
    html += `<div class="mb-4">
        <h6>${index + 1}.${question.title}</h6>
        ${questionHtml}
      </div>`;
  });
  questionView.innerHTML = html;
}

// 選染題目中的選項
function renderSelectView(selectList, id) {
  let questionHtml = "";
  selectList.forEach(function (item, index) {
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

renderQuestionView();

console.log(document.getElementById('questionView'))