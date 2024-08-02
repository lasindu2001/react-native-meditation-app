import { View, Text, ImageBackground, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import MEDITATION_IMAGES from '@/constants/meditation-images'
import AppGradient from '@/components/AppGradient'
import { router, useLocalSearchParams } from 'expo-router'
import { AntDesign } from '@expo/vector-icons'
import CustomButton from '@/components/CustomButton'
import { formatTime } from '@/utils/timeUtils'

const Meditate = () => {
  const { id } = useLocalSearchParams();

  const [isMeditating, setIsMeditating] = useState(false);
  const [secondsRemaining, setSecondsRemaining] = useState(10)

  useEffect(() => {
    let timerId: NodeJS.Timeout
    if (secondsRemaining === 0) {
      setIsMeditating(false);
      return
    }
    if (isMeditating) {
      timerId = setTimeout(() => {
        setSecondsRemaining(secondsRemaining - 1);
      }, 1000);
    }
    return () => {
      clearTimeout(timerId);
    };
  }, [secondsRemaining, isMeditating])

  const { minutes, seconds } = formatTime(secondsRemaining)

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
              <Text className="text-4xl text-blue-800 font-rmono">
                {minutes}:{seconds}
              </Text>
            </View>
          </View>
          <View className="mb-5">
            <CustomButton
              title="Adjust Duration"
              onPress={() => console.log('adjust')}
            />
            <CustomButton
              title={isMeditating ? "Stop" : "Start Meditation"}
              onPress={() => setIsMeditating(true)}
              containerStyles="mt-4"
            />
          </View>
        </AppGradient>
      </ImageBackground>
    </View>
  )
}

export default Meditate