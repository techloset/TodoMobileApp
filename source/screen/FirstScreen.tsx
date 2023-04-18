// import { Text, View, Button } from 'react-native'
// import React from "react"

// const Home = ({ navigation }: any) => {
//   return (<View style={{
//     flex: 1, justifyContent: 'center', alignItems: 'center'
//   }}>

//     <Text style={{ fontSize: 30 }}>Home Screen</Text>
//     <Button title='Go to Home' onPress={() => navigation.navigate('Login')} />

//   </View>
//   )

// }
// export default Home


import { StyleSheet, Pressable, View, Text, Alert, TouchableOpacity, Image, ImageBackground, ScrollView } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';


// const Button = (props: any) => {
//   const { onPress, title = 'Save' } = props;
//   return (
//     <Pressable style={styles.button} onPress={onPress}>
//       <Text style={styles.text}>{title}</Text>
//     </Pressable>

//   );
// };
const image = (require('../asserts/footer.png'))
const circle = (require('../asserts/balloon.png'))

const FirstScreen = ({ navigation }: any) => {
  return (
    <>
      <ScrollView style={{ flex: 1 }}>
        <View style={{ flex: 1, }}>

          <TouchableOpacity>
            <LinearGradient colors={['rgba(207, 161, 254, 0.36)', 'rgba(130, 5, 255, 1)']} style={styles.linearGradient}>
              <Text style={styles.buttonText}>

                Skip
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 8, }}>

          <Image source={require('../asserts/mobile.png')} style={{ alignSelf: 'center' }} />
          <Text style={{ color: '#000000', fontSize: 22, fontWeight: '700', fontFamily: 'Montserrat-Bold', textAlign: 'center', marginTop: 15, }}>Manage your Tasks</Text>
          <Text style={{ fontSize: 14, fontWeight: '400', color: '#5D6065', fontFamily: 'Montserrat-Regular', width: 240, marginTop: 10, marginBottom: 20, height: 51, textAlign: 'center', alignSelf: 'center' }}>Organise all your to-do`s andlist your
            projects. Color tag them to set priority
            and categories</Text>
        </View>
        {/* <TouchableOpacity>
        <View style={styles.circle}>
        <Image source={require('../asserts/vector.png')} />
        </View>
        
      </TouchableOpacity> */}
        {/* <RadialGradient style={{ width: 67, height: 67 }}
        colors={['rgba(255, 255, 255, 0.01)', '#E906E0']}
        stops={[]}
        center={[179.1 % 179.1 % 50.75 % -101.49]}
        borderRadius={67}>
        
      </RadialGradient> */}

        <View style={{ flex: 1 }}>

          <TouchableOpacity onPress={() => navigation.navigate('Home')} >
            <View style={{ justifyContent: 'center', alignSelf: 'center' }}  >



              <ImageBackground source={circle} style={{ height: 67, width: 67 }}>
                <Image source={require('../asserts/vector.png')} style={{ marginTop: 18, marginLeft: 22 }} />

              </ImageBackground>
            </View>
          </TouchableOpacity>

          <View style={styles.footer}>
            <ImageBackground source={image} style={{ height: 109, display: 'flex', flexDirection: 'column' }} >
              <Text style={{ marginTop: 16, marginLeft: 46, color: 'white', fontSize: 14, fontWeight: '400' }}>Back</Text>
            </ImageBackground>

          </View>

        </View >
      </ScrollView >

    </>
  );
};

export default FirstScreen;







const styles = StyleSheet.create({


  text: {
    fontSize: 16,

    fontWeight: '400',

    color: 'white',
  },
  buttonText: {
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
    paddingTop: 2,
    textAlign: 'center',
    // justifyContent: 'center',
    // alignItems: 'center',

    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'flex-end',
    alignContent: 'flex-end',
    // alignSelf: 'flex-end',

    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  linearGradient: {


    borderRadius: 10,
    width: 80,
    height: 28,
    // marginLeft: 250,
    marginTop: 35,
    alignSelf: 'flex-end',
    marginRight: 30
    // marginBottom: -60
  },
  circle: {
    width: 67,
    height: 200,
    borderRadius: 67,
  },
  footer: {
    // height: 66,
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'column',
    // alignItems: 'flex-end',


    // alignSelf: 'flex-end',
    alignContent: 'flex-end',
  }

})
