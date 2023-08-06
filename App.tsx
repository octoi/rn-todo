import { StatusBar } from 'expo-status-bar';
import { Text, TouchableNativeFeedback, View } from 'react-native';

export default function App() {
  return (
    <View className='bg-app-dark1 h-screen relative'>
      <View className='w-full p-5 pt-10 bg-app-dark2'>
        <Text className='text-app-text text-2xl font-bold'>Todo App</Text>
      </View>
      <TouchableNativeFeedback
        onPress={() => {}}
        background={TouchableNativeFeedback.Ripple('#D2D4D7', false)}
      >
        <View className='bg-app-accent w-16 h-16 rounded-full flex items-center justify-center absolute bottom-5 right-5'>
          <Text className='text-app-text text-3xl'>+</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}
