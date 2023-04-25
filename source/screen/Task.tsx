import { StyleSheet, ScrollView, View, Image, Text, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import List from '../components/List'
import TodoList from '../components/TodoList'
import LinearGradient from 'react-native-linear-gradient';

const Task = ({ navigation }: any) => {
  return (
    <>
      <View style={styles.container}>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 21, marginTop: 40 }}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')} >
            <Image source={require('../asserts/backVector.png')} style={{ width: 10, height: 15, marginTop: 15 }} />
          </TouchableOpacity>
          <Text style={{ color: '#000000', fontSize: 18, fontFamily: 'Montserrat-Bold', marginTop: 10 }}>Todays Tasks</Text>
          <Image source={require('../asserts/logo.png')} style={{ height: 48, width: 48, }} />
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 21, marginTop: 25 }}>
          <View style={{ display: 'flex' }}>
            <Text style={{ fontSize: 24, color: '#000000', fontFamily: 'Montserrat-Bold', }}>June, 03</Text>
            <Text style={{ fontSize: 13, color: '#5D6065', fontFamily: 'Montserrat-Regular', }}>16 task today</Text>
          </View>
          <View style={{
            shadowColor: "#8205FF",
            shadowOffset: {
              width: 0,
              height: 18,
            },
            shadowOpacity: 0.25,

            shadowRadius: 20.00,
            elevation: 24
          }}>

            <Image source={require('../asserts/Group12.png')} style={{ height: 48, width: 48 }} />
          </View>

        </View>
        <List />

        <TodoList />




      </View>

      <TouchableOpacity>
        <View style={{
          shadowColor: "#EE41E7",
          shadowOffset: {
            width: 0,
            height: 18,
          },
          shadowOpacity: 0.25,
          shadowRadius: 20.00,

          elevation: 24
        }}>


          <LinearGradient colors={['#FF48F8', '#E906E0']} style={{
            display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center', flexDirection: 'row', alignSelf: 'center', width: 258, height: 58, borderRadius: 15, marginBottom: 20,

          }} >
            <Text style={{ fontSize: 14, color: 'white', textAlign: 'center', alignItems: 'center', fontFamily: 'Montserrat-Bold', justifyContent: 'center', alignContent: 'center' }} >
              Add New Task
            </Text>
          </LinearGradient>
        </View>
      </TouchableOpacity>


    </>


  )
}


export default Task

const styles = StyleSheet.create({
  container: {
    flex: 1,

  }
})