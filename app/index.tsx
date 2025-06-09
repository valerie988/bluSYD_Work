import { Image, Text, View } from "react-native";
import icons from "@/constants/icons";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="font-bold color-border">Edit app/index.tsx to edit this screen.</Text>
      <Image source={icons.google}></Image>
    </View>
  );
}
