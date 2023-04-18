// // import { StyleSheet, Text, View, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity } from 'react-native'
// // import React from 'react'
// // import Task from './components/Task'

// // const App = () => {

// //   return (
// //     <View style={styles.container} >
// //       <View style={styles.task}>
// //         <Text style={styles.todo}>   Todo        </Text>
// //         <View style={styles.items}>
// //           <Task text={'task 1'} />
// //           <Task text={'test 2'} />


// //         </View>


// //       </View>
// //       <KeyboardAvoidingView
// //         behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
// //         style={styles.writeTaskWrapper}>
// //         <TextInput style={styles.input} placeholder={'write a task'} />
// //         <TouchableOpacity>
// //           <View style={styles.addWrapper}>
// //             <Text style={styles.addText}>+</Text>

// //           </View>
// //         </TouchableOpacity>
// //       </KeyboardAvoidingView>

// //     </View>
// //   )
// // }

// // export default App

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,


// //     backgroundColor: 'white',


// //   },
// //   task: {

// //     paddingTop: 80,
// //     paddingHorizontal: 20,
// //   },
// //   todo: {
// //     fontSize: 24,
// //     fontWeight: 'bold'
// //   },
// //   item: {},
// //   writeTaskWrapper:{
// //     position: 'absolute',
// //     bottom:60,
// //     width:'100%',
// //     flexDirection:'row',
// //     justifyContent:'space-between',


// //   },

// // })


// import { Button, StyleSheet, Text, TouchableOpacity, View,Alert } from 'react-native'
// import LinearGradient from 'react-native-linear-gradient';
// import React from 'react'
// const App = () => {
//   return (
//     <View style={styles.first}>
//       <TouchableOpacity style={styles.second}>
//         <LinearGradient colors={['#8205FF', '#CFA1FE']} style={{ borderRadius: 5 }}>
//         <Button
//         title="PrHGYUGss me"
//         onPress={() => Alert.alert('Simple Button pressed')}
//       />
//           {
//           /* 
//           <Button style={{ fontSize: 20, fontWeight: 'bold', color: 'white', paddingHorizontal: 5 }}>Skip</Button> */}
//         </LinearGradient>
//       </TouchableOpacity>
//     </View>
//   )
// }
// export default App

// const styles = StyleSheet.create({
//   first: {

//     backgroundColor: 'blue'

//   },
//   second: {
//     width: 80,
//     height: 28,
//     marginLeft: 170,
//     marginTop: 37,

//   }
// })



// import {
//   StyleSheet, Text, View, ActivityIndicator, Image, TextInput, Platform,

//   KeyboardAvoidingView,
//   Button,
//   Linking
// } from 'react-native'
// import React from 'react'

// const App = () => {
//   const [text, setText] = React.useState('Hello World')
//   return (
//     <View style={styles.container}>
/* <ActivityIndicator size={'small'} />
<Text style={styles.text}>React Native</Text>
<Image source={require('./asserts/native.png')} style={styles.image} />
<KeyboardAvoidingView
  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
  style={styles.container}>
  <TextInput
    style={styles.input}
    onChangeText={setText}
    value={text}
    placeholder='Enter your text'
  />
</KeyboardAvoidingView>
<View style={{ paddingBottom: 300 }}>
  <Button title='youtube'
    onPress={() => {
      Linking.openURL(`https://www.youtube.com/watch?v=pGKUQc6lHnc`)
    }} /> */

//       {/* </View> */}
//       <View style={styles.hello}>
//       <View style={[styles.box, {backgroundColor: 'powderblue'}]} />
//       <View style={[styles.box, {backgroundColor: 'skyblue'}]} />
//       <View style={[styles.box, {backgroundColor: 'steelblue'}]} />
//       </View>

//     </View>
//   )
// }

// export default App

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
// alignItems: 'center',
// justifyContent:'space-between',
// flexDirection:'row',

// },
// text: {
//   fontSize: 40,
//   fontWeight: '700',
//   color: 'green',
//   borderWidth: 5,
//   marginTop: 5,
//   marginHorizontal: 50

// },
// image: {
//   height: 150,
//   width: 150
// },
// input: {
//   borderBottomColor: 'green',
//   borderBottomWidth: 2,
//   margin: 5,
//   padding: 10,
//   alignSelf: 'stretch',

// },
// hello: {

// padding:100,
// marginBottom: 150,


//   flexDirection:'column',
//   justifyContent:'space-between',
//   alignItems:'center'


//   },
//   box:{
//     width:50,
//     height:50,
//   }
// })


// In App.js in a new project
import { Text, View, Button } from 'react-native'

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirstScreen from './source/screen/FirstScreen';
import Home from './source/screen/Home';
import Task from './source/screen/Task';


const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName='Screen' screenOptions={{ headerShown: false }}>
        <Stack.Screen name='First Screen' component={FirstScreen} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Task' component={Task} />

        {/* <Stack.Screen name='Login' component={Login} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}



export default App;

