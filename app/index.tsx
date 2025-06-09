import { Image, SafeAreaView, Text, View } from "react-native";
import icons from "@/constants/icons";
import { Link } from "expo-router";

export default function Index() {
  return (
   <SafeAreaView>
      <Link href="./sign/Start" className="color-text">SignUp</Link>
   </SafeAreaView>
  );
}
