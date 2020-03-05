
function background() {
    const thumbnailImages = [...document.querySelectorAll('.thumbnails img')];
    const confirmBackground = document.getElementById('confirm-background');
    
    thumbnailImages.forEach(img => {

            img.addEventListener('click', function(event) {
                const selectedImg = event.target;
                thumbnailImages.forEach(img => img.style.borderColor = 'black');
                selectedImg.style.borderColor = 'red';

                // Set background using id:
                desktop.style.backgroundImage = `url(./assets/backgrounds/${selectedImg.id}.jpg)`;

                // Store image id in Session Storage
                sessionStorage.setItem('background', JSON.stringify(selectedImg.id));
                
            })
    })
    
    confirmBackground.addEventListener('click', closeApp)
}

