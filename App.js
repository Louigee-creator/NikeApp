import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import ProductScreen from './src/screens/ProductScreen';
import ProductDetails from './src/screens/ProductDetails';
import Shopping from './src/screens/Shopping';


export default function App() {
  return (
    <View style={styles.container}>
      {/* <ProductScreen />  */}

      {/* <ProductDetails /> */}
      <Shopping />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
