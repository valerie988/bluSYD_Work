import React from "react";
import { Text, View } from "react-native";
import icons from "@/constants/icons"
import { Image } from "react-native";
import { Link } from "expo-router";
interface Props {
  title: string;
}

const Header = ({ title }: Props) => {
  return (
    <View className="bg-primary rounded-b-3xl flex flex-row justify-center items-center gap-5 text-center pt-8">
      <Link className='my-5' href="/vendorPackage/Package"> <Image className="w-10 h-10 p-2 bg-white rounded-3xl" source={icons.backArrow}/></Link>
      <Text className="text-white py-9 text-4xl mt-">{title}</Text>
    </View>
  );
};

export default Header;
