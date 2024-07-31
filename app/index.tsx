import { StyleSheet, View, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <View className='flex-1 justify-center items-center'>
      <Text className='text-red-500'>Hello World</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  }
});
