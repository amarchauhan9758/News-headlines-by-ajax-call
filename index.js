console.log('hello world')

// const URL https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=da528127320b43e9b8c35c6627c03d24


const newsAccordion = document.getElementById("newsAccordion");




const xhr = new XMLHttpRequest();
console.log(xhr);


xhr.open("Get", "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=da528127320b43e9b8c35c6627c03d24");



xhr.onload = function () {
  if (xhr.status === 200) {
    let response = xhr.response;
    let data = JSON.parse(response);
    console.log(data)
    const obj = data.articles;
    let newsHTml = "";
    obj.forEach(function (element,index) {
      // console.log(obj[news])
      let news = `
                <div class="accordion-item">
                          <h2 class="accordion-header" id="heading${index}">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                              ${element["title"]}
                            </button>
                          </h2>
                          <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#newsAccordion">
                            <div class="accordion-body">
                             ${element["content"]}.   <a href=" ${element['url']}" target="_blank" > <b> Read more</b> </a>
                            </div>
                          </div>
                        </div>`
      newsHTml += news;
    });
    newsAccordion.innerHTML = newsHTml;


  }
  else {
    console.log("some error occured");
  }

}
xhr.send();




