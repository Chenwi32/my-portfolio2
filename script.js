function seeMore() {
  const moreProjects = document.getElementById("see-moreBtn");
  const portfolio = document.getElementById("portfolio-sc");
  const morePortfolio = document.getElementById("more-portfolio");
  const firstPortfolio = document.getElementById("portfolio-first");

  portfolio.innerHTML = firstPortfolio.innerHTML;

  moreProjects.addEventListener("click", () => {
    if (portfolio.innerHTML === firstPortfolio.innerHTML) {
      portfolio.innerHTML = morePortfolio.innerHTML;
      moreProjects.innerText = "<-- See less";
    } else {
      portfolio.innerHTML = firstPortfolio.innerHTML;
      moreProjects.innerText = "See more -->";
    }
  });
}

const chat = document.querySelector(".bot");
const chatIcon = document.querySelector(".fa-comment-dots");
const closeChat = document.querySelector(".ifr__header");

const displayChat = () => {
  if (chat.classList.contains("slide")) {
    chat.classList.remove("slide");
    chatIcon.classList.add("slide");
  } else {
    chat.classList.add("slide");
    chatIcon.classList.remove("slide");
  }
};

chatIcon.addEventListener("click", () => displayChat());
closeChat.addEventListener("click", () => displayChat());

seeMore();
