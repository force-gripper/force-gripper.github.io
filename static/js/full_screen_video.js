document.addEventListener('DOMContentLoaded', function () {
    const videoElement = document.getElementById('bg-video');

    if (videoElement) {
        // When the video metadata is loaded
        videoElement.addEventListener('loadedmetadata', function () {
            // Gradually fade in the video after it finishes loading
            videoElement.style.opacity = 1.0;
        });
    }
});
