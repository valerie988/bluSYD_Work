import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
interface Props{
    text:string;
}

const Button = ({text}:Props) => {
  return (
    <View>
       <TouchableOpacity className='flex flex-row rounded-full border border-primary justify-center p-3 mx-8 my-4'>
              <Text className=' text-lg text-primary'>{text}</Text>
            </TouchableOpacity>
    </View>
  )
}

export default Button