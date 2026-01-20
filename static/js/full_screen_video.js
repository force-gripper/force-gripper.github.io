document.addEventListener('DOMContentLoaded', function () {
    const videoElement = document.getElementById('bg-video');

    if (videoElement) {
        // Array of video sources to cycle through
        const videoSources = [
            'static/videos/demo_individial_control.mp4',
            'static/videos/case_study_1.mp4',
            'static/videos/case_study_2.mp4'
        ];

        let currentVideoIndex = 0;

        // Function to change video source
        function changeVideo() {
            currentVideoIndex = (currentVideoIndex + 1) % videoSources.length;
            videoElement.src = videoSources[currentVideoIndex];
            videoElement.load();
            videoElement.play();
        }

        // Start with the first video
        videoElement.src = videoSources[currentVideoIndex];

        // When the video metadata is loaded
        videoElement.addEventListener('loadedmetadata', function () {
            // Gradually fade in the video after it finishes loading
            videoElement.style.opacity = 1.0;
        });

        // When current video ends, switch to next video
        videoElement.addEventListener('ended', function () {
            changeVideo();
        });

        // Handle video load errors
        videoElement.addEventListener('error', function() {
            console.log('Video load error, trying next video');
            changeVideo();
        });
    }
});
