import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from './screens/Home'
import RestaurantDetail from './screens/RestaurantDetail'

export default function RootNavigation(){
 const Stack = createStackNavigator()

    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="RestaurantDetail" component={RestaurantDetail} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}