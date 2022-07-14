import {View, Text} from 'react-native'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import About from '../components/RestaurantDetail/About'
import MenuItem from '../components/RestaurantDetail/MenuItem'
import ViewCart from '../components/RestaurantDetail/ViewCart'



export default function RestaurantDetail({route,navigation}){

    return(
        <View>
           <About route={route}/>
           <Divider width={1.8} style={{marginVertical:20}}/>
           <MenuItem />
           <ViewCart navigation={navigation} retaurantName={route.params.name}/>
        </View>
    )
}