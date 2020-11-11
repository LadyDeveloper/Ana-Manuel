const changeTitle = setInterval(() => {
  document.querySelector("span").innerHTML =
    document.querySelector("span").innerHTML == "a Developer"
      ? "Ana"
      : "a Developer";

  if (document.querySelector("span").innerHTML === "a Developer") {
    document.querySelector("span").style.color = " black";
  } else {
    document.querySelector("span").style.color = "#ffff";
  }
}, 1500);

const showMenu = () => {
  console.log("Clicked");
};
