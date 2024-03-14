import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>E.T. Bilu</Text>
      <br></br>
      <Text>Desenvolvimento de Dispositivos Móveis - 22/02/24</Text>
      <br></br>
      <Text>Desenvolvimento de Dispositivos Móveis - 29/02/24</Text>
      <br></br>
      <Text>Desenvolvimento de Dispositivos Móveis - 14/03/24</Text>
      <br></br>
      <Button title = 'Salvar'></Button>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
