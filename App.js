import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { useState } from 'react';
import Selector from './src/components/Selector';
import ElementLlista from './src/components/ElementLlista';
import { getProfes } from './utils/funcions';

const App = () => {
  const [selectedCicle, setSelectedCicle] = useState('DAM');
  const [selectedCurs, setSelectedCurs] = useState('1r');

  const info = require('./utils/dades.json');
  const unitatTics = info.unitatTics;
  const data = getProfes(unitatTics, selectedCicle, selectedCurs);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contSel}>
        <Text style={styles.contSelTxt}>Cicles: </Text>
        <Selector options={["DAM", "DAW", "ASIR"]} value={selectedCicle} onValueChange={setSelectedCicle}/>
      </View>
      <View style={styles.contSel}>
        <Text style={styles.contSelTxt}>Curs: </Text>
        <Selector options={["1r", "2n"]} value={selectedCurs} onValueChange={setSelectedCurs}/>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        style={{padding: 5}}
        renderItem={(item) => {
          return (
            <ElementLlista elem={item.item}/>
          )
        }}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center'
  },
  contSel: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    marginBottom: 10
  },
  contSelTxt: {
    width: 100,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center'
  }
})

export default App;