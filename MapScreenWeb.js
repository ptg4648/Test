import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

const MapScreenWeb = () => {
  const route = useRoute();
  const { hospitalName } = route.params;

  const mapUrl = `https://map.kakao.com/?q=${encodeURIComponent(hospitalName)}`;

  return (
    <View style={styles.container}>
      <iframe
        title="kakao-map"
        src={mapUrl}
        style={styles.map}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
    border: 'none',
  },
});

export default MapScreenWeb;
