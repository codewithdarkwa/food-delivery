import { useEffect,useState } from 'react'
import { View, Text,SafeAreaView, ScrollView } from 'react-native'
import Categories from '../components/Categories'
import HeaderTabs from '../components/HeaderTabs'
import RestaurantItems from '../components/RestaurantItems'
import SearchBar from '../components/SearchBar'
import { localRestaurants } from '../components/RestaurantItems'

const YELP_API_KEY = "T3KmNiUNLVKG9vQeiy16yr3-yShgQV728urB4CZsu2ttVLvv9gEZXlFpy2gxQ1EJ5-nBj60m6tbbN_Wau1AKghfHgHP_tDMfWYTPZPNhbtlA1KP_QvzhckkVqKjOYnYx";

export default function Home(){
    const [restaurantData, setRestaurantData] = useState(localRestaurants)
  console.log(restaurantData);
    const getRestaurantsFromYelp = () => {
        const yelpUrl = "https://api.yelp.com/v3/businesses/search?term=restaurants&location=SanDiego"
        const apiOptions = {
            headers: {
              Authorization: `Bearer ${YELP_API_KEY}`,
            },
          };
             return fetch(yelpUrl, apiOptions)
            .then((res)=>res.json())
            .then((json)=>setRestaurantData(json.businesses))
    }

    useEffect(()=>{
        getRestaurantsFromYelp();
    },[])
    return(
        <SafeAreaView style={{backgroundColor:'#eee',flex: 1}}>
            <View style={{backgroundColor:'#fff',padding:15}}>
           <HeaderTabs />
           <SearchBar />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
          <Categories/>
          <RestaurantItems restaurantData={restaurantData}/>
            </ScrollView>
        </SafeAreaView>
    )
}