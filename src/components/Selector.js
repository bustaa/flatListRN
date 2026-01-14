import { StyleSheet, SafeAreaView } from 'react-native';
import { useState, useEffect } from 'react';
import { SegmentedButtons } from 'react-native-paper';

const Selector = ({ options = [], props }) => {
  const [selectedOpt, setSelectedOpt] = useState('');

  useEffect(() => {
    props.tornarOpt({ opt: selectedOpt })
  }, [selectedOpt])

  return (
    <SafeAreaView style={styles.container}>
      <SegmentedButtons
        value={selectedOpt}
        onValueChange={setSelectedOpt}
        buttons={options.map((elem, index) => ({
          value: index,
          label: elem,
        }))}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
  }
})


export default Selector;
