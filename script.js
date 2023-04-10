const data = JSON.parse(dataInfo);

const base = document.querySelector(".card");
const baseorder1 = document.querySelector(".cardtext");
const baseorder2 = document.querySelector(".cardSvgImage");



data.reverse().forEach((element) => {
    
  base.insertAdjacentHTML(
    "afterend",
    `
    <div class="card">
        <div class="cardtext">
            <h1 class="cardtexth1">${element.h1}</h1>            
            <p class="cardtextP">${element.p}</p>
        </div>
            <img
            class="cardSvgImage"
            src="${element.img}"
            alt="изображение недоступно"/>            
    </div>
    `
  );
  baseorder1.classList.toggle('_reverse');
  baseorder2.classList.toggle('_reverse');
});

