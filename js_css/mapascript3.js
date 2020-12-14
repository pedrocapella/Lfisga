
// Create variable to hold map element, give initial settings to map
var map = L.map('mapa',{ center: [41.0501354499781, -8.434293459256834], zoom: 16, zoomControl: false  });


// Add OpenStreetMap tile layer to map element

// Setup the mouse coordinate display
var coordDIV = document.createElement('div');
    coordDIV.id = 'mapaCoordDIV';
    coordDIV.style.position = 'absolute';
    coordDIV.style.bottom = '20px';
    coordDIV.style.left = '1366px';
    coordDIV.style.zIndex = '900';
    coordDIV.style.color = 'black';
    coordDIV.style.fontFamily = 'calibri';
    coordDIV.style.fontSize = '10pt';
    coordDIV.style.backgroundColor = 'white';
    coordDIV.style.opacity = '0.6';


    document.getElementById('mapa').appendChild(coordDIV);

    // Setup the event to capture and display mouse movements
    map.on('mousemove', function(e){
        var lat = e.latlng.lat.toFixed(3);
        var lon = e.latlng.lng.toFixed(3);
        document.getElementById('mapaCoordDIV').innerHTML = 'Coordinates: ' + lat + ' , ' + lon;
        });

//L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', { attribution: '©️OpenStreetMap' }).addTo(map);
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', { attribution:'©️ESRI_Imaginary' }
).addTo(map);

    




//Base maps
var Imaginary= L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',{ attribution:'<a href="https://www.esri.com/en-us/home"</a>©️ESRI_Imaginary' });

var OpenStreet = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {attribution:'<a href="https://www.openstreetmap.org/#map=17/-21.00148/-44.99806"</a>©️OpenStreetMap'});

//  var TopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {attribution:'OpenTopoMap'});

//Create Icons
var poco_Icon = L.icon({
    iconUrl: 'icons/well.png',
    iconSize:     [20, 20], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    fillOpacity: 0.6,
});

var anexo_Icon = L.icon({
    iconUrl: 'icons/warehouse.png',
    iconSize:     [20, 20], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
});

var farm_Icon = L.icon({
    iconUrl: 'icons/farm.png',
    iconSize:     [20, 20], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
});

var corn_Icon = L.icon({
    iconUrl: 'icons/corn.png',
    iconSize:     [20, 20], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
});

var house_Icon = L.icon({
    iconUrl: 'icons/house.png',
    iconSize:     [20, 20], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
});

var sewer_Icon = L.icon({
    iconUrl: 'icons/sewer.png',
    iconSize:     [20, 20], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
});

var recreation_Icon = L.icon({
    iconUrl: 'icons/recreation.png',
    iconSize:     [20, 20], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
});

var gate_Icon = L.icon({
    iconUrl: 'icons/gate.png',
    iconSize:     [20, 20], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
});


var noth_Icon = L.icon({
    iconUrl: 'icons/north.png',
    iconSize:     [20, 20], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
});


// Create an Empty Popup
var popup = L.popup();

// Write function to set Properties of the Popup
function onMapClick(e) { 
    popup
    .setLatLng(e.latlng)
    .setContent("You clicked the map at " + e.latlng.toString()) 
    .openOn(map);
}

// Definir variáveis para os arquivos GeoJSON
var anexos_fisga= L.geoJSON(anexosz,
    {pointToLayer:fisga_anexos});

    function fisga_anexos(geoJSON, latlng){
        var att=geoJSON.properties;
        return L.marker(latlng,{radius:4, icon:anexo_Icon}).bindPopup( "<h5>Item: "+att.Item+"</h5><h5>Especificação: "+att.Especificação+"</h5><h5> Estado de conservação: "+att.Conserv+"</h5><h5>Localização: "+att.Local+"</h5>");
    };

var pocos_fisga= L.geoJSON(pocosz,
{pointToLayer:fisga_pocos});

function fisga_pocos(geoJSON, latlng){
    var att=geoJSON.properties;
    return L.marker(latlng,{radius:4, icon:poco_Icon}).bindPopup( "<h5>Item: "+att.Item+"</h5><h5>Especificação: "+att.Especificação+"</h5><h5> Estado de conservação: "+att.Conserv+"</h5><h5>Localização: "+att.Local+"</h5>");
};

var camposcultivo_fisga= L.geoJSON(camposz,
{pointToLayer:fisga_camposcultivo});

function fisga_camposcultivo(geoJSON, latlng){
    var att=geoJSON.properties;
    return L.marker(latlng,{radius:4, icon:farm_Icon}).bindPopup( "<h5>Item: "+att.Item+"</h5><h5>Especificação: "+att.Especificação+"</h5><h5> Estado de conservação: "+att.Conserv+"</h5><h5>Localização: "+att.Local+"</h5>");
};

var canastros_fisga= L.geoJSON(canastrosz,
{pointToLayer:fisga_canastros});

function fisga_canastros(geoJSON, latlng){
    var att=geoJSON.properties;
    return L.marker(latlng,{radius:4, icon:corn_Icon}).bindPopup( "<h5>Item: "+att.Item+"</h5><h5>Especificação: "+att.Especificação+"</h5><h5> Estado de conservação: "+att.Conserv+"</h5><h5>Localização: "+att.Local+"</h5>");
};

var casas_fisga= L.geoJSON(casasz,
    {pointToLayer:fisga_casas});
    
    function fisga_casas(geoJSON, latlng){
        var att=geoJSON.properties;
        return L.marker(latlng,{radius:4, icon:house_Icon}).bindPopup( "<h5>Item: "+att.Item+"</h5><h5>Especificação: "+att.Especificação+"</h5><h5> Estado de conservação: "+att.Conserv+"</h5><h5>Localização: "+att.Local+"</h5>");
    };

var porteiras_fisga= L.geoJSON(porteirasz,
    {pointToLayer:fisga_porteiras});
    
    function fisga_porteiras(geoJSON, latlng){
        var att=geoJSON.properties;
        return L.marker(latlng,{radius:4, icon:gate_Icon}).bindPopup( "<h5>Item: "+att.Item+"</h5><h5>Especificação: "+att.Especificação+"</h5><h5> Estado de conservação: "+att.Conserv+"</h5><h5>Localização: "+att.Local+"</h5>");
    };

var limites_fisga = L.geoJSON(limitesz,{fillColor:"red",fillOpacity:0.30,color:"red",weight: 2,
    onEachFeature: function (feature, layer) { 
        let nomef = feature.properties.Nome;
        let haf = feature.properties.Area_Ha;
        let perf = feature.properties.Perímetro;
        layer.bindPopup('<h5>Terreno: ' + nomef + '</h5> <h5>Área em Ha: ' + haf + '</h5> <h5>Perimetro (m): '+perf+'</h5>' ); 
    //layer.on ('mouseover', function () {layer.openPopup();})
    }})
    //.addTo(map)
    ;    

var agro_fisga = L.geoJSON(agroflorestaz,{fillColor:"green",fillOpacity:0.30,color:"green",weight: 2,
    onEachFeature: function (feature, layer) { 
        let agro_fisga_ha = feature.properties.AreaHa;
        let agro_fisga_per = feature.properties.Perimetro;
        layer.bindPopup('<h5>Área em Ha: ' + agro_fisga_ha + '</h5> <h5>Perimetro (m): '+agro_fisga_per+'</h5>' ); 
    //layer.on ('mouseover', function () {layer.openPopup();})
    }})
    //.addTo(map)
    ;  

var eucaliptal_fisga = L.geoJSON(eucaliptalz,{fillColor:"green",fillOpacity:0.30,color:"green",weight: 2,
    onEachFeature: function (feature, layer) { 
        let eucaliptal_fisga_ha = feature.properties.Area_Ha;
        let eucaliptal_fisga_per = feature.properties.Perímetro;
        layer.bindPopup('<h5>Área em Ha: ' + eucaliptal_fisga_ha + '</h5> <h5>Perimetro (m): '+eucaliptal_fisga_per+'</h5>' ); 
    }});
    
var propextras_fisga = L.geoJSON(prop_extasz,{fillColor:"green",fillOpacity:0.30,color:"green",weight: 2,
    onEachFeature: function (feature, layer) { 
        let propextras_fisga_ha = feature.properties.Area_Ha;
        let propextras_fisga_per = feature.properties.Perímetro;
        layer.bindPopup('<h5>Área em Ha: ' + propextras_fisga_ha + '</h5> <h5>Perimetro (m): '+propextras_fisga_per+'</h5>' ); 
    }});

var galpao_compostagem_fisga = L.geoJSON(galpao_compostagemz,{fillColor:"green",fillOpacity:0.30,color:"green",weight: 2,
    onEachFeature: function (feature, layer) { 
        let compostagem_fisga_m2 = feature.properties.Area_M2;
        let compostagem_fisga_per = feature.properties.Perímetro;
        layer.bindPopup('<h5>Área em Ha: ' + compostagem_fisga_m2 + '</h5> <h5>Perimetro (m): '+compostagem_fisga_per+'</h5>' ); 
    }});


var north = L.control({position: "topleft"});
    north.onAdd = function(map) {
        var div = L.DomUtil.create("div", "info legend");
        div.innerHTML = '<img src="icons/north.png">';
        return div;
}
    north.addTo(map);

//Controle de Layers

var baselayers = {
    'Imaginary': Imaginary,
    'OpenStreetMap':OpenStreet,
    
};

//LAYERS
var layers = {
    'Lavouras da Fisga': limites_fisga,
    'Casas' : casas_fisga,
    'Anexos': anexos_fisga,
    "Poços d'água": pocos_fisga,
    'Campos de cultivo': camposcultivo_fisga,
    'Canastros': canastros_fisga,
    'Porteiras' : porteiras_fisga,
    'Agrofloresta': agro_fisga,
    'Galpão de compostagem' : galpao_compostagem_fisga,
    'Inventariar' : propextras_fisga,
    'Eucaliptal' : eucaliptal_fisga,
    
    
    
};

        L.control.layers(baselayers, layers).addTo(map);

        var zoom_bar = new L.Control.ZoomBar({position: 'topleft'}).addTo(map);
        
        //SCALE
        L.control.scale().addTo(map);
     
