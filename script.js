const formEl = document.getElementById('form');
const searchBoxEl = document.getElementById('search-box');
const search_resultEl = document.getElementById('search-result')
const morebtnEl = document.getElementById('more');
const searchBtn = document.getElementById('search-btn')


const key = 'fdZEEwQCjTOpPTbBntzIqA1tCb4BlmIpjYPK3U5Rl2I';
let page = 1;

async function searchImage(){
    const keyword = searchBoxEl.value;
    let url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${key}&per_page=12`

    let response = await fetch(url);
    let data = await response.json();
    

    if(page === 1){
        search_resultEl.innerHTML = " ";
    }

    
    let result = data.results;
    result.map((result) =>{
        let image = document.createElement('img');
        image.src = result.urls.small;
        let imageLink = document.createElement('a');
        imageLink.href = result.links.html;
        imageLink.target = '_blank';
        imageLink.appendChild(image);
        search_resultEl.appendChild(imageLink)
    })
    morebtnEl.style.display = 'block'
    

}

formEl.addEventListener("submit", (e) =>{
    e.preventDefault();
    page = 1;
    searchImage();
    
})

morebtnEl.addEventListener('click', () =>{
    page++;
    searchImage()
})



