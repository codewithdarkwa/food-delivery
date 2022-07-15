import {View,Text,TouchableOpacity,Modal,StyleSheet} from 'react-native';
import {useSelector} from 'react-redux'
import { useState } from 'react';

export default function ViewCart(){
  const [modalVisible, setModalVisible] = useState(false)

    const { items, restaurantName } = useSelector(
        (state) => state.cartReducer.selectedItems
      );
    console.log(restaurantName);
      const total = items
        .map((item) => Number(item.price.replace("$", "")))
        .reduce((prev, curr) => prev + curr, 0);
    
      const totalUSD = total.toLocaleString("en", {
        style: "currency",
        currency: "USD",
      });

      const styles = StyleSheet.create({
        modalContainer:{
            flex:1,
            justifyContent:"flex-end",
            backgroundColor: 'rgba(0,0,0,0.7)'
        },
        modalCheckoutContainer:{
            backgroundColor: '#fff',
            padding:16,
            borderWidth: 1,
            height:500,
        },
        restaurantName:{
            textAlign: 'center',
            fontWeight: '600',
            fontSize:18,
            marginBottom: 10,
        },
        subtotalContainer:{
            flexDirection:"row",
            justifyContent: "space-between",
            marginTop:15
        },
        subtotalText:{
            textAlign: 'left',
            fontWeight:'600',
            fontSize:16,
            marginBottom:10,
        }
      })
      const checkoutModalContent = () => {
        return(
           <>
           <View style={styles.modalContainer}>
            <View style={styles.modalCheckoutContainer}>
                <Text style={styles.restaurantName}>{restaurantName??'Restaurant name'}</Text>
                <TouchableOpacity
                style={{textAlign: 'center',top:150, backgroundColor:'#000',color:'#fff',padding:15,borderRadius:'100%'}}
                onPress={() => setModalVisible(false)}>
                    <Text style={{color:'#fff',textAlign:'center',fontSize:17}}>Checkout</Text>
                </TouchableOpacity>
            </View>
           </View>
           </>
        )
      }
       
    return(
        <>
        <Modal 
        animationType='slide'
        visible={modalVisible}
        transparent={true}
        onRequestClose={()=>setModalVisible(false)}>
        {checkoutModalContent()}
        </Modal> 
        {total ? (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection:'row',
            position:'absolute',
            bottom:150,
            zIndex:999
        }}>
        <View style={{
            flexDirection:'row',
            justifyContent: 'center',
            width:'100%',
        }}>
            <TouchableOpacity 
            style={{
                marginTop: 20,
                backgroundColor: '#000',
                flexDirection:'row',
                justifyContent:"space-around",
                padding:15,
                borderRadius:30,
                width:300,
                position:'relative'
            }}
            onPress={()=>setModalVisible(true)}  
            >
            <Text style={{color:'#fff',fontSize:20,marginRight:30}}>View Cart</Text>
            <Text style={{color:'#fff',fontSize:20,}}>{totalUSD}</Text>
            </TouchableOpacity>
            </View>
        </View>
        ):(<></>)
        }
        </>
    )
}