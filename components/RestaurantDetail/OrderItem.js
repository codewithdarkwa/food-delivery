import {View,Text} from 'react-native'


export default function OrderItem({item}){
  const {title,price} =item;

    return(
        <View style={{
            flexDirection:"row",
            justifyContent:"space-between",
            padding:20,
            borderBottomColor:"#999",
            borderBottomWidth:1,
            }}>
            <Text style={{fontSize:16,fontWeight: '600'}}>{title}</Text>
            <Text style={{opacity:0.7,fontSize:16}}>{price}</Text>
        </View>
    )
}