//Incorporando Mapa
// Inicializa o mapa com uma localização padrão (Brasil - centro do país)
const map = L.map('map').setView([-14.2350, -51.9253], 4);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 22,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let marcacaoAtual = null;
let circuloPrecisao = null;

// Função para obter localização do usuário com alta precisão
function obterLocalizacaoUsuario() {
    if ("geolocation" in navigator) {
        // Solicita localização com alta precisão
        navigator.geolocation.getCurrentPosition(
            function(position) {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                const accuracy = position.coords.accuracy;
                
                console.log('Localização obtida:', lat, lon, 'Precisão:', accuracy + 'm');
                
                // Atualiza para a localização
                map.setView([lat, lon], 16);
                
                // Remove marcador e círculo anteriores
                if(marcacaoAtual) {
                    map.removeLayer(marcacaoAtual);
                }
                if(circuloPrecisao) {
                    map.removeLayer(circuloPrecisao);
                }
                
                // Cria texto de precisão
                const precisaoTexto = accuracy < 10 ? 'Excelente precisão' : 
                                     accuracy < 50 ? 'Boa precisão' : 
                                     accuracy < 100 ? 'Precisão média' : 'Baixa precisão';
                
                // Adiciona círculo mostrando a área de precisão
                circuloPrecisao = L.circle([lat, lon], {
                    color: '#28a745',
                    fillColor: '#28a745',
                    fillOpacity: 0.15,
                    radius: accuracy
                }).addTo(map)
                .bindPopup(`Sua região atual<br><small>${precisaoTexto} (±${Math.round(accuracy)}m)</small>`)
                .openPopup();
            },
            function(error) {
                console.warn('Erro ao obter localização:', error.message);
                
                // Mensagens de erro mais amigáveis
                switch(error.code) {
                    case error.PERMISSION_DENIED:
                        alert('Permissão de localização negada. Para melhor experiência, permita o acesso à localização.');
                        break;
                    case error.POSITION_UNAVAILABLE:
                        alert('Localização indisponível. Verifique se o GPS está ativado.');
                        break;
                    case error.TIMEOUT:
                        alert('Tempo limite para obter localização.');
                        break;
                    default:
                        alert('Erro desconhecido ao obter localização');
                        break;
                }
            },
            {
                enableHighAccuracy: true,
                timeout: 15000,
                maximumAge: 0
            }
        );
    } else {
        alert('Geolocalização não é suportada por este navegador');
    }
}

// Mapa carrega apenas com localização padrão (Brasil)
// Função será chamada apenas quando o usuário clicar no botão

// Adiciona evento para o botão de localização
document.getElementById('locationBtn').addEventListener('click', obterLocalizacaoUsuario);

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