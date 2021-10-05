import React, {Component} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import {siri, s} from '../assets';
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {name:"",email:'',skilss:'',cnic:'',address:''};
  }
onparam(){
  const{name,email,skilss,cnic,address}=this.state
  this.props.navigation.navigate('Home',{name,email,skilss,cnic,address})
  
  
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
              marginTop: '15%',
              marginBottom: '15%',
            }}>
            Enter Details to Signup
          </Text>
        </View>
        <View style={{alignSelf: 'center',}}>
          <View>
              
            <TextInput
              style={{
             
                borderWidth: 1,
                fontSize: 14,
                height: 40,
                width: 200,
                margin: 10,
                color:'white',
                borderColor:'white',


              }}
              onChangeText={(txt)=>this.setState({name:txt})}
              placeholder="yourname"/>
          </View>
          <View>
            <TextInput
              onChangeText={(txt)=>this.setState({email:txt})}
              style={{
               
                borderWidth: 1,
                fontSize: 14,
                height: 40,
                width: 200,
                margin: 10,
                color:'white',borderColor:'white'
              }}
              placeholder="email"/>
          </View>
          <View>
            <TextInput
              onChangeText={(txt)=>this.setState({skilss:txt})}
              style={{
          
                borderWidth: 1,
                fontSize: 14,
                height: 40,
                width: 200,
                margin: 10,
                color:'white',borderColor:'white'
              }}
              placeholder="skills"/>
          </View>
          <View>
            <TextInput
              onChangeText={(txt)=>this.setState({cnic:txt})}
              style={{
             
                borderWidth: 1,
                fontSize: 14,
                height: 40,
                width: 200,
                margin: 10,
                color:'white',borderColor:'white'
              }}
              placeholder="cnic"/>
          </View>
          <View>
            <TextInput
              onChangeText={(txt)=>this.setState({address:txt})}
              style={{
                
                borderWidth: 1,
                fontSize: 14,
                height: 40,
                width: 200,
                margin: 10,
                color:'white',borderColor:'white'
              }}
              placeholder="address"/>
          </View>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => this.onparam()}>
            <Text
              style={{
                fontSize: 27,
                borderRadius: 10,
                alignSelf: 'center',
                width: '50%',
                textAlign: 'center',
                fontWeight: '400',
                backgroundColor: 'white',
                marginTop: '5%',
              }}>
              Signup
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
