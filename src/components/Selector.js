import { StyleSheet, SafeAreaView } from 'react-native';
import { SegmentedButtons } from 'react-native-paper';

const Selector = ({ options = [], value, onValueChange }) => {
  return (
    <SafeAreaView style={styles.container}>
      <SegmentedButtons
        value={value}
        onValueChange={onValueChange}
        buttons={options.map((elem) => ({
          value: elem,
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
