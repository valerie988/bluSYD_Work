import Header from "@/components/Header";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  KeyboardAvoidingViewBase,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const Payment = () => {
  const [formVisible, setFormVisible] = useState(false);
  const handleAdd = () => {
    setFormVisible(!formVisible);
  };

  const [localPay, setlocalPay] = useState(false);
  const handleDisplay = () => setlocalPay(!localPay);

  return (
    <ScrollView>
      <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
              className="flex-1"
              keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
            >
      <SafeAreaView>
        <StatusBar style="light" backgroundColor="#0000FF" />
        <Header title="Payment Method" />
        <View className="flex flex-col mx-4">
          <View className="mt-10 ">
            <View className="flex flex-row items-center">
              <TouchableOpacity
                onPress={handleAdd}
                className="w-16 border border-2 border-zinc-300 px-2 rounded-lg"
              >
                <Text className="font-medium text-center text-[30px] text-zinc-700">
                  +
                </Text>
              </TouchableOpacity>{" "}
              <Text className="ml-4 font-medium text-[18px]">
                Add new credit or debit card
              </Text>
            </View>
            {formVisible ? (
              <View>
                <View className="my-3">
                  <Text>Card Number</Text>
                  <TextInput
                    className="p-3 border border-zinc-400 rounded-lg text-xl"
                    placeholder="0000 0000 0000"
                  />
                  <Image
                    className="absolute right-4 top-8"
                    source={icons.matsercard}
                  />
                </View>
                <View className="flex flex-row justify-between">
                  <View>
                    <Text>Expiration</Text>
                    <TextInput
                      className="w-[150px] p-3 border border-zinc-400 rounded-lg text-xl"
                      placeholder="MM/YY"
                    />
                  </View>
                  <View>
                    <Text>CVV</Text>
                    <TextInput
                      className="w-[150px] p-3 border border-zinc-400 rounded-lg text-xl"
                      placeholder="CVV"
                    />
                  </View>
                </View>
              </View>
            ) : null}
            <Link className="my-5" href="/">
              {" "}
              <View className="flex flex-row items-center">
                <Image className="w-10 h-10" source={icons.paypal} />{" "}
                <Text className="text-[25px] text-zinc-600 ml-4">Paypal</Text>
              </View>
            </Link>
            <Link className="my-5" href="/">
              <View className="flex flex-row items-center">
                <Image className="w-10 h-10" source={icons.google} />{" "}
                <Text className="text-[25px] text-zinc-600 ml-4">
                  GooglePay
                </Text>
              </View>
            </Link>
            <Link className="my-5" href="/">
              {" "}
              <View className="flex flex-row items-center">
                <Image className="w-10 h-10" source={icons.apple} />{" "}
                <Text className="text-[25px] text-zinc-600 ml-4">ApplePay</Text>
              </View>
            </Link>
            <TouchableOpacity onPress={handleDisplay}>
              <Text className="my-5 text-[23px] text-zinc-600 ml-4">
                Use local Payment methods
              </Text>
            </TouchableOpacity>
            {localPay?
            <View>
              <Text className="text-[18px] text-zinc-600 ml-4">
                Avalaible in your country
              </Text>
              <View className="flex flex-row gap-10 ml-3 ">
                <TouchableOpacity className="my-5">
                  {" "}
                  <Image
                    className="w-[75px] h-12 rounded "
                    source={images.mtn}
                  />
                </TouchableOpacity>
                <TouchableOpacity className="my-5">
                  <Image
                    className="w-[75px] h-12 rounded"
                    source={images.Orange}
                  />
                </TouchableOpacity>
                <TouchableOpacity className="my-5">
                  {" "}
                  <Image
                    className="w-[75px] h-12 rounded"
                    source={images.mtn}
                  />
                </TouchableOpacity>
              </View>
              <Text className="text-center mt-4 mb-4 text-xl">MoMo Number</Text>
              <TextInput className="border border-gray rounded p-4"></TextInput>
            </View>
            :null}
          </View>
          <View className="mt-[4rem]">
            <View className="flex flex-row">
              <Image source={icons.addlock} />
              <Text className="text-zinc-400 px-2">
                It’s safe to pay on our app. All transactions are protected by
                SSL encryption.
              </Text>
            </View>
            <View className="flex items-center mt-4">
              <TouchableOpacity className="bg-primary py-3 w-[242px] rounded-3xl items-center">
                <Text className="text-white text-[15px] font-medium">
                  Continue
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default Payment;
