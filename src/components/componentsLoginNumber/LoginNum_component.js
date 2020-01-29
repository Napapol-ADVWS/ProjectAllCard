import React from 'react';
import { Text, View, TextInput, TouchableOpacity, Image,TouchableWithoutFeedback,Keyboard, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import StyleSheet from '../componentsLoginNumber/styles'
import LinearGradient from 'react-native-linear-gradient';

class LoginNum extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          TextInputValue:"",
          warnnig:false
        }
      }
    onClickbutton = () =>{
        const {Nextto}=this.props;
        this.Nextto= Nextto;
        if(this.state.TextInputValue==""){
            this.setState({
                warnnig: true
            })
        }else{
            this.setState({
                warnnig: false
            })
            this.Nextto(this.state.TextInputValue);
        }
        
    }
    render() {
        return (
            <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss();}}>
            <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#182e68' }}>
                <Image
                    source={require('../componentsRegister/image/logo.png')}
                    style={{ width: 180, height: 180 }}
                />
                <Text style={StyleSheet.textLoginNum}>กรุณาใส่หมายเลขโทรศัพท์</Text>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <View style={StyleSheet.inputContainer}>
                        <Text style={{ paddingLeft: 15 }} />
                        <Icon name="ios-phone-portrait" color="#182e68" size={30} />
                        <Text style={{ paddingRight: 15 }} />
                        <Text style={StyleSheet.textphoneThai}>66+</Text>
                        <Text style={{ paddingRight: 15 }} />
                        <View style={{backgroundColor:'#DDD',height:45,width:2}}></View>
                        <Text style={{ paddingRight: 8 }} />
                        <TextInput style={{width:230}}
                            placeholder="MOBILE NUMBER"
                            onChangeText={TextInputValue=>this.setState({TextInputValue})}
                            keyboardType="numeric"
                        />
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        {
                            this.state.warnnig &&
                            <View>
                                <Text style={{color:'red'}}>กรุณาใส่หมายเลขโทรศัพท์ของท่านได้ถูกต้อง</Text>
                            </View>
                        }
                        <TouchableOpacity style={StyleSheet.buttonLogin} onPress={this.onClickbutton}>
                            <LinearGradient colors={['#FFFF00', '#ff9933', '#dd7534']} style={StyleSheet.gradient}>
                                <Text style={StyleSheet.textbuttonLoginNum}>Login</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: 180 }} />
                </View>
            </View>
            </TouchableWithoutFeedback>
        )
    }
}

export { LoginNum };