
function background() {
    const thumbnailImages = document.querySelectorAll('.thumbnails img');

    thumbnailImages.forEach(img => {
        img.addEventListener('click', function(event) {
            const selectedImg = event.target;
            thumbnailImages.forEach(img => img.style.borderColor = 'black');
            selectedImg.style.borderColor = 'red';
            console.log(selectedImg)
        })
    })
}

