import { View, Text, ImageBackground, Pressable } from 'react-native'
import React, { useState } from 'react'
import MEDITATION_IMAGES from '@/constants/meditation-images'
import AppGradient from '@/components/AppGradient'
import { router, useLocalSearchParams } from 'expo-router'
import { AntDesign } from '@expo/vector-icons'
import CustomButton from '@/components/CustomButton'

const Meditate = () => {
  const { id } = useLocalSearchParams();

  const [isMeditating, setMeditating] = useState(false);

  return (
    <View className="flex-1">
      <ImageBackground
        source={MEDITATION_IMAGES[Number(id) - 1]}
        resizeMode="cover"
        className="flex-1"
      >
        <AppGradient colors={["transparent", "rgba(0, 0, 0, 0.8)"]}>
          <Pressable
            onPress={() => router.back()}
            className="absolute top-16 left-6 z-10"
          >
            <AntDesign name="leftcircleo" size={50} color="white" />
          </Pressable>
          <View className="flex-1 justify-center">
            <View className="mx-auto bg-neutral-200 rounded-full w-44 h-44 justify-center items-center">
              <Text className="text-4xl text-blue-800">
                00.00
              </Text>
            </View>
          </View>
          <View className="mb-5">
            <CustomButton
              title="Adjust duration"
              onPress={() => console.log('adjust')}
            />
            <CustomButton
              title={isMeditating ? "Stop" : "Start Meditation"}
              onPress={() => console.log('meditate')}
              containerStyles="mt-4"
            />
          </View>
        </AppGradient>
      </ImageBackground>
    </View>
  )
}

export default Meditate