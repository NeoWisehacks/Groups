const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Home from "./screens/Home";
import GroupsList from "./screens/GroupsList";
import Communities from "./screens/Communities";
import CommunitiesList from "./screens/CommunitiesList";
import GroupWishlist from "./screens/GroupWishlist";
import PersonalTripsUser from "./screens/PersonalTripsUser";
import GroupTrip from "./screens/GroupTrip";
import PersonalTripsUser1 from "./screens/PersonalTripsUser1";
import ChatOutfit from "./screens/ChatOutfit";
import ChatOutfit1 from "./components/ChatOutfit1";
import Home1 from "./screens/Home1";
import MenuMoreVertical from "./components/MenuMoreVertical";
import Group from "./screens/Group";
import OutfitPage from "./screens/OutfitPage";
import Members from "./screens/Members";
import PreviousWardrobe from "./screens/PreviousWardrobe";
import ModeLightTypeDefault from "./components/ModeLightTypeDefault";
import ToggleHome from "./components/ToggleHome";
import ToggleComm from "./components/ToggleComm";
import Outfit from "./components/Outfit";
import Product from "./components/Product";
import ToggleWardrobe from "./components/ToggleWardrobe";
import OpinionPoll from "./components/OpinionPoll";
import GroupOutfit from "./screens/GroupOutfit";
import OpinionPoll1 from "./components/OpinionPoll1";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";
import RightSwipFeature from "./screens/RightSwipFeature";
import LeftSwipFeature from "./screens/RightSwipFeature";
import SwipFeature from "./screens/SwipFeature";
import  CommunityPoll  from "./screens/CommunityPoll";
import PollsPage from "./screens/PollsPage";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Black": require("./assets/fonts/Roboto-Black.ttf"),
    "Inter-Light": require("./assets/fonts/Inter-Light.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Inter-ExtraBold": require("./assets/fonts/Inter-ExtraBold.ttf"),
    "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-SemiBold": require("./assets/fonts/Montserrat-SemiBold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Communities"
              component={Communities}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GroupsList"
              component={GroupsList}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SwipFeature"
              component={SwipFeature}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RightSwipFeature"
              component={RightSwipFeature}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LeftSwipFeature"
              component={LeftSwipFeature}
              options={{ headerShown: false }}
            />
            {/* <Stack.Screen
              name="Communities"
              component={Communities}
              options={{ headerShown: false }}
            /> */}
            <Stack.Screen
              name="PollsPage"
              component={PollsPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CommunitiesList"
              component={CommunitiesList}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CommunityPoll"
              component={CommunityPoll}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GroupWishlist"
              component={GroupWishlist}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PersonalTripsUser"
              component={PersonalTripsUser}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GroupTrip"
              component={GroupTrip}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PersonalTripsUser1"
              component={PersonalTripsUser1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChatOutfit"
              component={ChatOutfit}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home1"
              component={Home1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Group"
              component={Group}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OutfitPage"
              component={OutfitPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Members"
              component={Members}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PreviousWardrobe"
              component={PreviousWardrobe}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GroupOutfit"
              component={GroupOutfit}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
