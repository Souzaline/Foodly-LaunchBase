const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card');
const modal = document.querySelector('.modal')

for (let card of cards) {
    card.addEventListener('click', function(){
        modalOverlay.classList.add('active')
        const imageId=card.getAttribute('id')
        modalOverlay.querySelector("img").src=`${imageId}`

        const title=card.querySelector("h1")
        modalOverlay.querySelector(".modal-content h1").textContent=title.textContent
        const chef=card.querySelector("p")
        modalOverlay.querySelector(".modal-content p").textContent=chef.textContent
    })
}


document.querySelector('.close-modal').addEventListener('click', function(){
    modalOverlay.classList.remove('active')
})

    