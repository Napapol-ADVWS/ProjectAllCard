import {StyleSheet} from 'react-native'

export default StyleSheet.create({
      textRegister: {
        fontSize:20,
        fontWeight: 'bold',
        color: '#FFF',
        paddingBottom: 10,
        marginTop:20,
        marginBottom:20,
      },
      textbuttonRegis:{
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
      },
      textphoneThai:{
        fontSize:15,
        color: '#182e68',
        fontWeight: 'bold',
      },
      inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius:30,
        width:280,
        height:45,
        marginBottom:20,
        flexDirection: 'row',
        alignItems:'center'
      },
      buttonRegisSubmit: {
        width:360,
        height:75,
        marginBottom: 20 ,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#dd7534',
        //borderRadius: 100 / 5,
        padding: 10,
      },
      gradient: {
        //flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        width:370,
        height:75,
      },
      cardRegister:{ 
        backgroundColor:'#ddd',
        alignItems:'center',
        marginTop:30,
        marginBottom:50,
        borderRadius: 100 / 5,
        height:350,
        width:320
      }
});