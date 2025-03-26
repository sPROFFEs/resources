let currentImageIndex = 0; // Keeps track of the current image index
let certificateImagesArray = []; // Stores images to navigate between them

function showCertificates(certType) {
    // Clear any existing images
    certificateImagesArray = [];

    // Set images based on the certificate type
    if (certType === 'udemy') {
        certificateImagesArray = [
            'images/UC-Certificate-1.jpg',  
            'images/UC-Certificate-2.jpg',
        ];
    }
    if (certType === 'google') {
        certificateImagesArray = [
            'images/google-cloud-cybersecurity-certificate.png', 
            'images/google-cloud-computing-foundations-certificate.png',
        ];
    }
    if (certType === 'THM') {
        certificateImagesArray = [
            'images/THM-EKDTPXQSPM.png',
        ];
    }
    if (certType === 'HTB') {
        certificateImagesArray = [
            'images/CYBAPO2025.png',
        ];
    }

    // Show the first image
    currentImageIndex = 0;
    updateImage();

    // Display the modal
    document.getElementById('certificates-modal').style.display = "block";
}

function closeModal() {
    // Hide the modal
    document.getElementById('certificates-modal').style.display = "none";
}

function changeImage(direction) {
    // Update the image index based on the direction
    currentImageIndex += direction;

    // Loop back to the first or last image when reaching the end
    if (currentImageIndex < 0) {
        currentImageIndex = certificateImagesArray.length - 1;
    } else if (currentImageIndex >= certificateImagesArray.length) {
        currentImageIndex = 0;
    }

    // Update the image shown in the modal
    updateImage();
}

function updateImage() {
    // Get the image element and update the src
    const imageElement = document.getElementById('certificate-image');
    imageElement.src = certificateImagesArray[currentImageIndex]; // Set the new image source
}

