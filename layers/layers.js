var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_adm_cimahi2008_1 = new ol.format.GeoJSON();
var features_adm_cimahi2008_1 = format_adm_cimahi2008_1.readFeatures(json_adm_cimahi2008_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_adm_cimahi2008_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_adm_cimahi2008_1.addFeatures(features_adm_cimahi2008_1);
var lyr_adm_cimahi2008_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_adm_cimahi2008_1, 
                style: style_adm_cimahi2008_1,
                popuplayertitle: "adm_cimahi2008",
                interactive: true,
                title: '<img src="styles/legend/adm_cimahi2008_1.png" /> adm_cimahi2008'
            });
var format_Dissolved_2 = new ol.format.GeoJSON();
var features_Dissolved_2 = format_Dissolved_2.readFeatures(json_Dissolved_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dissolved_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dissolved_2.addFeatures(features_Dissolved_2);
var lyr_Dissolved_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Dissolved_2, 
                style: style_Dissolved_2,
                popuplayertitle: "Dissolved",
                interactive: true,
                title: '<img src="styles/legend/Dissolved_2.png" /> Dissolved'
            });
var format_adm_cimahi_selek_3 = new ol.format.GeoJSON();
var features_adm_cimahi_selek_3 = format_adm_cimahi_selek_3.readFeatures(json_adm_cimahi_selek_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_adm_cimahi_selek_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_adm_cimahi_selek_3.addFeatures(features_adm_cimahi_selek_3);
var lyr_adm_cimahi_selek_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_adm_cimahi_selek_3, 
                style: style_adm_cimahi_selek_3,
                popuplayertitle: "adm_cimahi_selek",
                interactive: true,
                title: '<img src="styles/legend/adm_cimahi_selek_3.png" /> adm_cimahi_selek'
            });
var format_SUNGAI_LN_25K_4 = new ol.format.GeoJSON();
var features_SUNGAI_LN_25K_4 = format_SUNGAI_LN_25K_4.readFeatures(json_SUNGAI_LN_25K_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUNGAI_LN_25K_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAI_LN_25K_4.addFeatures(features_SUNGAI_LN_25K_4);
var lyr_SUNGAI_LN_25K_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUNGAI_LN_25K_4, 
                style: style_SUNGAI_LN_25K_4,
                popuplayertitle: "SUNGAI_LN_25K",
                interactive: true,
                title: '<img src="styles/legend/SUNGAI_LN_25K_4.png" /> SUNGAI_LN_25K'
            });
var format_JALAN_LN_25K_5 = new ol.format.GeoJSON();
var features_JALAN_LN_25K_5 = format_JALAN_LN_25K_5.readFeatures(json_JALAN_LN_25K_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALAN_LN_25K_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_LN_25K_5.addFeatures(features_JALAN_LN_25K_5);
var lyr_JALAN_LN_25K_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JALAN_LN_25K_5, 
                style: style_JALAN_LN_25K_5,
                popuplayertitle: "JALAN_LN_25K",
                interactive: true,
                title: '<img src="styles/legend/JALAN_LN_25K_5.png" /> JALAN_LN_25K'
            });
var format_Buffered_6 = new ol.format.GeoJSON();
var features_Buffered_6 = format_Buffered_6.readFeatures(json_Buffered_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buffered_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffered_6.addFeatures(features_Buffered_6);
var lyr_Buffered_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buffered_6, 
                style: style_Buffered_6,
                popuplayertitle: "Buffered",
                interactive: true,
                title: '<img src="styles/legend/Buffered_6.png" /> Buffered'
            });
var format_UTMvektoraedes_7 = new ol.format.GeoJSON();
var features_UTMvektoraedes_7 = format_UTMvektoraedes_7.readFeatures(json_UTMvektoraedes_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UTMvektoraedes_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UTMvektoraedes_7.addFeatures(features_UTMvektoraedes_7);
var lyr_UTMvektoraedes_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UTMvektoraedes_7, 
                style: style_UTMvektoraedes_7,
                popuplayertitle: "UTM vektor aedes",
                interactive: true,
                title: '<img src="styles/legend/UTMvektoraedes_7.png" /> UTM vektor aedes'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_adm_cimahi2008_1.setVisible(true);lyr_Dissolved_2.setVisible(true);lyr_adm_cimahi_selek_3.setVisible(true);lyr_SUNGAI_LN_25K_4.setVisible(true);lyr_JALAN_LN_25K_5.setVisible(true);lyr_Buffered_6.setVisible(true);lyr_UTMvektoraedes_7.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_adm_cimahi2008_1,lyr_Dissolved_2,lyr_adm_cimahi_selek_3,lyr_SUNGAI_LN_25K_4,lyr_JALAN_LN_25K_5,lyr_Buffered_6,lyr_UTMvektoraedes_7];
lyr_adm_cimahi2008_1.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'CIMAHI_ADM': 'CIMAHI_ADM', 'CIMAHI_A_1': 'CIMAHI_A_1', 'KECAMATAN': 'KECAMATAN', 'KELURAHAN': 'KELURAHAN', 'RW': 'RW', 'RT': 'RT', });
lyr_Dissolved_2.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'CIMAHI_ADM': 'CIMAHI_ADM', 'CIMAHI_A_1': 'CIMAHI_A_1', 'KECAMATAN': 'KECAMATAN', 'KELURAHAN': 'KELURAHAN', 'RW': 'RW', 'RT': 'RT', });
lyr_adm_cimahi_selek_3.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'CIMAHI_ADM': 'CIMAHI_ADM', 'CIMAHI_A_1': 'CIMAHI_A_1', 'KECAMATAN': 'KECAMATAN', 'KELURAHAN': 'KELURAHAN', 'RW': 'RW', 'RT': 'RT', });
lyr_SUNGAI_LN_25K_4.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_JALAN_LN_25K_5.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Buffered_6.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_UTMvektoraedes_7.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_adm_cimahi2008_1.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'CIMAHI_ADM': 'TextEdit', 'CIMAHI_A_1': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KELURAHAN': 'TextEdit', 'RW': 'TextEdit', 'RT': 'TextEdit', });
lyr_Dissolved_2.set('fieldImages', {'AREA': '', 'PERIMETER': '', 'CIMAHI_ADM': '', 'CIMAHI_A_1': '', 'KECAMATAN': '', 'KELURAHAN': '', 'RW': '', 'RT': '', });
lyr_adm_cimahi_selek_3.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'CIMAHI_ADM': 'TextEdit', 'CIMAHI_A_1': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KELURAHAN': 'TextEdit', 'RW': 'TextEdit', 'RT': 'TextEdit', });
lyr_SUNGAI_LN_25K_4.set('fieldImages', {'NAMOBJ': 'TextEdit', 'TIPSNG': 'Range', 'KLSSNG': 'Range', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'STATUS': 'TextEdit', 'WMAX': 'TextEdit', 'DBTMAX': 'TextEdit', 'SLPRT': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_JALAN_LN_25K_5.set('fieldImages', {'NAMRJL': 'TextEdit', 'KONRJL': 'Range', 'MATRJL': 'Range', 'FGSRJL': 'Range', 'UTKRJL': 'Range', 'TOLRJL': 'Range', 'WLYRJL': 'Range', 'AUTRJL': 'Range', 'KLSRJL': 'Range', 'SPCRJL': 'Range', 'JPARJL': 'Range', 'ARHRJL': 'Range', 'STARJL': 'Range', 'KLLRJL': 'TextEdit', 'MEDRJL': 'Range', 'LOCRJL': 'Range', 'JARRJL': 'Range', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_Buffered_6.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_UTMvektoraedes_7.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_adm_cimahi2008_1.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'CIMAHI_ADM': 'no label', 'CIMAHI_A_1': 'no label', 'KECAMATAN': 'no label', 'KELURAHAN': 'no label', 'RW': 'no label', 'RT': 'no label', });
lyr_Dissolved_2.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'CIMAHI_ADM': 'no label', 'CIMAHI_A_1': 'no label', 'KECAMATAN': 'no label', 'KELURAHAN': 'no label', 'RW': 'no label', 'RT': 'no label', });
lyr_adm_cimahi_selek_3.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'CIMAHI_ADM': 'no label', 'CIMAHI_A_1': 'no label', 'KECAMATAN': 'no label', 'KELURAHAN': 'no label', 'RW': 'no label', 'RT': 'no label', });
lyr_SUNGAI_LN_25K_4.set('fieldLabels', {'NAMOBJ': 'no label', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_Leng': 'no label', });
lyr_JALAN_LN_25K_5.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_Buffered_6.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_UTMvektoraedes_7.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_UTMvektoraedes_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});