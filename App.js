import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.font}>數位二甲 111119018</Text>
      <Text style={styles.font}>許瑞平</Text>

    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#84C1FF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  font:{
  fontSize:36
}
});
