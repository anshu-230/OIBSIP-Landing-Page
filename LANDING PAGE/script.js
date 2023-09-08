document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Basic form validation
        if (!nameInput.value || !emailInput.value || !messageInput.value) {
            alert('Please fill in all fields.');
            return;
        }

        // You can add code here to handle form submission, like sending data to a server.

        alert('Form submitted successfully!');
        contactForm.reset();
    });

    // Initialize Google Maps
function initMap() {
    // Specify the initial coordinates (you can adjust this)
    var initialLocation = { lat: 40.7128, lng: -74.0060 }; // Example: New York City

    // Create a map object and specify the DOM element to display it
    var map = new google.maps.Map(document.getElementById('map'), {
        center: initialLocation,
        zoom: 10 // Adjust the initial zoom level
    });

    // Define an array of Burger King locations (you can add more)
    var burgerKingLocations = [
        { lat: 40.7128, lng: -74.0060, name: 'Burger King NYC' },
        // Add more locations here
    ];

    // Loop through the locations and create markers on the map
    for (var i = 0; i < burgerKingLocations.length; i++) {
        var location = burgerKingLocations[i];
        var marker = new google.maps.Marker({
            position: { lat: location.lat, lng: location.lng },
            map: map,
            title: location.name
        });
    }
}

// You need to include the Google Maps API script in your HTML file.
// Add this line just before your existing script tag.



});


