import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import {siri,s} from '../assets';
export default class Second extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#239b56'}}>
        <View>
          <Text
            style={{
              fontSize: 35,
              color: '#FF5733',
              fontWeight: '700',
              textAlign: 'center',
              marginTop: '20%',
            }}>
            Welcome To Airbin
          </Text>
        </View>

        <View>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('Signup')}>
            <Text style={{
              fontSize: 30,
              borderRadius:10,
              alignSelf:'center',
              width:'50%',
              textAlign:'center',
              fontWeight: '400',
              backgroundColor:'#f1c40f',
              marginTop: '20%',
            }}> Signup</Text>
          </TouchableOpacity>
        </View>
        <View>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Login')}>
            <Text style={{
              fontSize: 30,
              borderRadius:10,
              alignSelf:'center',
              width:'50%',
              textAlign:'center',
              fontWeight: '400',
              backgroundColor:'#3498db',
              marginTop: '7%',
            }}> Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
