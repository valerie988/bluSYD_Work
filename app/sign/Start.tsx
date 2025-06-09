import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import images from '@/constants/images'
import MediaSign from '@/components/MediaSign'
import icons from '@/constants/icons'
import { Link } from 'expo-router'

const Start = () => {
  return (
   <SafeAreaView className='flex  h-screen'>
        <View className='flex flex-col items-center pt-2 h-[35%]'>
            <View className='h-large w-med '>
                <Image source={images.logo} className='size-full'/>
            </View>
            <View className='flex flex-col items-center'>
                <Text className= 'text-3xl mt-4 font-medium'>Let's Get Started</Text>
                <Text>Let's dive into yor account</Text>
            </View>
        </View>
        <View className='mt-14 bg-gray pt-4 rounded-t-3xl flex-auto h-[65%]'>
           <MediaSign image={icons.google} text='Continue with Google'/>
           <MediaSign image={icons.apple} text='Continue with Apple'/>
           <MediaSign image={icons.facebook} text='Continue with Facebook'/>

           <View className='mt-8'>
             <TouchableOpacity className='flex flex-row rounded-full border border-primary justify-center p-3 mx-8 my-4 bg-primary'>
                          <Link href={"./"} className=' text-lg text-white'>Sign in</Link>
                        </TouchableOpacity>
            <TouchableOpacity className='flex flex-row rounded-full border border-primary justify-center p-3 mx-8 my-4'>
                          <Link href={"./SignUp"} className=' text-lg text-primary'>Sign up</Link>
                        </TouchableOpacity>
           </View>
           <View className='flex flex-row justify-center p-4 items-center '>
            <Text>Terms and conditions  </Text>
            <Text className='font-bold text-3xl'>.</Text>
            <Text>  Privacy policy</Text>
        </View>
        </View>
        
   </SafeAreaView>
  )
}

export default Start