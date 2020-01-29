import React from 'react';
import { Text, View, TextInput, TouchableOpacity,TouchableWithoutFeedback,Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import StyleSheet from '../componentsRegister/styles'
import LinearGradient from 'react-native-linear-gradient';
class Regis extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          TextInputValue:"",
        }
      }  
    Goto = () => {
        const {Nextto}=this.props;
        this.Nextto= Nextto;
        if(this.state.TextInputValue==""){
          this.Nextto(this.props.phonenumber);  
        }else{
          this.Nextto(this.state.TextInputValue);  
        }    
    } 
    
    render() {
        return (
            <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss();}}>
            <View style={{alignItems:'center',justifyContent:'center',backgroundColor:'#182e68'}}>
                <View>
                 <View style={{alignItems:'center'}}>
                    <Text style={StyleSheet.textRegister}>REGISTER</Text>
                </View>
                <View style={StyleSheet.inputContainer}>
                    <Text style={{ paddingLeft: 10 }} />
                    <Icon name="ios-contact" color="#182e68" size={30} />
                    <Text style={{ paddingRight: 8 }} />
                    <TextInput style={{width:230}}
                        value={this.props.givenName}
                        placeholder="NAME"
                    />
                </View>
                <View style={StyleSheet.inputContainer}>
                    <Text style={{ paddingLeft: 10 }} />
                    <Icon name="ios-contact" color="#182e68" size={30} />
                    <Text style={{ paddingRight: 8 }} />
                    <TextInput style={{width:230}}
                           value={this.props.familyName}
                        placeholder="LASTNAME"
                    />
                </View>
                <View style={StyleSheet.inputContainer}>
                    <Text style={{ paddingLeft: 15 }} />
                    <Icon name="ios-phone-portrait" color="#182e68" size={30}/>
                    <Text style={{ paddingRight: 15 }} />
                    <Text style={StyleSheet.textphoneThai}>66+</Text>
                    <Text style={{ paddingRight: 15 }} />
                    <View style={{backgroundColor:'#DDD',height:45,width:2}}></View>
                    <Text style={{ paddingRight: 8 }} />
                    <TextInput style={{width:230,fontSize:14}}
                        placeholder="MOBILE NUMBER"
                        value={this.props.phonenumber}
                        onChangeText={TextInputValue=>{this.setState({TextInputValue})}}
                        keyboardType="numeric"
                    />
                </View>
                {/*<View style={StyleSheet.inputContainer}>
                    <Text style={{ paddingLeft: 10 }} />
                    <Icon name="envelope-o" color="#182e68" size={30} />
                    <Text style={{ paddingRight: 8 }} />
                    <TextInput style={{width:230}}
                        placeholder="อีเมลล์"
                        value={this.props.email}
                        keyboardType="email-address"
                    />
                </View>*/}

                </View>
                <View style={{marginTop:210}}/>
                <View style={{alignItems:'center'}}>
                
                    <TouchableOpacity style={StyleSheet.buttonRegisSubmit} onPress={this.Goto}>
                        <LinearGradient colors={['#FFFF00', '#ff9933', '#dd7534']} style={StyleSheet.gradient}>
                            <Text style={StyleSheet.textbuttonRegis}>Next</Text>
                        </LinearGradient>
                    </TouchableOpacity>
               
                </View>      
                </View>
                </TouchableWithoutFeedback>
        )
    }
}

export {Regis};