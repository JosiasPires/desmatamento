new Glide('.glide').mount(); // Carrossel

let map = L.map('map').setView([-10.8,-51.3], 4);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 14,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const lugares = [
    {latitude: -4.730, longitude: -62.946, name: 'Amazônia'},
    {latitude: -7.2360, longitude: -39.4150, name: 'Crato'}
]

lugares.forEach(lugar => {
    let circle = L.circle([lugar.latitude, lugar.longitude], {
        name: lugar.name,
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 10**5
    }).addTo(map);

    circle.on('click', () => alert(`Você clicou em ${circle.options.name}`));
})

