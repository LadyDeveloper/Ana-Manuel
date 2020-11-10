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


const changeBgColor = () => {
  let bgColor = document.body;
  bgColor.style.backgroundColor =
    bgColor.style.backgroundColor === "black" ? "white" : "black";
  bgColor.style.color = bgColor.style.color === "white" ? "black" : "white";
};
