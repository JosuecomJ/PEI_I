//Incorporando Mapa
const map = L.map('map').setView([-18.7477632,-39.7605796], 14);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 22,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let marcacaoAtual = null;

// Ativando o botando e o input
document.getElementById('searchBtn').addEventListener('click', async () => {
    const query = document.getElementById('searchInput').value.trim();
    if(!query) return; 
    
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}`;
    try {
        const response = await fetch(url);
        const results = await response.json();

        if(results.length > 0){
            const { lat, lon, display_name } = results[0];

            if(marcacaoAtual) {
                map.removeLayer(marcacaoAtual);
            }
            marcacaoAtual = L.marker([lat, lon]).addTo(map)
                .bindPopup(display_name)
                .openPopup();

            map.setView([lat, lon], 12);
        }else {
            alert('Nenhum local encontrado');
        }
    }catch(error){
        console.error('Ocorreu um erro ao buscar um local:', error);
        alert('Ocorreu um erro ao buscar um local.');
    }
    
});


//Usando Enter...
document.getElementById('searchInput').addEventListener('keydown', function(e){
    if(e.key === 'Enter'){
        document.getElementById('searchBtn').click();

    }


});