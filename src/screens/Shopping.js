import { View, Text, FlatList, Pressable } from 'react-native'
import React from 'react'
import cart from "../data/cart"
import CartListItem from '../components/CartListItem'

const Shopping = () => {
  return (
    <>

        <FlatList 
          data={cart}
          renderItem={({item}) => <CartListItem cartItem={item} />}
          ListFooterComponent={()=> (
              <View style={{
                  margin: 20,
                  paddingTop: 10,
                  borderColor: 'gainsboro',
                  borderTopWidth: 0.5
              }}>
                  <View style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginVertical: 2
                  }}>
                      <Text style={{
                          fontSize: 16,
                          color: 'grey'
                      }}>SubTotal</Text>
                      <Text style={{
                          fontSize: 16,
                          color: "grey"
                      }}>$410,00</Text>
                      
                  </View>
                  <View style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginVertical: 2
                  }}>
                      <Text style={{
                          fontSize: 16,
                          color: 'grey'
                      }}>Delivery</Text>
                      <Text style={{
                          fontSize: 16,
                          color: "grey"
                      }}>$10,00</Text>
                      
                  </View>
                  <View style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginVertical: 2
                  }}>
                      <Text style={{
                          fontSize: 16,
                          color: 'black',
                          fontWeight: 'bold'
                      }}>Total</Text>
                      <Text style={{
                         fontSize: 16,
                         color: 'black',
                         fontWeight: 'bold'
                      }}>$420,00</Text>
                      
                  </View>
              </View>
          )}
        />

       <Pressable 
          
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
            }}>Checkout</Text>
        </Pressable>

    </>
  
  )
}

export default Shopping