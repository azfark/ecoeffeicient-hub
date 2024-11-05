// Smooth scroll to sections
function initMap() {
    const map = new google.maps.Map(document.getElementById("recycling-map"), {
        zoom: 12,
        center: { lat: 40.7128, lng: -74.0060 }, // Example coordinates (New York City)
    });

    // Sample recycling center locations
    const locations = [
        { lat: 40.73061, lng: -73.935242, name: "Recycling Center A" },
        { lat: 40.712776, lng: -74.005974, name: "Recycling Center B" },
    ];

    // Add markers
    locations.forEach(location => {
        new google.maps.Marker({
            position: { lat: location.lat, lng: location.lng },
            map,
            title: location.name,
        });
    });
}
function schedulePickup() {
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const date = document.getElementById('date').value;

    if (!name || !address || !date) {
        alert('Please fill out all fields.');
        return;
    }

    // Display confirmation message
    document.getElementById('confirmation-details').textContent = `Thank you, ${name}! Your e-waste pickup has been scheduled for ${date} at ${address}.`;
    document.getElementById('pickup-confirmation').style.display = 'block';
}


function calculateFootprint() {
    const deviceCount = parseInt(document.getElementById('device-count').value);
    const averageUse = parseFloat(document.getElementById('average-use').value);
    const upgradeFrequency = parseFloat(document.getElementById('upgrade-frequency').value);

    if (isNaN(deviceCount) || isNaN(averageUse) || isNaN(upgradeFrequency)) {
        alert('Please fill out all fields with valid numbers.');
        return;
    }

    // Sample calculation logic
    const footprint = (deviceCount * averageUse * 365) / upgradeFrequency;
    document.getElementById('footprint-result').textContent = `Your estimated e-waste footprint is ${footprint.toFixed(2)} kg/year.`;

    // Display the result
    document.getElementById('calculator-result').style.display = 'block';
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
