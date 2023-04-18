import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductScreen from './screens/ProductScreen';
import ProductDetails from './screens/ProductDetails';
import Shopping from './screens/Shopping';
import { FontAwesome } from '@expo/vector-icons';


const Stack = createNativeStackNavigator()

const Navigation = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Product"
        screenOptions={{contentStyle: {backgroundColor: 'white'}}}
    >
      <Stack.Screen 
      name="Product" 
      component={ProductScreen} 
      options={({navigation}) => ({
        headerRight: ()=> (
            <Pressable style={{
                flexDirection: 'row'
            }}
            onPress={() => navigation.navigate('Shopping')}
            >
                <FontAwesome name="shopping-cart" size={18} color="gray" />
                <Text style={{
                    marginLeft: 5,
                    fontWeight: '500'
                }}>1</Text>
            </Pressable>
            
        )
      })}
      />
      <Stack.Screen 
      name="ProductDetails" 
      component={ProductDetails} 
      options={{presentation: 'modal'}} 
      />
      <Stack.Screen name="Shopping" component={Shopping} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default Navigation