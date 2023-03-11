const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];
const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

async function loadData() {
  const res = await fetch(
    "https://nlthrjcrkhscgpnsozch.supabase.co/rest/v1/fact",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5sdGhyamNya2hzY2dwbnNvemNoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc0MTc0NTUsImV4cCI6MTk5Mjk5MzQ1NX0.F_aSUBMQv1IelpUUm8nhgJqvDa3zHNFynAa02F49h98",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5sdGhyamNya2hzY2dwbnNvemNoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc0MTc0NTUsImV4cCI6MTk5Mjk5MzQ1NX0.F_aSUBMQv1IelpUUm8nhgJqvDa3zHNFynAa02F49h98",
      },
    }
  );
  const dataJson = await res.json();

  const filterData = dataJson.filter((data) => data.category === "society");
  factDataFun(dataJson);
  //factDataFun(filterData);
  console.log(dataJson);
}

loadData();
const btnOpen = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factList = document.querySelector(".fact-list");
factList.innerHTML = "";

const factDataFun = (dataArr) => {
  const factHtml = dataArr.map(
    (data) =>
      `<li class="fact">
    <p >
     ${data.text}
      <a class="source" href="${data.source}" target="_blank">(Source)</a>
     
    </p>
    <span class="tag" style="background-color: ${
      CATEGORIES.find((cat) => cat.name === data.category).color
    }"> 
    ${data.category}</span >
    <div class="vote-buttons">
    <button>👍 ${data.voteinteresting}</button>
    <button>🤯 ${data.votetrue}</button>
    <button>⛔ ${data.votefalse}</button>
    </div>
  </li>`
  );

  factList.insertAdjacentHTML("afterbegin", factHtml.join(""));
};

btnOpen.addEventListener("click", () => {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btnOpen.textContent = "close";
  } else {
    form.classList.add("hidden");
    btnOpen.textContent = "share a fact";
  }
});
