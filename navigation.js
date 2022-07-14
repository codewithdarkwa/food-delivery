import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from './screens/Home'
import RestaurantDetail from './screens/RestaurantDetail'
import {Provider as ReduxProvider} from 'react-redux'
import configureStore from "./redux/store";

const store = configureStore();
export default function RootNavigation(){
 const Stack = createStackNavigator()

    return(
        <ReduxProvider store={store}>
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="RestaurantDetail" component={RestaurantDetail} />
            </Stack.Navigator>
        </NavigationContainer>
        </ReduxProvider>
    )
}