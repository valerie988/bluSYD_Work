import { View, Text, TouchableOpacity, Image, TextInput, Alert, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import Svg, { Path } from 'react-native-svg';// npm installl
import icons from '@/constants/icons';
import { router, useRouter } from 'expo-router';
import { Checkbox } from 'react-native-paper';



const SignUp = () => {
  const router = useRouter();
  const [isChecked, setChecked] = useState(false); 
  const [activeTab, setActiveTab] = useState('Sign up');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [inputText, setInputText] = useState("");


  const tabs = ['Sign in', 'Sign up'];

  const handleInputChange = (text:string) => {
    setInputText(text);
    setIsValidEmail(true);
  };

  const handleChange = (text:string) => {
    setInputText(text);
    setIsValidPassword(true);
  };



  const validateEmail = (email: string) => {
  // Simple regex for email validation
  return /\S+@\S+\.\S+/.test(email);
};
const validatePassword = (password: string) => {
  // Simple regex for password validation
  return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
};



  const handleSubmit = () => {
  if (!validateEmail(inputText)) {
    Alert.alert("Invalid email address");
    setIsValidEmail(false);
    return;
  }
  // Proceed with API call or navigation
  router.push("./destination"); // Navigate only on valid input
};

  const WaveIndicator = () => (
    <Svg height="8" width="50" viewBox="0 0 50 8">
      <Path d="M0,10 L25,0 L50, 10 Z" fill="#2563eb" />
    </Svg>
  );

  return (
    <SafeAreaView>
      <ScrollView
      bounces={false} 
      >
      {/* Title */}
      <View className='bg-primary rounded-b-3xl flex flex-row justify-center items-center'>
        {(activeTab === "Sign in")?<Text className='text-white py-9 text-4xl mt-10'>Wecome Back</Text>:<Text className='text-white py-9 text-4xl mt-10'>Create an Account</Text>}
        {(activeTab === "Sign in") && <Image className='h-20 w-20' source={icons.wave}/>}
      </View>

      {/* Tabs */}
      <View className="flex-row justify-center border-b border-gray-300">
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab}
            className="flex-1 items-center pt-8"
            onPress={() => setActiveTab(tab)}
          >
            <Text className={`text-base ${activeTab === tab ? 'text-black font-bold' : 'text-gray-400'}`}>
              {tab}
            </Text>

            {activeTab === tab ? (
              <View style={{ width: 300, alignItems: 'center', marginTop: 5 }}>
                <WaveIndicator />
                <View style={{
                  width: 200,
                  height: 3,
                  backgroundColor: '#2563eb',
                  borderRadius: 999,
                }} />
              </View>
            ) : (
              <View className="h-3" /> // placeholder height
            )}
          </TouchableOpacity>
        ))}
      </View>

      {/* Dynamic Form Rendering */}
      {activeTab === 'Sign up' ? (
        <View className="p-3">
          {/* Full Name */}
          <View className="mt-5">
            <Text>Full Name</Text>
            <Image className="absolute w-8 h-8 left-4 bottom-8" source={icons.user} />
            <TextInput
              onChangeText={handleInputChange}
              className={`border border-gray-500 p-5 rounded-lg mb-4 mt-2 pl-14 ${
                isValidEmail ? 'border-black-100' : 'border-red-500'
              }`}
              placeholder="Full Name"
              placeholderTextColor="#9BA5B7"
            />
          </View>

          {/* Email */}
          <View>
            <Text>Email</Text>
            <Image className="absolute w-8 h-8 left-4 bottom-6" source={icons.mail} />
            <TextInput
              onChangeText={handleChange}
              className="border border-gray-500 p-5 rounded-lg mb-2 mt-2 pl-14"
              placeholder="Email"
              placeholderTextColor="#9BA5B7"
            />
          </View>

          {/* Password */}
          <View>
            <Text>Password</Text>
            <Image className="absolute w-8 h-8 left-4 bottom-6" source={icons.lock} />
            <Image className="absolute w-8 h-8 right-4 bottom-6" source={icons.hide} />
            <TextInput
              onChangeText={handleChange}
              className="border border-gray-500 p-5 rounded-lg mb-2 mt-2 pl-14"
              placeholder="Password"
              placeholderTextColor="#9BA5B7"
              secureTextEntry
            />
          </View>

          {/* Confirm Password */}
          <View>
            <Text>Confirm Password</Text>
            <Image className="absolute w-8 h-8 left-4 bottom-6" source={icons.lock} />
            <Image className="absolute w-8 h-8 right-4 bottom-6" source={icons.hide} />
            <TextInput
              onChangeText={handleChange}
              className="border border-gray-500 p-5 rounded-lg mb-2 mt-2 pl-14"
              placeholder="Confirm Password"
              placeholderTextColor="#9BA5B7"
              secureTextEntry
            />
          </View>
        </View>
      ) : (
        // Sign In Form
        <View className="p-3">
          {/* Email */}
          <View className="mt-5">
            <Text>Email</Text>
            <Image className="absolute w-8 h-8 left-4 bottom-6" source={icons.mail} />
            <TextInput
              onChangeText={handleChange}
              className="border border-gray-500 p-5 rounded-lg mb-4 mt-2 pl-14"
              placeholder="Email"
              placeholderTextColor="#9BA5B7"
            />
          </View>

          {/* Password */}
          <View>
            <Text>Password</Text>
            <Image className="absolute w-8 h-8 left-4 bottom-6" source={icons.lock} />
            <Image className="absolute w-8 h-8 right-4 bottom-6" source={icons.hide} />
            <TextInput
              onChangeText={handleChange}
              className="border border-gray-500 p-5 rounded-lg mb-4 mt-2 pl-14"
              placeholder="Password"
              placeholderTextColor="#9BA5B7"
              secureTextEntry
            />
          </View>
        </View>
      )}


      {/*remember and forget*/}
      <View className='flex flex-row justify-between my-4'>
        <View className='flex flex-row mx-3 items-center'>
        <View className='border flex flex-row justify-center'>
          <Checkbox  status={isChecked ? 'checked' : 'unchecked'}  onPress={() => {
          setChecked(!isChecked);
        }} />
        </View>
          <View className=' mx-3'>
            <Text className='text-sm'>I agree to your <Text className='text-primary'>Privacy Policy</Text> and<Text className='text-primary'> Terms and conditions</Text></Text>
          </View>
        </View>
        
      </View>

      {/*other platforms*/}
      <View className='flex flex-row items-center justify-center mt-2'>
        <Text className='text-gray-400'>_____________</Text>
        <Text className='px-4 text-gray-600 text-lg font-small '>or continue with</Text>
        <Text className='text-gray-400'>_____________</Text>
      </View>
      <View className='flex flex-row justify-center gap-4 mt-4'>
        <View className='border rounded-xl border-gray-300 p-3'><Image className='w-8 h-8  p-2' source={icons.facebook}/></View>
        <View className='border rounded-xl border-gray-300 p-3'><Image className='w-8 h-8 p-2' source={icons.google}/></View>
        <View className='border rounded-xl border-gray-300 p-3'><Image className='w-8 h-8 p-2' source={icons.apple}/></View>
      </View>

      {/*button*/}
      <TouchableOpacity onPress={handleSubmit} className='rounded-3xl bg-blue-600 mt-10 mx-3'>
        <Text className=' text-white text-center p-4 font-bold'>Continue</Text>
      </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
