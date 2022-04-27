"use strict";
const maincontainer = document.querySelector(".channel");
const display = document.querySelector(".display");
const news = document.querySelector(".news");
const image = document.querySelector(".imge");
const data = fetch(
  "https://newsapi.org/v2/top-headlines?country=in&apiKey=af0c13a26cfc413c95692d80981a4934"
)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const dished = `<a href="${data.articles[0].url}"><h4 class="displayhead">${data.articles[0].title}!</h4></a>`;
    display.insertAdjacentHTML("beforeend", dished);
    data.articles.forEach((d) => {
      const img = `<img src="${d.urlToImage}" alt="" srcset="" class="img"></img>`;
      const html = `
       <h4 class="heading"></h4> 
      <p class="newspara"></p>
       <p class="source"></p>`;

      maincontainer.insertAdjacentHTML("beforeend", html);
      news.insertAdjacentHTML("beforeend", img);
    });
  });
