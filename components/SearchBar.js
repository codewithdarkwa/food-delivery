import {View, Text} from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'

export default function SearchBar({cityHandler}){
    return(
        <View style={{marginTop:15,flexDirection:"row"}}>
            <GooglePlacesAutocomplete
            query={{key:'AIzaSyBsTvuB6janl3Pf45isyey66MXEuYc-8-k'}}
            onPress={(data)=>{
               console.log(data);
               let city = data.description.split(',')[0];
               cityHandler(city)
            }}
            placeholder='search'
            styles={{
                textInput:{
                    backgroundColor:"#eee",
                    borderRadius:20,
                    fontWeight:'bold',
                    marginTop:7
                },
                textInputContainer:{
                    backgroundColor:'#eee',
                    borderRadius:50,
                    flexDirection:"row",
                    alignItems:"center",
                    marginRight:18
                }
            }} 
           renderLeftButton={()=>(
           <View style={{marginLeft:10}}>
             <Ionicons name="location-sharp" size={24}/>
           </View>
    )}
        renderRightButton = {() =>(
            <View style={{
                flexDirection:"row",
                marginRight:8,
                backgroundColor:'#fff',
                padding:9,
                borderRadius:30,
                alignItems:"center",
            }}>
                <AntDesign name="clockcircle" size={11} style={{marginRight:6}}/>
                <Text>Search</Text>
            </View>
        )}
        enablePoweredByContainer={false}
            />
        </View>
    )
}