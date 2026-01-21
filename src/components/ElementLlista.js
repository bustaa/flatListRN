import { View, Text, StyleSheet } from 'react-native';

const ElementLlista = ({ elem }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{elem.nom}</Text>
      <Text style={styles.module}>{elem.modul} - {elem.nomCompletModul}</Text>
      <Text style={styles.hours}>Hores setmanals: {elem.horesSetmanals}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  module: {
    fontSize: 16,
  },
  hours: {
    fontSize: 14,
    color: '#666',
  }
});

export default ElementLlista;