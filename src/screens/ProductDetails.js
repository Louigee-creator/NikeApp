import { View, Text, Image, FlatList, useWindowDimensions, ScrollView, Pressable } from 'react-native'
import React from 'react'
import products from '../data/products'

const ProductDetails = () => {
    const product = products[14];
    const  { width } = useWindowDimensions();

    const addtoCart = () => {
        console.warn('Add to Cart')
    }

  return (
    <View>
        <ScrollView 
        showsVerticalScrollIndicator={false}
        >

        <FlatList 
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            data={product.images}
            renderItem={({item})=> (
                <View>
                     <Image 
                        source={{uri: item}}
                        style={{
                            width,
                            aspectRatio: 1                  
                        }}
                    />
                </View>
            )}
            
        />
        <View style={{
            padding: 20
        }}>
            <Text style={{
                fontSize: 34,
                fontWeight: '500',
                marginVertical: 10
            }}>{product.name}</Text>
            <Text style={{
                fontWeight: '500',
                fontSize: 16,
                letterSpacing: 1.5
            }}>${product.price}</Text>
            <Text style={{
                marginVertical: 10,
                fontSize: 18,
                lineHeight: 30,
                fontWeight: '300'
            }}>{product.description}</Text>
        </View>
        </ScrollView>
        <Pressable 
            onPress={addtoCart}
        style={{
            position: 'absolute',
            backgroundColor: 'black',
            bottom: 30,
            width: '90%',
            alignSelf: 'center',
            padding: 20,
            borderRadius: 100

        }}>
            <Text style={{
                color: 'white',
                textAlign: 'center',
                fontWeight: '500',
                fontSize: 16
            }}>Add to cart</Text>
        </Pressable>
    </View>
  )
}

export default ProductDetails