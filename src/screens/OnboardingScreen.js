import { useNavigation } from "@react-navigation/native";
import { View, Image, Text } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import { OnboardImage1, OnboardImage2, OnboardImage3 } from "../../assets";

const titleStyles = {
	color: "#573353",
	fontWeight: "bold",
	fontSize: 25,
	order: 1,
};

export default function OnboardingScreen() {
	const navigation = useNavigation();

	const DotComponent = ({ selected }) => (
		<View className={`w-4 h-4 items-center justify-around rounded-full`}>
			<View
				className={`w-2 h-2  rounded-full ${
					selected ? "bg-[#573353]" : "bg-[#F9B566]"
				}`}
			></View>
		</View>
	);

	return (
		<Onboarding
			onSkip={() => navigation.replace("home")}
			onDone={() => navigation.replace("home")}
			DotComponent={DotComponent}
			titleStyles={titleStyles}
			imageContainerStyles={{ paddingBottom: 10 }}
			bottomBarColor="white"
			bottomBarHighlight={false}
			showDone={false}
			pages={[
				{
					backgroundColor: "#fff",
					image: (
						<Image
							source={OnboardImage1}
							className="w-80 h-[25rem] object-contain"
						/>
					),
					title: "WELCOME TO Monumental habits",
					subtitle: "We can help you to be a better version of yourself.",
				},
				{
					backgroundColor: "#fff",
					image: (
						<Image
							source={OnboardImage2}
							className="w-80 h-[25rem] object-contain"
						/>
					),
					title: "CREATE NEW HABIT EASILY",
					subtitle: "We can help you to be a better version of yourself.",
				},
				{
					backgroundColor: "#fff",
					image: (
						<Image
							source={OnboardImage3}
							className="w-80 h-[25rem] object-contain"
						/>
					),
					title: "KEEP TRACK OF YOUR PROGRESS",
					subtitle: "We can help you to be a better version of yourself.",
				},
			]}
		/>
	);
}
