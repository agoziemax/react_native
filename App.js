import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Hi i am your de</Text>
      </View>

      <StatusBar style='auto' />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red'
  },
  content: {
    flex: 1,
    backgroundColor: 'red',
  },
});
