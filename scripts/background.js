
function background() {
    const thumbnailImages = [...document.querySelectorAll('.thumbnails img')];
    const confirmBackground = document.getElementById('confirm-background');
    
    thumbnailImages.forEach(img => {

            img.addEventListener('click', function(event) {
                const selectedImg = event.target;
                thumbnailImages.forEach(img => img.style.borderColor = 'black');
                selectedImg.style.borderColor = 'red';
                desktop.style.backgroundImage = `url(./assets/backgrounds/${selectedImg.id}.jpg)`
            })
    })
    
    confirmBackground.addEventListener('click', closeApp)
}

