/* select DOM elements */
const wallEl = document.querySelector(".wall .row")
const wallUrlEndpoint = "https://lanciweb.github.io/demo/api/pictures/"

fetch(wallUrlEndpoint)
.then(response => response.json())
.then(polaroid => {
    console.log(polaroid);
    
    polaroid.forEach(photo => {
        
        const {url, date, title} = photo
        console.log(photo);

        const markup = `
        <div class="col-4 mt-5">
            <div class="case border p-3 position-relative">
                <img src="${url}" class="card-img-top" alt="first image">
                <img src="./img/pin.svg" alt="" class="pin position-absolute">
                <div class="card-bottom mt-3">
                    <p class="card-text ">
                        ${date}
                    </p>
                    <strong class="title-photo">
                        ${title}
                    </strong>
                 </div>
            </div>
        </div>
        `
        wallEl.insertAdjacentHTML("beforeend", markup)

    })
})
.catch(err => console.error(err))