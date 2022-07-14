import {View, Text} from 'react-native'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import About from '../components/RestaurantDetail/About'
import MenuItem from '../components/RestaurantDetail/MenuItem'




export default function RestaurantDetail({route}){

    return(
        <View>
           <About route={route}/>
           <Divider width={1.8} style={{marginVertical:20}}/>
           <MenuItem />
        </View>
    )
}