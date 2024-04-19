import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View className="flex flex-1 justify-center items-center ">
      <Text className="text-3xl">Aora wwwww asdasd</Text>
      <Link href="/home">Go to home</Link>
      <StatusBar style="auto" />
    </View>
  );
}


