// Highlight Active Selection
document.addEventListener('DOMContentLoaded', function() {
    // Select all profile elements
    const profiles = document.querySelectorAll('.profile');

    // Add mouseenter event listener to each profile element
    profiles.forEach(profile => {
        profile.addEventListener('mouseenter', function() {
            // Add active class to the hovered profile
            profile.classList.add('active');

            // Remove active class from other profiles
            profiles.forEach(p => {
                if (p !== profile) {
                    p.classList.remove('active');
                }
            });
        });

        // Add mouseleave event listener to each profile element
        profile.addEventListener('mouseleave', function() {
            // Remove active class when mouse leaves the profile
            profile.classList.remove('active');
        });
    });
});

// Lazy Loading Images
// document.addEventListener("DOMContentLoaded", function() {
//     const lazyImages = document.querySelectorAll("img[loading='lazy']");
//     lazyImages.forEach(img => {
//         if (img.complete) {
//             if (img.naturalHeight === 0) {
//                 img.setAttribute('loading', 'eager');
//             }
//         }
//     });
// });
document.addEventListener('DOMContentLoaded', function() {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    lazyImages.forEach(img => {
        img.addEventListener('load', function() {
            img.src = img.getAttribute('data-src');
        });
    });
});
