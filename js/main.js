const changeTitle = setInterval(() => {
  document.querySelector("h1").innerHTML =
    document.querySelector("h1").innerHTML == "Lady Developer"
      ? "Ana Manuel"
      : "Lady Developer";
      
    if (document.querySelector("h1").innerHTML === "Lady Developer") {
        document.querySelector("h1").style.color = " #146EB0";
    } else {
        document.querySelector("h1").style.color = "#408b35";
    }
}, 1500);


const changeBgColor = () => {
  let bgColor = document.body;
  bgColor.style.backgroundColor =
    bgColor.style.backgroundColor === "black" ? "white" : "black";
  bgColor.style.color = bgColor.style.color === "white" ? "black" : "white";
};
