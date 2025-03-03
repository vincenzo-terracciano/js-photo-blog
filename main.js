/* select DOM elements */
const wallEl = document.querySelector(".wall .row")
const overlayEl = document.querySelector(".overlay")
const buttonEl = document.querySelector(".btn")
const overlayImage = document.querySelector(".overlay img")

const wallUrlEndpoint = "https://lanciweb.github.io/demo/api/pictures/"

/* fetch the data from url */
fetch(wallUrlEndpoint)
.then(response => response.json())
.then(polaroid => {
    console.log(polaroid);
    
    displayPolaroid(polaroid)
    
    
})
.catch(err => console.error(err))


function renderCard(photo) {
    return`
    <div class="col-12 col-md-6 col-lg-4 mt-5 d-flex justify-content-center">
        <div class="case border p-3 position-relative">
            <img src="${photo.url}" class="card-img-top" alt="first image">
            <img src="./img/pin.svg" alt="" class="pin position-absolute">
            <div class="card-bottom mt-3">
                <div class="card-text ">
                    ${photo.date}
                </div>
                <strong class="title-photo">
                    ${photo.title}
                </strong>
            </div>
        </div>
    </div>
    `
}


function displayPolaroid(polaroid) {

    polaroid.forEach(photo => {
        console.log(photo);
        
        const markup = renderCard(photo)

        wallEl.insertAdjacentHTML("beforeend", markup)

    })

    const cardEl = document.querySelectorAll(".case")
    cardEl.forEach((card) => {
        card.addEventListener("click", function(){
            const cardImage = card.querySelector("img.card-img-top").src;
            overlayImage.src = cardImage 

            overlayOnOff()
        })
    })
}

function overlayOnOff(){
    overlayEl.classList.remove("d-none")

    buttonEl.addEventListener("click", function(){
        overlayEl.classList.add("d-none")
    })
}
