import { StyleSheet, Text, View, TextInput, TouchableOpacity, Platform } from 'react-native'
import React, { useState, useEffect } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';

const Register = ({ navigation }) => {

  const [type, ] = useState(Platform.OS); 
  const [firstName, setFirstName] = useState(''); 
  const [lastName, setLastName] = useState(''); 
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState(''); 

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign up</Text>
      
      {/* registration form */}
      <View style={styles.form}>
          <TextInput 
            placeholder='First Name'
            value={firstName}
            onChangeText={text => setFirstName(text)}
            autoCorrect={false}
            style={styles.input}
          />
          <TextInput 
            placeholder='Last Name'
            value={lastName}
            onChangeText={text => setLastName(text)}
            autoCorrect={false}
            style={styles.input}
          />
          <TextInput 
            placeholder='Email'
            value={email}
            onChangeText={text => setEmail(text)}
            autoCapitalize="none"
            autoComplete="email"
            autoCorrect={false}
            style={styles.input}
          />
          <TextInput 
            placeholder='Password'
            value={password}
            onChangeText={text => setPassword(text)}
            autoCapitalize="none"
            autoComplete='off'
            autoCompleteType="password"
            secureTextEntry={true}
            autoCorrect={false}
            style={styles.input}
          />

          <TouchableOpacity
            style={styles.button}
          >
            <Text style={styles.buttonTitle}>continue</Text>
          </TouchableOpacity>

          <View style={styles.signup}>
            <Text>Already have an account, </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Login')}
            >
              <Text style={styles.signupText}>Sign in</Text>
            </TouchableOpacity>
          </View>
      </View>

      {/* alternative sign in i.e. google/apple sign in */}
      <View style={styles.alternative}>
        <Text style={styles.altTitle}>OR, USE ONE OF THE FOLLOWING</Text>    
        <View style={styles.line} />
        { (type === 'ios') ? 
          <>
            <TouchableOpacity 
              style={styles.item}
              onPress={() => console.log('sign in')}
            >
              <Ionicons name="ios-logo-apple" size={20} color="#D21401" />
              <Text style={styles.itemText}>Sign up with Apple</Text>
              <View style={styles.arrow}>
                <Ionicons name="chevron-forward" size={20} color="#D21401" />
              </View>
            </TouchableOpacity> 
            <View style={styles.line} />
          </> : null
        }
        <TouchableOpacity 
          style={styles.item}
          onPress={() => console.log('sign in')}
        > 
          <Ionicons name="ios-logo-google" size={20} color="#D21401" />
          <Text style={styles.itemText}>Sign up with Google</Text>
          <View style={styles.arrow}>
            <Ionicons name="chevron-forward" size={20} color="#D21401" />
          </View> 
        </TouchableOpacity>
        <View style={styles.line} /> 
      </View>




    </View>
  )
}

export default Register

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1, 
  },
  title: {
    marginLeft: 20,
    marginTop: 80,
    fontWeight: "200",
    fontSize: 30,
    marginBottom: 20
  },
  form: {
    marginLeft: 20,
    marginRight: 20
  },
  input: {
    height: 50, 
    borderBottomWidth: 1,
  },
  button: {
    marginVertical: 10, 
    flexDirection: 'row-reverse'
  },
  buttonTitle: {
    padding: 5,
    fontSize: 20,
    fontWeight: "200"
  },
  signup: {
    flexDirection: 'row',
    marginTop: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupText: {
    color: "#D21401"
  },
  line: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  alternative: {
    bottom: 0, 
    position: 'absolute', 
    marginBottom: 60,
    left: 0, 
    right: 0,
    marginHorizontal: 5
  },
  altTitle: {
    fontSize: 10,
    marginBottom: 5
  },
  item: {
    flexDirection: 'row',
    paddingVertical: 10,
    alignItems: 'center',
    paddingLeft: 5
  },
  itemText: {
    paddingLeft:20,
    textAlign: 'center'
  },
  arrow: {
    position: 'absolute',
    right: 0,
    marginRight: 5
  }
})