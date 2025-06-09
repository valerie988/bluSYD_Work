import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
interface Props{
    image:any;
    text:string;
}

const MediaSign = ({image,text}:Props) => {
  return (
    <View>
      <TouchableOpacity className='flex flex-row border border-primary rounded-full items-center p-2 mx-8 my-4'>
        <Image source={image} className='w-8 h-8 ml-5'/>
        <Text className='ml-14 text-lg text-primary'>{text}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default MediaSign