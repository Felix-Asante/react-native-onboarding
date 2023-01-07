import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import HomeScreen from "./src/screens/HomeScreen";
import OnboardingScreen from "./src/screens/OnboardingScreen";

const Stack = createNativeStackNavigator();
const screenOptions = {
	headerShown: false,
};
export default function App() {
	const [isFirstLaunch, setIsFirstLaunch] = useState(false);
	useEffect(() => {
		AsyncStorage.getItem("alreadyLaunched").then((value) => {
			if (value == null) {
				AsyncStorage.setItem("alreadyLaunched", "true");
				setIsFirstLaunch(true);
			} else {
				setIsFirstLaunch(false);
			}
		});
	}, []);

	return (
		<NavigationContainer>
			<Stack.Navigator>
				{!isFirstLaunch && (
					<Stack.Screen
						name="onboardingScreen"
						component={OnboardingScreen}
						options={screenOptions}
					/>
				)}
				<Stack.Screen
					name="home"
					component={HomeScreen}
					options={screenOptions}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
