
import React, {useLayoutEffect} from 'react'
import { StyleSheet, Text, View, Image, FlatList, Pressable } from 'react-native';
import products from '../data/products';

const ProductScreen = ({navigation}) => {

  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerShown: false
  //   })
  // })


  return (
    <View>
         <FlatList 
        data={products}
        renderItem={({item})=> (
          <Pressable style={{
            width: '50%',
            padding: 1
          }}
          onPress={() => navigation.navigate('ProductDetails')}
          >
            <Image 
            source={{uri: item.image}}
            style={{
              width: "100%",
              aspectRatio: 1
            }}
            
          
          />
          </Pressable>
        )}
        numColumns={2}
      />
    </View>
  )
}

export default ProductScreen