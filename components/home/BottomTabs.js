import {View,Text,TouchableOpacity} from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

export default function BottomTabs(){
 
    const icons =[
        {
            icon:'home',
            text:'Home',
        },
        {
            icon:'search',
            text:'Browse',
        },
        {
            icon:'shopping-bag',
            text:'Grocery',
        },
        {
            icon:'receipt',
            text:'Orders',
        },
        {
            icon:'user',
            text:'Account',
        },
  ]

    return(
        <View style={{flexDirection:"row",margin:10,marginHorizontal:30,justifyContent:'space-between',}}>
        {icons.map((icon,i)=>(
            <Icon key={i} {...icon}/>
        ))}
        </View>
    )
}

const Icon = ({icon,text})=>(
    <TouchableOpacity>
    <View>
        <FontAwesome5 name={icon} size={25} style={{marginBottom: 3,alignSelf: 'center'}}/>
    <Text>{text}</Text>
    </View>
    </TouchableOpacity>
)