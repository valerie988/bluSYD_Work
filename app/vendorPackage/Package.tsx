import { View, Text, ScrollView, TouchableOpacity, FlatList, } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link, router } from 'expo-router'

const Package = () => {
  const [acctiveTab, setActiveTab] = useState("Monthly")
  const monthCardData = [
    {id:1,
     text:"Enjoy increased visibility and advanced tools to attract more buyers. Ideal for consistent sellers who want to maximize their success.",
     price:"19.99",
     features:[
      "List up to 5 vehicles or 2 properties",
      "Enhanced search visibility",
      "Featured listings once a month",
      "Priority photo slots (up to 15)",
      "Email & chat support within 24 hours",
      "60-day listing duration",
      "Basic analytics dashboard",
      "Social media sharing tools",
     ]
    },
     {id:2,
     text:"Enjoy increased visibility and advanced tools to attract more buyers. Ideal for consistent sellers who want to maximize their success.",
     price:"24.99",
     features:[
      "List up to 10 vehicles or 5 properties",
      "Enhanced search visibility",
      "Featured listings once a month",
      "Priority photo slots (up to 20)",
      "Email & chat support within 24 hours",
      "75-days listing duration",
      "Basic analytics dashboard",
      "Social media sharing tools",
     ]
    },
     {id:3,
     text:"Enjoy increased visibility and advanced tools to attract more buyers. Ideal for consistent sellers who want to maximize their success.",
     price:"49.99",
     features:[
      "List up to 20 vehicles or 10 properties",
      "Enhanced search visibility",
      "Featured listings once a month",
      "Priority photo slots (up to 30)",
      "Email & chat support within 24 hours",
      "100-days listing duration",
      "Basic analytics dashboard",
      "Social media sharing tools",
     ]
    },
  ];

  const yearlyCardData = [
    {id:1,
     text:"Enjoy increased visibility and advanced tools to attract more buyers. Ideal for consistent sellers who want to maximize their success.",
     price:"99.99",
     features:[
      "List up to 5 vehicles or 2 properties",
      "Enhanced search visibility",
      "Featured listings once a month",
      "Priority photo slots (up to 15)",
      "Email & chat support within 24 hours",
      "60-day listing duration",
      "Basic analytics dashboard",
      "Social media sharing tools",
     ]
    },
     {id:2,
     text:"Enjoy increased visibility and advanced tools to attract more buyers. Ideal for consistent sellers who want to maximize their success.",
     price:"199.99",
     features:[
      "List up to 10 vehicles or 5 properties",
      "Enhanced search visibility",
      "Featured listings once a month",
      "Priority photo slots (up to 20)",
      "Email & chat support within 24 hours",
      "75-days listing duration",
      "Basic analytics dashboard",
      "Social media sharing tools",
     ]
    },
     {id:3,
     text:"Enjoy increased visibility and advanced tools to attract more buyers. Ideal for consistent sellers who want to maximize their success.",
     price:"499.99",
     features:[
      "List up to 20 vehicles or 10 properties",
      "Enhanced search visibility",
      "Featured listings once a month",
      "Priority photo slots (up to 30)",
      "Email & chat support within 24 hours",
      "100-days listing duration",
      "Basic analytics dashboard",
      "Social media sharing tools",
     ]
    },
  ];


  const handleSelect = ()=>{
    router.push("./Payment")
  }

 
  return (
    <SafeAreaView>
        <ScrollView 
        bounces={false}
         >
            {/* Title */}
            <View className='bg-primary rounded-b-3xl flex flex-row justify-center items-center'>
                <Text className='text-white py-9 text-4xl mt-10'>Become a Vendor</Text>
            </View>

            {/*choose plan*/}
            <View className='flex flex-col items-center'>
                <Text className='text-xl mt-3 font-medium'>Choose Subscription Plan</Text>
                <View className='flex flex-row mt-3'>
                 {acctiveTab == "Monthly" ?   <TouchableOpacity onPress={()=>{setActiveTab("Monthly")}} className='rounded-l-lg border border-primary justify-center bg-primary py-2 px-10 '><Text className=' text-lg text-white'>Monthly</Text></TouchableOpacity>:  <TouchableOpacity onPress={()=>{setActiveTab("Monthly")}} className='rounded-l-lg border border-primary justify-center bg-zinc-200 py-2 px-10 '><Text className=' text-lg text-primary'>Monthly</Text></TouchableOpacity>}
                 {acctiveTab == "Yearly" ?   <TouchableOpacity onPress={()=>{setActiveTab("Yearly")}} className='rounded-r-lg border border-primary justify-center bg-primary py-2 px-10 '><Text className=' text-lg text-white'>Yearly</Text></TouchableOpacity>:  <TouchableOpacity onPress={()=>{setActiveTab("Yearly")}} className='rounded-r-lg border border-primary justify-center bg-zinc-200 py-2 px-10 '><Text className=' text-lg text-primary'>Yearly</Text></TouchableOpacity>}
                </View>
                {acctiveTab == "Monthly" ?  
                <FlatList 
                  data ={monthCardData}
                  horizontal
                  bounces = {false}
                  renderItem={({item}) => (
                    <View className='mt-4 p-4'>
                        <View className=' bg-primary border border-primary rounded-2xl w-xlarge'>
                                          <View className='bg-primary p-5 rounded-t-lg'>
                                              <Text className=' text-white text-xl mt-10 mb-3'>Business Plan ⭐</Text>
                                              <Text className=' text-white'>{item.text}</Text>
                                          </View>
                                          <View className=' bg-zinc-200 border border-primary rounded-2xl p-5'>
                                              <Text className='text-primary text-2xl'>FCFA {item.price}/month</Text>
                                              <View className='list-disc'>
                                                     {item.features.map((feature,index) => <Text className='py-2' key={index}>{feature}</Text>)}
                                              </View>
                      
                                              {/* button */}
                                              <TouchableOpacity onPress={handleSelect} className='flex flex-row rounded-full border border-primary bg-primary justify-center px-3 py-2 mx-16 my-6'>
                                                  <Text className=' text-lg text-white'>Select</Text>
                                              </TouchableOpacity>
                      
                                              <Link href="/" className='text-center font-medium'>Learn More</Link>
                                              
                                          </View>
                                      </View>
                    </View>
                  )}

                />:
                 <FlatList 
                  data ={yearlyCardData}
                  horizontal
                  bounces = {false}
                  renderItem={({item}) => (
                    <View className='mt-4 p-4'>
                        <View className=' bg-primary border border-primary rounded-2xl w-xlarge'>
                                          <View className='bg-primary p-5 rounded-t-lg'>
                                              <Text className=' text-white text-xl mt-10 mb-3'>Business Plan ⭐</Text>
                                              <Text className=' text-white'>{item.text}</Text>
                                          </View>
                                          <View className=' bg-zinc-200 border border-primary rounded-2xl p-5'>
                                              <Text className='text-primary text-2xl'>FCFA {item.price}/month</Text>
                                              <View className='list-disc'>
                                                     {item.features.map((feature,index) => <Text className='py-2' key={index}>{feature}</Text>)}
                                              </View>
                      
                                              {/* button */}
                                              <TouchableOpacity onPress={handleSelect} className='flex flex-row rounded-full border border-primary bg-primary justify-center px-3 py-2 mx-16 my-6'>
                                                  <Text className=' text-lg text-white'>Select</Text>
                                              </TouchableOpacity>
                      
                                              <Link href="/vendorPackage/LearnMore" className='text-center font-medium'>Learn More</Link>
                                              
                                          </View>
                                      </View>
                    </View>
                  )}

                />}
               
            </View> 
    
        </ScrollView>
    </SafeAreaView>
   
  )
}

export default Package