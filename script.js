const data = JSON.parse(dataInfo);
const container = document.querySelector(".container02");

data.forEach((element,i) => {
  const newCard = document.createElement("div");
  newCard.classList.add("card");
  newCard.innerHTML = `
        <div class="cardtext">
            <h1 class="cardtexth1">${element.h1}</h1>            
            <p class="cardtextP">${element.p}</p>
        </div>
        <img
            class="cardSvgImage"
            src="${element.img}"
            alt="изображение недоступно"/> 
    `;
    if ((i+1) % 2 === 0) 
    {
        newCard.querySelector(".cardtext").classList.add("reverse");
        newCard.querySelector(".cardSvgImage").classList.add("reverse");
    }
    container.appendChild(newCard)
});

// data.reverse().forEach((element, i) => {
//   base.insertAdjacentHTML(
//     "afterend",
//     `
    // <div class="card">
    //     <div class="cardtext">
    //         <h1 class="cardtexth1">${element.h1}</h1>            
    //         <p class="cardtextP">${element.p}</p>
    //     </div>
    //         <img
    //         class="cardSvgImage"
    //         src="${element.img}"
    //         alt="изображение недоступно"/>            
    // </div>
//     `
//   );
// });
