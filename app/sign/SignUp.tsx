import { View, Text, TouchableOpacity, Image, TextInput, Alert, ScrollView, KeyboardAvoidingView, Platform} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import Svg, { Path } from 'react-native-svg';// npm installl
import icons from '@/constants/icons';
import { Link, useRouter } from 'expo-router';
import { Checkbox } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';

const SignUp = () => {
  const router = useRouter();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [isChecked, setChecked] = useState(false); 
  const [activeTab, setActiveTab] = useState('Sign up');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [show,setShow] = useState(true)
  const [showConfirm,setShowConfirm] = useState(true)
  const [showLogInpass, setShowLogInpass] = useState(true);


  const tabs = ['Sign in', 'Sign up'];

  const handleFullNameChange = (text: string) => setFullName(text);
  const handleEmailChange = (text: string) => {
    setEmail(text);
    setIsValidEmail(true);
  };
  const handlePasswordChange = (text: string) => {
      setPassword(text);
      setIsValidPassword(true);
      setPasswordsMatch(text === confirmPassword);
  }; 
  const handleConfirmPasswordChange = (text: string) =>{
     setConfirmPassword(text);
     setPasswordsMatch(text === password);
  };


  const validateEmail = (email: string) => {
  // Simple regex for email validation
  return /\S+@\S+\.\S+/.test(email);
};

const validatePassword = (password: string) => {
  // Simple regex for password validation
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(password);
};

// submit
const handleSubmit = () => {
  if (activeTab === 'Sign up') {
     if(!isFormValid){
      Alert.alert("Please fill the form!")
    }
    if (!validateEmail(email)) {
      Alert.alert("Invalid email address");
      setIsValidEmail(false);
      return;
    }
    if (!validatePassword(password)) {
      Alert.alert("Password must be at least 8 characters long and contain a number");
      setIsValidPassword(false);
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert("Passwords do not match");
      return;
    }
    // Navigate to destination
    router.push("/");
  } else {
    // Sign in validation (optional)
    if (!validateEmail(email)) {
      Alert.alert("Invalid email for sign in");
      return;
    }
    if (password.length < 8) {
      Alert.alert("Password too short");
      return;
    }
    router.push("/");
  }
};


  const WaveIndicator = () => (
    <Svg height="8" width="50" viewBox="0 0 50 8">
      <Path d="M0,10 L25,0 L50, 10 Z" fill="#2563eb" />
    </Svg>
  );

  const isFormValid = () => {
    if (activeTab === 'Sign up') {
      return (
        fullName.trim() !== '' &&
        validateEmail(email) &&
        validatePassword(password) &&
        password === confirmPassword &&
        isChecked
      );
    } else {
      return (
        validateEmail(email) &&
        password.length >= 8
      );
    }
  };


  return (
    <SafeAreaView>
      <StatusBar style="light" backgroundColor="#1D4ED8" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1"
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
      >
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
              autoFocus
              onChangeText={handleFullNameChange}
              className={"border border-gray-500 p-5 rounded-lg mb-4 mt-2 pl-14"
              }
              placeholder="Full Name"
              placeholderTextColor="#9BA5B7"
            />
          </View>

          {/* Email */}
          <View>
            <Text>Email</Text>
            <Image className="absolute w-8 h-8 left-4 bottom-8" source={icons.mail} />
            <TextInput
              onChangeText={handleEmailChange}
              className={`border border-gray-500 p-5 rounded-lg mb-4 mt-2 pl-14 ${
                !isValidEmail && 'border-danger border-2'
              }`}
              placeholder="Email"
              placeholderTextColor="#9BA5B7"
            />
          </View>

          {/* Password */}
          <View>
            <Text>Password</Text>
            <Image className="absolute w-8 h-8 left-4 bottom-6" source={icons.lock} />
            {show ? 
               <TouchableOpacity className="absolute w-8 h-8 right-4 bottom-6 z-40" onPress={()=>{setShow(!show)}}> <Image className='w-8 h-8' source={icons.visible} /></TouchableOpacity>
            :
               <TouchableOpacity className="absolute w-8 h-8 right-4 bottom-6 z-40" onPress={()=>{setShow(!show)}}> <Image className='w-8 h-8' source={icons.hide} /></TouchableOpacity>}
            <TextInput
              onChangeText={handlePasswordChange}
              className="border border-gray-500 p-5 rounded-lg mb-2 mt-2 pl-14"
              placeholder="Password"
              placeholderTextColor="#9BA5B7"
              secureTextEntry = {show}
            />
          </View>

          {/* Confirm Password */}
          <View>
            <Text>Confirm Password</Text>
            <Image className="absolute w-8 h-8 left-4 bottom-6" source={icons.lock} />
            {showConfirm ? 
            <TouchableOpacity className="absolute w-8 h-8 right-4 bottom-6 z-40" onPress={()=>{setShowConfirm(!showConfirm)}}> <Image className='w-8 h-8' source={icons.visible} /></TouchableOpacity>
            :
            <TouchableOpacity className="absolute w-8 h-8 right-4 bottom-6 z-40" onPress={()=>{setShowConfirm(!showConfirm)}}> <Image className='w-8 h-8' source={icons.hide} /></TouchableOpacity>}
            <TextInput
              onChangeText={handleConfirmPasswordChange}
              className="border border-gray-500 p-5 rounded-lg mb-2 mt-2 pl-14"
              placeholder="Confirm Password"
              placeholderTextColor="#9BA5B7"
              secureTextEntry = {showConfirm}
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
              onChangeText={handleEmailChange}
              className="border border-gray-500 p-5 rounded-lg mb-4 mt-2 pl-14"
              placeholder="Email"
              placeholderTextColor="#9BA5B7"
            />
          </View>

          {/* Password */}
          <View>
            <Text>Password</Text>
            <Image className="absolute w-8 h-8 left-4 bottom-6" source={icons.lock} />
            {showLogInpass ? 
               <TouchableOpacity className="absolute w-8 h-8 right-4 bottom-6 z-40" onPress={()=>{setShowLogInpass(!showLogInpass)}}> <Image className='w-8 h-8' source={icons.visible} /></TouchableOpacity>
            :
               <TouchableOpacity className="absolute w-8 h-8 right-4 bottom-6 z-40" onPress={()=>{setShowLogInpass(!showLogInpass)}}> <Image className='w-8 h-8' source={icons.hide} /></TouchableOpacity>}
            <TextInput
              onChangeText={handlePasswordChange}
              className="border border-gray-500 p-5 rounded-lg mb-4 mt-2 pl-14"
              placeholder="Password"
              placeholderTextColor="#9BA5B7"
              secureTextEntry = {showLogInpass}
            />
          </View>
        </View>
      )}
    


      {/*remember and forget*/}
      <View className='flex flex-row justify-between my-4'>
        <View className='flex flex-row mx-3 items-center'>
        <View className='border flex flex-row justify-center'>
          <View style={{ transform: [{ scale: 0.75 }] }}>
             <Checkbox color='#3260E7'   status={isChecked ? 'checked' : 'unchecked'}  onPress={() => {
              setChecked(!isChecked);
              }} />
          </View>
        </View>
        {activeTab === "Sign up" ?( <View className=' mx-3'>
            <Text className='text-sm'>I agree to your <Text className='text-primary'>Privacy Policy</Text> and<Text className='text-primary'> Terms and conditions</Text></Text>
          </View>):
          ( <View className=' mx-3 flex flex-row justify-between'>
               <Text>Remember me</Text>
               <Link href={"/"} className='flex-1 ml-20 pl-16 text-danger'>Forgot password</Link>
             </View>)
          }
        </View>
        
      </View>

      {/*other platforms*/}
      <View className='flex flex-row items-center justify-center mt-2'>
        <Text className='text-gray-400'>_____________</Text>
        <Text className='px-4 text-gray-600 text-lg font-small '>or continue with</Text>
        <Text className='text-gray-400'>_____________</Text>
      </View>
      <View className='flex flex-row justify-center gap-4 mt-4'>
        <TouchableOpacity className='border rounded-xl border-gray-300 p-3'><Image className='w-9 h-9 p-1' source={icons.facebook}/></TouchableOpacity>
        <TouchableOpacity className='border rounded-xl border-gray-300 p-3'><Image className='w-9 h-9 p-1' source={icons.google}/></TouchableOpacity>
        <TouchableOpacity className='border rounded-xl border-gray-300 p-3'><Image className='w-9 h-9 p-1' source={icons.apple}/></TouchableOpacity>
      </View>

      {/*button*/}
      <TouchableOpacity onPress={handleSubmit} className= {`${isFormValid() ? 'rounded-3xl bg-primary text-white mt-10 mx-3' : 'rounded-3xl bg-blue-300 mt-10 mx-3 font-bold'}`}>
        <Text className= {`${isFormValid() ? 'text-white text-center p-4 font-bold' : 'text-white text-center p-4 font-bold'}`}>Continue</Text>
      </TouchableOpacity>
      </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignUp;
