
import React, {useLayoutEffect} from 'react'
import { StyleSheet, Text, View, Image, FlatList, Pressable } from 'react-native';
// import products from '../data/products';
import {useSelector, useDispatch} from 'react-redux'
import { ProductSlice } from '../store/ProductSlice';

const ProductScreen = ({navigation}) => {

  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerShown: false
  //   })
  // })

  const products = useSelector((state) => state.products.products);

  const dispatch = useDispatch();

  return (
    <View>
         <FlatList 
        data={products}
        renderItem={({item})=> (
          <Pressable style={{
            width: '50%',
            padding: 1
          }}
         

          onPress={() => {
             //update selected Product
             dispatch(ProductSlice.actions.setSelectedProduct(item.id));

            navigation.navigate('ProductDetails')
          }}
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