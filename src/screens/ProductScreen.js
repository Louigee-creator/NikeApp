
import React from 'react'
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import products from '../data/products';

const ProductScreen = () => {
  return (
    <View>
         <FlatList 
        data={products}
        renderItem={({item})=> (
          <View style={{
            width: '50%',
            padding: 1
          }}>
            <Image 
            source={{uri: item.image}}
            style={{
              width: "100%",
              aspectRatio: 1
            }}
          />
          </View>
        )}
        numColumns={2}
      />
    </View>
  )
}

export default ProductScreen