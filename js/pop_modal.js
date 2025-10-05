let currentImageIndex = 0; // Keeps track of the current image index
let certificateImagesArray = []; // Stores images to navigate between them
let certificateData = {}; // Stores both images and their corresponding URLs

function showCertificates(certType) {
    // Clear any existing data
    certificateImagesArray = [];
    certificateData = {};

    // Set images and URLs based on the certificate type
    if (certType === 'udemy') {
        certificateData = {
            'images/UC-Certificate-1.jpg': '#',
            'images/UC-Certificate-2.jpg': '#'
        };
    }
    if (certType === 'ine') {
        certificateData = {
            'images/INE_eJPT.png': 'https://certs.ine.com/1b352afe-b2f5-467b-aeff-856059b076ef#acc.9KQkGInY'
        };
    }
    if (certType === 'google') {
        certificateData = {
            'images/google-cloud-cybersecurity-certificate.png': 'https://www.credly.com/badges/3059fac1-74da-4edc-98aa-0d6eca5aabb3',
            'images/google-cloud-computing-foundations-certificate.png': 'https://www.credly.com/badges/e1dbe918-ac1b-4f94-9158-1e0a77085186',
            'images/Secure_Google_Cloud_Network.png': 'https://www.credly.com/badges/8f6bf3d6-ad6a-4bb2-8ba7-b0d66c02dcfd',
            'images/Load_Balancing_on_Compute_Engine.png': 'https://www.credly.com/badges/ef7da482-b726-4da2-8d99-d449d31f87a0',
            'images/Data_for_ML_APIs.png': 'https://www.credly.com/badges/0ef711ff-1694-438c-ac4d-5685dc5b090b',
            'images/App_Dev_Environment.png': 'https://www.credly.com/badges/d0788f9b-4949-48c2-977b-9f87aac9289a'
        };
    }
    if (certType === 'THM') {
        certificateData = {
            'images/THM-EKDTPXQSPM.png': 'https://tryhackme.com/p/SdkSdk'
        };
    }
    if (certType === 'HTB') {
        certificateData = {
            'images/CYBAPO2025.png': 'https://app.hackthebox.com/profile/1792053'
        };
    }

    // Convert certificateData keys to array for navigation
    certificateImagesArray = Object.keys(certificateData);

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
    // Get the current image path
    const currentImage = certificateImagesArray[currentImageIndex];
    
    // Update the image source
    const imgElement = document.getElementById('certificate-image');
    imgElement.src = currentImage;
    
    // Update the link
    const linkContainer = document.getElementById('certificate-link');
    if (linkContainer) {
        linkContainer.href = certificateData[currentImage];
        // Asegurarse de que el enlace sea clickeable
        linkContainer.onclick = function(event) {
            event.stopPropagation(); // Evitar que el modal intercepte el clic
            window.open(certificateData[currentImage], '_blank', 'noopener,noreferrer');
        };
    }
}

// Evitar que el clic en el modal cierre cuando se hace clic en el enlace o la imagen
document.querySelector('.certificate-images').addEventListener('click', function(event) {
    event.stopPropagation();
});

