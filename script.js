


let catApiUrl = "https://cataas.com/cat";
let catBtn = document.querySelector('#cat-btn')



let catTextUrl = "https://cataas.com/cat/says/";
let textInput = document.querySelector('#catText');
let textBtn = document.querySelector("#text-submit");



async function textCatImage() {
    try {
        let text = textInput.value;
        if (text == '') {
            let img = document.querySelector('.cat-image')
            img.setAttribute('alt', "no text found");
            return;
        }

        let url = catTextUrl + text;
        let response = await fetch(url)

        return response.url;
    }
    catch (e) {
        console.log(e)
        return 'No image found';
    }
}

textBtn.addEventListener('click', async () => {
    let imageLink = await textCatImage();
    let img = document.querySelector('.cat-image')
    img.setAttribute('src', imageLink);
})







async function getCatImage() {
    try {
        let res = await fetch(catApiUrl)

        return res.url;
    } 
    catch (e) {
        console.log(e)
        return 'No image found';
    }
}
catBtn.addEventListener('click', async () => {
    let imageLink = await getCatImage();
    let img = document.querySelector('.cat-image')
    img.setAttribute('src', imageLink);
})












let dogApiUrl = "https://dog.ceo/api/breeds/image/random";
let dogBtn = document.querySelector('#dog-btn')


async function getDogImage() {
    try {
        let res = await axios.get(dogApiUrl)

        return res.data.message;
    } 
    catch (e) {
        console.log(e)
        return 'No image found';
    }
}
dogBtn.addEventListener('click', async () => {
    let imageLink = await getDogImage();
    let img = document.querySelector('.dog-image')
    img.setAttribute('src', imageLink);
})




