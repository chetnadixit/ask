const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const para = document.querySelector("p");

yesBtn.addEventListener("click", () => {
  question.innerHTML = " lob youuuu , &#128513;";
  gif.src =
    "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";
    

para.innerHTML = "<span style= text-align: center;font-size: 1.5em;color: #e94d58;margin: 15px 0 >"+ "You didnt have any option other than this as well , &#128540" + "</span>";


});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});