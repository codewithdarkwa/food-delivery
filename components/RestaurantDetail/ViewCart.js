import {View,Text,TouchableOpacity,Modal} from 'react-native';
import {useSelector} from 'react-redux'
import { useState } from 'react';

export default function ViewCart(){
  const [modalVisible, setModalVisible] = useState(false)

    const { items, restaurantName } = useSelector(
        (state) => state.cartReducer.selectedItems
      );
    
      const total = items
        .map((item) => Number(item.price.replace("$", "")))
        .reduce((prev, curr) => prev + curr, 0);
    
      const totalUSD = total.toLocaleString("en", {
        style: "currency",
        currency: "USD",
      });
      const checkoutModalContent = () => {}
       
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
            <Text style={{color:'#fff',fontSize:20,}}>{total}</Text>
            </TouchableOpacity>
            </View>
        </View>
        ):(<></>)
        }
        </>
    )
}