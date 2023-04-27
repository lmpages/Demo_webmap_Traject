var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 0.750000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Fietsnetwerk_1 = new ol.format.GeoJSON();
var features_Fietsnetwerk_1 = format_Fietsnetwerk_1.readFeatures(json_Fietsnetwerk_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fietsnetwerk_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fietsnetwerk_1.addFeatures(features_Fietsnetwerk_1);
var lyr_Fietsnetwerk_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Fietsnetwerk_1, 
                style: style_Fietsnetwerk_1,
                interactive: true,
    title: 'Fietsnetwerk<br />\
    <img src="styles/legend/Fietsnetwerk_1_0.png" /> fietssnelweg<br />\
    <img src="styles/legend/Fietsnetwerk_1_1.png" /> functionele fietsroute<br />\
    <img src="styles/legend/Fietsnetwerk_1_2.png" /> alternatieve functionele fietsroute<br />\
    <img src="styles/legend/Fietsnetwerk_1_3.png" /> hoofdroute<br />'
        });
var format_Carpoolparkings_2 = new ol.format.GeoJSON();
var features_Carpoolparkings_2 = format_Carpoolparkings_2.readFeatures(json_Carpoolparkings_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Carpoolparkings_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Carpoolparkings_2.addFeatures(features_Carpoolparkings_2);
var lyr_Carpoolparkings_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Carpoolparkings_2, 
                style: style_Carpoolparkings_2,
                interactive: true,
                title: '<img src="styles/legend/Carpoolparkings_2.png" /> Carpoolparkings'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Fietsnetwerk_1.setVisible(true);lyr_Carpoolparkings_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Fietsnetwerk_1,lyr_Carpoolparkings_2];
lyr_Fietsnetwerk_1.set('fieldAliases', {'id': 'id', 'fietsroute': 'fietsroute', });
lyr_Carpoolparkings_2.set('fieldAliases', {'Plaatsen v': 'Plaatsen v', 'Plaatsen m': 'Plaatsen m', 'locatie': 'locatie', 'benaming': 'benaming', 'fietsensta': 'fietsensta', 'opladen_el': 'opladen_el', 'halte OV a': 'halte OV a', });
lyr_Fietsnetwerk_1.set('fieldImages', {'id': 'TextEdit', 'fietsroute': 'TextEdit', });
lyr_Carpoolparkings_2.set('fieldImages', {'Plaatsen v': 'TextEdit', 'Plaatsen m': 'TextEdit', 'locatie': 'TextEdit', 'benaming': 'TextEdit', 'fietsensta': 'TextEdit', 'opladen_el': 'TextEdit', 'halte OV a': 'TextEdit', });
lyr_Fietsnetwerk_1.set('fieldLabels', {'id': 'inline label', 'fietsroute': 'inline label', });
lyr_Carpoolparkings_2.set('fieldLabels', {'Plaatsen v': 'inline label', 'Plaatsen m': 'inline label', 'locatie': 'inline label', 'benaming': 'inline label', 'fietsensta': 'inline label', 'opladen_el': 'inline label', 'halte OV a': 'inline label', });
lyr_Carpoolparkings_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});