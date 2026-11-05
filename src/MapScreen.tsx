import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Ionicons } from '@expo/vector-icons';

export default function MapScreen({ setPage }: { setPage: (page: string) => void }) {
  // Алматы қаласының орталық координаталары
  const almatyRegion = {
    latitude: 43.238949,
    longitude: 76.889709,
    latitudeDelta: 0.03,
    longitudeDelta: 0.03,
  };

  // Имитациялық самокаттардың координаталары (Маркерлер)
  const scooters = [
    { id: 1, latitude: 43.242, longitude: 76.892, title: 'Whoosh №412', battery: '85%' },
    { id: 2, latitude: 43.235, longitude: 76.881, title: 'Whoosh №589', battery: '90%' },
    { id: 3, latitude: 43.245, longitude: 76.885, title: 'Whoosh №102', battery: '45%' },
  ];

  return (
    <View style={styles.container}>
      {/* НАҒЫЗ ИНТЕРАКТИВТІ КАРТА */}
      <MapView style={styles.map} initialRegion={almatyRegion} customMapStyle={darkMapStyle}>
        {scooters.map((scooter) => (
          <Marker
            key={scooter.id}
            coordinate={{ latitude: scooter.latitude, longitude: scooter.longitude }}
            title={scooter.title}
            description={`Заряд: ${scooter.battery}`}
          >
            {/* Сары түсті самокат маркері */}
            <View style={styles.scooterMarker}>
              <Ionicons name="bicycle" size={16} color="#000" />
            </View>
          </Marker>
        ))}
      </MapView>

      {/* ТӨМЕНГІ АҚПАРАТТЫҚ ПАНЕЛЬ */}
      <View style={styles.bottomPanel}>
        <Text style={styles.panelTitle}>Поиск самокатов</Text>
        <Text style={styles.panelDesc}>В г. Алматы жақын маңда 12 самокат дайын тұр.</Text>
        
        <TouchableOpacity style={styles.backButton} onPress={() => setPage('home')}>
          <Text style={styles.backButtonText}>Назад на главную</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Картаны заманауи қара түске (Whoosh стиліне) келтіру баптаулары
const darkMapStyle = [
  { "elementType": "geometry", "stylers": [{ "color": "#212121" }] },
  { "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] },
  { "elementType": "labels.text.fill", "stylers": [{ "color": "#757575" }] },
  { "elementType": "labels.text.stroke", "stylers": [{ "color": "#212121" }] }
];

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#181818' },
  map: { flex: 1 },
  scooterMarker: {
    backgroundColor: '#FFE600',
    padding: 8,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 4
  },
  bottomPanel: { 
    position: 'absolute', 
    bottom: 0, 
    left: 0, 
    right: 0, 
    backgroundColor: '#181818', 
    padding: 24, 
    borderTopLeftRadius: 24, 
    borderTopRightRadius: 24,
    borderWidth: 1,
    borderColor: '#2D2D2D'
  },
  panelTitle: { color: '#FFF', fontSize: 20, fontWeight: 'bold', marginBottom: 4 },
  panelDesc: { color: '#AAA', fontSize: 14, marginBottom: 20 },
  backButton: { backgroundColor: '#FFE600', paddingVertical: 14, borderRadius: 14, alignItems: 'center' },
  backButtonText: { color: '#000', fontSize: 16, fontWeight: 'bold' },
});