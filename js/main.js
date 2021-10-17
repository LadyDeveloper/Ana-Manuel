const changeTitle = setInterval(() => {
  document.querySelector("span").innerHTML =
    document.querySelector("span").innerHTML == "a Software Developer"
      ? "an Anime Enthusiast"
      : "a Software Developer";

  if (document.querySelector("span").innerHTML === "a Software Developer") {
    document.querySelector("span").style.color = "#8269dd";
  } else {
    document.querySelector("span").style.color = "#e04b95";
  }
}, 1500);

const showMenu = () => {
  console.log("Clicked");
};

document.getElementById('year').innerHTML = new Date().getFullYear();