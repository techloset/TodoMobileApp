import { StyleSheet, Text, View, Image, ScrollView, Pressable, ImageBackground, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import React from 'react'

const footer = (require('../asserts/Subtract.png'))
const Home = ({ navigation }: any) => {
  return (
    <ScrollView style={{ flex: 1, }} >
      <View style={styles.first}>
        <Image source={require('../asserts/menu.png')} />
        <Text style={{ fontSize: 13, color: (`#5D6065`), marginRight: 135, marginTop: 9, fontFamily: 'Montserrat-Regular', }}>June 03, 2020</Text>
        <Image source={require('../asserts/Profile.png')} />
      </View>
      <Text style={{ fontSize: 18, marginTop: 4, marginBottom: 6, marginLeft: 24, fontFamily: 'Montserrat-Bold', color: ('#000000') }}>My Tasks</Text>

      <View style={{ flex: 5, justifyContent: 'space-around', alignContent: 'space-around', display: 'flex', flexDirection: 'row', marginHorizontal: 12 }}>
        <View style={styles.box1}>
          <View style={{
            shadowColor: "#962DFF",
            shadowOffset: {
              width: 0,
              height: 18,
            },
            shadowOpacity: 0.25,
            shadowRadius: 20.00,
            elevation: 24,

          }}>

            <LinearGradient colors={['#FF699F', '#FF005C']} style={styles.linearGradient}>
              <Image source={require('../asserts/Vector1.png')} style={{ width: 21, height: 21, marginLeft: 130, marginTop: 15 }} />
              <Image source={require('../asserts/app.png')} style={{ marginLeft: -30, marginTop: -50, width: 163, height: 177 }} />
              <Text style={styles.mobile}>Mobile App  Design</Text>
              <Text style={{ fontSize: 9, fontFamily: 'Montserrat-Regular', color: 'white', marginLeft: 20, marginTop: 3 }}>10Tasks</Text>
            </LinearGradient>
          </View>
          <View style={{


          }}>

            <LinearGradient colors={['#CFA1FE', '#8205FF']} style={styles.thirdLinear}>
              <Image source={require('../asserts/pencil.png')} style={{ marginLeft: -10, marginTop: -20, width: 116, height: 118 }} />
              <Text style={styles.pending}>Logo </Text>
              <Text style={{ fontSize: 9, fontFamily: 'Montserrat-Regular', color: 'white', marginLeft: 20, marginTop: 12 }}>2 Tasks</Text>
              <Image source={require('../asserts/Vector1.png')} style={{ width: 21, height: 21, marginLeft: 120, marginTop: -20 }} />
            </LinearGradient>
          </View>
        </View>
        <View style={styles.box2}>

          <View style={{
            shadowColor: "#962DFF",

            shadowOffset: {
              width: 0,
              height: 5,
            },
            shadowOpacity: 0.25,
            shadowRadius: 15.00,
            elevation: 20
          }}>

            <LinearGradient colors={['#FFCA0F', '#F36803FC']} style={styles.secLinear}>
              <Image source={require('../asserts/Vector1.png')} style={{ width: 21, height: 21, marginLeft: 120, marginTop: 15 }} />
              <Image source={require('../asserts/pending.png')} style={{ marginLeft: -10, marginTop: -45, width: 116, height: 118 }} />
              <Text style={styles.pending}>Pending </Text>
              <Text style={{ fontSize: 9, fontFamily: 'Montserrat-Regular', color: 'white', marginLeft: 20, marginTop: 12 }}>16 Tasks</Text>
            </LinearGradient>
          </View>
          <View style={{

          }}>

            <LinearGradient colors={['#00F0FF', '#00F0FF']} style={styles.forthGradient}>
              <Image source={require('../asserts/web.png')} style={{ marginLeft: 7, marginTop: 20, width: 91, height: 108 }} />
              <Text style={styles.wesite}>Website
                Design</Text>
              <Text style={{ fontSize: 9, fontFamily: 'Montserrat-Regular', color: 'white', marginLeft: 20, marginTop: 3 }}>16 Tasks</Text>
              <Image source={require('../asserts/Vector1.png')} style={{ width: 21, height: 21, marginLeft: 120, marginTop: -20 }} />
            </LinearGradient>
          </View>
        </View>
      </View>

      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginTop: 2 }}>
        <Text style={{
          fontSize: 24, color: '#6C6868', fontFamily: 'Montserrat-Bold',
        }}>On Going</Text>
        <Text style={{ fontSize: 12, color: '#FF0C64', marginTop: 7, fontFamily: 'Montserrat-Regular', }}>See all</Text>

      </View>
      <View>
        <Text style={{
          fontSize: 14, color: '#000000', width: 170, lineHeight: 17, fontFamily: 'Montserrat-Bold',
          marginLeft: 20, marginTop: 10
        }}>Startup website design
          with responsive</Text>
      </View>
      <View style={{ flex: 1 }}>
        <View style={styles.date}>
          <Image source={require('../asserts/Group.png')} style={{ width: 102, height: 18, marginLeft: 20, marginTop: 10 }} />
          <Image source={require('../asserts/book.png')} style={{ height: 118, width: 94, marginRight: 30, marginTop: -30, }} />
        </View>
      </View>
      <View style={{ backgroundColor: '#F6A3F347', width: 98, height: 22, borderRadius: 5, marginLeft: 20, marginTop: -30 }}>
        <Text style={{ fontSize: 10, fontFamily: 'Montserrat-Bold', color: '#F05CEA', textAlign: 'center', paddingTop: 3 }}>Complete: 80%</Text>
      </View>
      <View style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>

        <TouchableOpacity onPress={() => navigation.navigate('Task')} >
          <View style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}  >

            <LinearGradient colors={['#F7ADF4', '#E906E0']} style={styles.icon}>
              <Image source={require('../asserts/plus.png')} style={{ marginTop: 23, marginLeft: 23, height: 21, width: 21 }} />

            </LinearGradient>

          </View>
        </TouchableOpacity>

        <View style={{ marginTop: -25 }}>
          <ImageBackground source={footer} style={{ height: 81 }}>

            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 40, marginTop: 30 }}>
              <View style={{ display: 'flex', flexDirection: 'row', gap: 38 }}>




                <Image source={require('../asserts/Menu5.png')} style={{ width: 22, height: 22, }} />
                <Image source={require('../asserts/Option.png')} style={{ height: 22, width: 22, }} />

              </View>
              <View style={{ display: 'flex', flexDirection: 'row', gap: 38 }}>

                <Image source={require('../asserts/Option2.png')} style={{ width: 22, height: 23, }} />
                <Image source={require('../asserts/Group10.png')} style={{ height: 22, width: 18, }} />
              </View>
            </View>
          </ImageBackground>
        </View>
      </View>
    </ScrollView>


  )
}

export default Home

const styles = StyleSheet.create({
  first: {

    justifyContent: 'space-between',

    marginHorizontal: 20,

    marginTop: 40,
    flexDirection: 'row'
  },



  linearGradient: {

    height: 206,
    width: 166,
    borderRadius: 20,

    shadowColor: "#FF015C",
    shadowOffset: {
      width: 12,
      height: 24,
    },
    shadowOpacity: 2.25,
    shadowRadius: 16.00,
    elevation: 32

  },
  icon: {
    width: 67,
    height: 67,
    borderRadius: 67,
    display: 'flex',

    alignSelf: 'center'

  },

  buttonText: {
    fontSize: 18,
  },
  mobile: {
    fontSize: 18,
    color: 'white',
    width: 120,
    fontWeight: '700',
    marginTop: -30,
    marginLeft: 20
  },
  secLinear: {
    width: 156,
    height: 145,
    borderRadius: 20,
    shadowColor: "#962DFF",
    shadowOffset: {
      width: 20,
      height: 40,
    },
    shadowOpacity: 0.8,
    shadowRadius: 20,
    elevation: 50

  },
  pending: {
    fontSize: 16,
    color: 'white',
    fontWeight: '700',
    marginTop: -20,
    marginLeft: 20,

  },
  thirdLinear: {
    width: 157,
    height: 135,
    borderRadius: 20,
    backgroundColor: '',
    elevation: 10,
    shadowColor: '#962DFF',
    shadowOffset: {
      width: 20,
      height: 40,
    },
    shadowOpacity: 1,
    shadowRadius: 30,



  },
  box1: {

    flexDirection: 'column',

    gap: 20,






  },
  box2: {
    flexDirection: 'column',
    gap: 20,
  },
  wesite: {
    fontSize: 18,
    fontWeight: '700',
    color: 'white',
    width: 100,
    marginLeft: 20
  }, forthGradient: {

    height: 206,
    width: 156,
    borderRadius: 20,
  },
  date: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'


  },



})