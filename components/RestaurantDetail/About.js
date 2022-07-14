import {View,Text,Image} from 'react-native'

export default function About(props){
    const {name,image,price,reviews,rating,categories} = props.route.params;
    
    const formattedCategories = categories.map((cat)=>cat.title).join(" ");
    const description = `${formattedCategories} ${price ? '*'+ price : ''} '💵' ${rating} ⭐ (${reviews}+)`;

    return(
        <View>
            <RestaurantImage image={image}/>
            <RestaurantName name={name}/>
            <RestaurantDesciption description={description}/>
        </View>
    ) 
}

const RestaurantImage = ({image}) =>(
    <Image source={{uri:image}} style={{width:'100%',height: 180}}/>
)

const RestaurantName = ({name}) =>(
    <Text
    style={{
        fontSize:30,
        fontWeight: '600',
        marginTop:10,
        marginHorizontal:15,
    }}
    >{name}</Text>
)

const RestaurantDesciption = ({description}) =>(
    <Text style={{
        marginTop:10,
        marginHorizontal:15,
        fontWeight:'400',
        fontSize:16
    }}>{description }</Text>
)