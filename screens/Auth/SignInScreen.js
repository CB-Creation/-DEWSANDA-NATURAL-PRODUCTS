import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,TextInput ,Image} from 'react-native';


export default function SignInScreen({navigation}) {
	const state={
    email:"",
    password:""
  }
    
    return (
      <>
      <View style={styles.container}>
        <Image source={{uri:"https://www.prolificdigital.co.uk/wp-content/uploads/2020/08/rsz_pd_logo_transparent.png"}}
                	   style={{width: 300, height: 50}}
                />
      </View>
    <View style={styles.inputView} >
        <TextInput  
        style={styles.inputText}
        placeholder="Email..." 
        placeholderTextColor="#003f5c"
        onChangeText={text => this.setState({email:text})}/>
    </View>
    <TouchableOpacity>
      <Text style={styles.inputView}>Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity>
      <Text style={styles.inputView}>Signup</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn}>
      <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      </>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#fb5b5a",
    marginBottom:40
  },
  inputView:{
    width:"80%",
    backgroundColor:"#465881",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"white"
  },
   forgot:{
    color:"white",
    fontSize:11
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  }
});