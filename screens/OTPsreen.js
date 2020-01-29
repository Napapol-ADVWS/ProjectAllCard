import React from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import StyleSheet from '../src/components/componentsOTP/style'
import LinearGradient from 'react-native-linear-gradient';
export default class Login extends React.Component {
    Goto = () => {
        var page = "Login"
        const { changePage } = this.props;
        this.changePage = changePage;
        this.changePage(page);
    }
    render() {
        return (
            <View style={{backgroundColor: '#182e68',alignItems:'center',marginBottom:50}}>
                <View style={{ marginTop: 40 }} />
                <Text style={StyleSheet.TextHeadOTPScreen}>Confirm OTP</Text>
                <View style={{ marginTop: 40 }} />
                <Text style={StyleSheet.TextOTPScreen}>OTP was sent to mobile Number</Text>
                <View style={{ marginTop: 5 }} />
                <Text style={StyleSheet.TextPhoneOTP}>{this.props.phonenumber}</Text>
                <View style={StyleSheet.containerFormOTP}>
                    <TextInput
                        style={StyleSheet.InputOTP}
                        textAlign={'center'}
                        keyboardType='numeric'
                        maxLength={1}
                        ref="otpcode1"
                        onChangeText={(event) => {
                            this.setState({ otp1: event });
                            this.refs.otpcode2.focus()
                        }}
                        underlineColorAndroid='#fff' />
                    <TextInput
                        style={StyleSheet.InputOTP}
                        textAlign={'center'}
                        keyboardType='numeric'
                        maxLength={1}
                        ref="otpcode2"
                        onChangeText={(event) => {
                            this.setState({ otp2: event });
                            this.refs.otpcode3.focus()
                        }}
                        underlineColorAndroid='#fff' />
                    <TextInput
                        style={StyleSheet.InputOTP}
                        textAlign={'center'}
                        keyboardType='numeric'
                        maxLength={1}
                        ref="otpcode3"
                        onChangeText={(event) => {
                            this.setState({ otp3: event });
                            this.refs.otpcode4.focus()
                        }}
                        underlineColorAndroid='#fff' />

                    <TextInput
                        style={StyleSheet.InputOTP}
                        textAlign={'center'}
                        keyboardType='numeric'
                        maxLength={1}
                        ref="otpcode4"
                        onChangeText={(event) => {
                            this.setState({ otp4: event });
                            this.refs.otpcode5.focus()
                        }}
                        underlineColorAndroid='#fff' />

                    <TextInput
                        style={StyleSheet.InputOTP}
                        textAlign={'center'}
                        keyboardType='numeric'
                        maxLength={1}
                        ref="otpcode5"
                        onChangeText={(event) => {
                            this.setState({ otp5: event });
                            this.refs.otpcode6.focus()
                        }}
                        underlineColorAndroid='#fff' />

                    <TextInput
                        style={StyleSheet.InputOTP}
                        textAlign={'center'}
                        keyboardType='numeric'
                        maxLength={1}
                        ref="otpcode6"
                        onChangeText={(event) => {
                            this.setState({ otp6: event });
                            console.log(this.state)
                        }}
                        underlineColorAndroid='#fff' />
                </View>
                <TouchableOpacity style={StyleSheet.buttonOTPSubmit} onPress={this.Goto}>
                    <LinearGradient colors={['#FFFF00', '#ff9933', '#dd7534']} style={StyleSheet.gradient}>
                        <Text style={StyleSheet.textbuttonOTP}>ยืนยัน</Text>
                    </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={StyleSheet.recieveOTPButton}>*Cilck here if you can't recieve OTP Number</Text>
                </TouchableOpacity>
                <View style={{ marginTop: 200 }} />
            </View>
        );
    }
}




