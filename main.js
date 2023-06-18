new Glide('.glide', {keyboard: false}).mount(); // Carrossel

let regiao = document.querySelector('.regiao');
let textoUm = document.querySelector('#textoUm');
let textoDois = document.querySelector('#textoDois');
let imagem = document.querySelector('#imagem');

let map = L.map('map');
map.on('load', () => {
    map.flyTo([-14.92,-51.59], 4)
});
map.setView([-14.92,-51.59], 1);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 14,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const lugares = [
    {
        latitude: -4.730,
        longitude: -62.946,
        name: 'Amazônia',
        textoUm: 'A Amazônia enfrenta um sério problema: o desmatamento. Atividades como exploração madeireira, agricultura e mineração ilegal têm causado um aumento preocupante na taxa de desmatamento. Isso tem impactos devastadores na biodiversidade e no equilíbrio ecológico, além de contribuir para as mudanças climáticas. É necessário combater o desmatamento por meio de políticas de conservação e práticas sustentáveis.',
        textoDois: 'A Amazônia é um tesouro natural com grande importância. Abrigando uma biodiversidade incrível, a floresta amazônica desempenha um papel fundamental na regulação climática global. Sua fauna diversa inclui espécies como a onça-pintada, o boto-cor-de-rosa e o tucano, enquanto a flora impressiona com suas árvores gigantes, plantas medicinais e variedade de frutas. Preservar a Amazônia é essencial para a saúde do planeta e das futuras gerações.'
    },
    {
        latitude: -7.2360,
        longitude: -39.4150,
        name: 'Crato',
        textoUm: 'Crato, no Ceará, é uma cidade abençoada com uma natureza exuberante. Rodeada por paisagens deslumbrantes, a região oferece aos visitantes a oportunidade de explorar belas áreas naturais. Uma das atrações imperdíveis é o Parque Estadual Sítio Fundão, onde é possível fazer trilhas em meio à vegetação nativa e apreciar cachoeiras de águas cristalinas.',
        textoDois: 'Outro local de destaque é a Serra do Araripe, uma formação rochosa que oferece uma vista panorâmica incrível da região. É um lugar perfeito para os amantes da natureza e para quem deseja fazer caminhadas e observar a fauna e a flora local. Além disso, a serra abriga o Geopark Araripe, que é reconhecido pela UNESCO como um importante geossítio.',
    }
]

selected = lugares[Math.floor(Math.random() * lugares.length)]
regiao.textContent = selected.name;
textoUm.textContent = selected.textoUm;
textoDois.textContent = selected.textoDois;
imagem.src = `${selected.name}.jpg`
circulos = [];

lugares.forEach(lugar => {
    let circle = L.circle([lugar.latitude, lugar.longitude], {
        name: lugar.name,
        textoUm: lugar.textoUm,
        textoDois: lugar.textoDois,
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.3,
        radius: 10**5,
        className: 'anim'
    }).addTo(map);

    circulos.push(circle);

    circle.on('click', () => {
        regiao.textContent = circle.options.name;
        textoUm.textContent = circle.options.textoUm;
        textoDois.textContent = circle.options.textoDois;
        imagem.src = `${circle.options.name}.jpg`;
        circle.setStyle({fillOpacity: 0.7})
    });
})

circulos.forEach(circulo => {
    circulo.addEventListener('click', () => {
        circulos.forEach(c => c.setStyle({fillOpacity: 0.3}))
        circulo.setStyle({fillOpacity: 0.7})
    })
})
