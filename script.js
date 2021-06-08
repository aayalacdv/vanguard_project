const baseUrl = 'https://card-fight-vanguard-api.ue.r.appspot.com/api/v1/cards';
const cardDiv = document.querySelector('.card_display'); 
const nextbtn = document.querySelector('.next'); 
const backbtn = document.querySelector('.back'); 
let pageNumber = 0;


async function getCards(page){
    const response = await fetch(baseUrl+'?page='+page)
    .then(response => response.json())
    .then(data => {
        return data; 
    })

    cardDiv.innerHTML = ''; 
    response.data.forEach(element => {

        const div = document.createElement('div'); 
        div.className = 'card'; 
        div.style.width = '18rem'; 
        const image = document.createElement('img'); 
        image.class = 'card-img-top'; 
        image.src = element.imageurljp; 
        div.appendChild(image); 

        const div2 = document.createElement('div'); 
        const h5 = document.createElement('h5');
        h5.innerText = element.name;
        const description = document.createElement('p'); 
        description.innerText = element.race; 

        
        div2.appendChild(h5); 
        div2.appendChild(description);
        div.appendChild(div2); 


       cardDiv.appendChild(div); 
    });
}

nextbtn.addEventListener('click',() => {
    pageNumber = pageNumber+1; 
    getCards(pageNumber); 
} ); 


backbtn.addEventListener('click',() => {
    pageNumber = pageNumber-1; 
    getCards(pageNumber); 
} ); 

