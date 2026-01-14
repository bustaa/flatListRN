import { View, Text, StyleSheet, FlatList } from 'react-native';
import Selector from './src/components/Selector';

const App = () => {
  const info = require('./utils/dades.json');

  return (
    <View style={styles.container}>
      <View style={styles.contSel}>
        <Text style={styles.contSelTxt}>Cicles: </Text>
        <Selector options={["DAM", "DAW", "ASIR"]}/>
      </View>
      <View style={styles.contSel}>
        <Text style={styles.contSelTxt}>Curs: </Text>
        <Selector options={["1r", "2r"]}/>
      </View>
      <FlatList
        data={info}
        keyExtractor={(item, index) => index.toString()}
        style={{padding: 5}}
        renderItem={(item) => {
          return (
            <ElementLlista elem={item}/>
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  contSel: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center'
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