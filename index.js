"use strict";
const display = document.querySelector(".display");
const news = document.querySelector(".news");
const image = document.querySelector(".imge");
const content = document.querySelector(".content");
const data = fetch(
  "https://newsapi.org/v2/top-headlines?country=in&apiKey=af0c13a26cfc413c95692d80981a4934"
)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const dished = `<a href="${data.articles[0].url}"><h4 class="displayhead">${data.articles[0].title}!</h4></a>`;
    display.insertAdjacentHTML("beforeend", dished);
    data.articles.forEach((d) => {
      const img = `
      <div class="imges">
      <a href="${d.url}"><img src="${d.urlToImage}" alt="${d.source.name}" srcset="" class="img"></img></a>
      </div>`;
      const html = `
      <a href="${d.url}"><div class="con">
      
      <h3 class="heading">${d.title}!</h3>
      <p class="newspara">${d.description}</p>
       <p class="source">Source:${d.source.name}</p>
       </div></a>`;

      image.insertAdjacentHTML("beforeend", img);
      content.insertAdjacentHTML("beforeend", html);
      // news.insertAdjacentHTML("beforeend", imge);
    });
  });
