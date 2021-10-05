import React, {Component} from 'react';
import {View, Text, Image,TextInput, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {siri, img} from '../assets';
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {email:'',password:''};
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#239b56'}}>
        <View>
          <Text
            style={{
              fontSize: 26,
              color: '#ecf0f1',
              fontWeight: '600',
              textAlign: 'center',
              margin: '7%',
            }}>
            Enter Username & Password
          </Text>
        </View>
        <View style={{alignSelf: 'center',}}>
        <View>
            <TextInput
            // keyboardType='phone-pad'
            secureTextEntry={true}
              style={{
               
                borderWidth: 1,
                fontSize: 14,
                height: 40,
                width: 200,
                margin: 10,
                color:'white',borderColor:'white'
              }}
              value={this.state.email}
              onChangeText={(text)=>this.setState({email:text})}
              placeholder="email"/>
              <MaterialIcons name='email' size={30} color='white'/>

          </View>
          <View>
          <View>
            <TextInput
              style={{
               
                borderWidth: 1,
                fontSize: 14,
                height: 40,
                width: 200,
                margin: 10,
                color:'white',borderColor:'white'
              }}
              placeholder="password"></TextInput>
          </View>
          </View>
        </View>

        <View>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Home',{email:this.state.email})}>
            <Text style={{
              fontSize: 27,
              borderRadius:10,
              alignSelf:'center',
              width:'35%',
              textAlign:'center',
              fontWeight: '400',
              backgroundColor:'white',
              marginTop:'5%'
             
            }}> Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
