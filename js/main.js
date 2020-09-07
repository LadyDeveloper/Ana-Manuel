 const changeTitle = setInterval( () => {
    document.querySelector('h1').innerHTML = document.querySelector('h1').innerHTML == "Lady Developer" ? "Ana Manuel" : "Lady Developer" ;
 }, 1000);

 const changeBgColor = () => {
     let bgColor = document.body;
     bgColor.style.backgroundColor = bgColor.style.backgroundColor === 'black' ? 'white' : 'black';
     bgColor.style.color = bgColor.style.color === 'white' ? 'black' : 'white';
 };

