import * as React from "react";
import { useState } from "react";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Pressable, StyleSheet, Text, View, TextInput, Alert } from "react-native";
import { Color, FontFamily, Padding, Border, FontSize } from "../GlobalStyles";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config.js/firebase";
const Login = () => {

    const navigation=useNavigation();
    
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email !== "" && password !== "") {
      signInWithEmailAndPassword(auth, email, password)
        .then(navigation.navigate('Home'))
        .catch((err) => Alert.alert("Login error", err.message));
    }
      else{
        Alert.alert("fill all credentials");
      }
    }; 

    return (
        <View style={styles.loginSignup}>
          <View style={styles.signuplogin}>
            <View style={styles.image123Parent}>
              <Image
                style={styles.image123Icon}
                contentFit="cover"
                source={require("../assets/icons/logo.svg")}
              />
              <Text style={[styles.myntra, styles.loginTypo]}>Myntra</Text>
            </View>
            <View style={[styles.frameParent, styles.parentSpaceBlock]}>
            <View  style={styles.signUpWrapper}>
                <Text style={[styles.login, styles.loginTypo]}>Login</Text>
              </View>
              <Pressable onPress={()=>navigation.navigate("SignUp")} style={[styles.loginWrapper, styles.loginWrapperFlexBox]}>
                <Text style={[styles.login, styles.loginTypo]}>Sign Up</Text>
              </Pressable>
              
            </View>
            <View style={styles.parentSpaceBlock}>
              
              <View style={[styles.passwordGroup, styles.passwordGroupFlexBox]}>
                <TextInput style={styles.password} placeholder="Email" 
                value={email}
                onChangeText={setEmail}/>
                
              </View>
              <View style={[styles.passwordGroup, styles.passwordGroupFlexBox]}>
                <TextInput placeholder="Password" style={styles.password} 
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
                />
                <Image
                  style={styles.instanceLayout}
                  contentFit="cover"
                  source={require("../assets/icons/eye.svg")}
                />
              </View>
              <Pressable style={[styles.signUpContainer, styles.passwordGroupFlexBox]} onPress={handleLogin}>
                <Text style={styles.signUp1}>Login</Text>
              </Pressable>
            </View>
          </View>
        </View>
      );
}


const styles = StyleSheet.create({
    loginTypo: {
      color: Color.colorBlack,
      textAlign: "left",
      fontFamily: FontFamily.xSMALL,
      fontWeight: "500",
    },
    parentSpaceBlock: {
      marginTop: 25,
      alignSelf: "stretch",
    },
    loginWrapperFlexBox: {
      padding: Padding.p_3xs,
      flexDirection: "row",
      alignItems: "center",
    },
    passwordBorder: {
      borderWidth: 0.4,
      borderColor: Color.selected,
      borderRadius: Border.br_8xs,
      borderStyle: "solid",
    },
    instanceLayout: {
      marginLeft: 10,
      height: 14,
      width: 17,
    },
    passwordGroupFlexBox: {
      marginTop: 10,
      padding: Padding.p_3xs,
      alignSelf: "stretch",
      flexDirection: "row",
      alignItems: "center",
    },
    image123Icon: {
      width: 40,
      height: 34,
    },
    myntra: {
      fontSize: FontSize.h4_size,
      marginLeft: 5,
      textAlign: "left",
    },
    image123Parent: {
      justifyContent: "center",
      flexDirection: "row",
      alignItems: "center",
    },
    login: {
      fontSize: FontSize.smallRegular_size,
      textAlign: "left",
    },
    loginWrapper: {
      height: 34,
      justifyContent: "center",
      flex: 1,
    },
    signUpWrapper: {
      borderColor: Color.myntraPrime,
      borderBottomWidth: 2,
      borderStyle: "solid",
      padding: Padding.p_3xs,
      height: 34,
      justifyContent: "center",
      flexDirection: "row",
      alignItems: "center",
      flex: 1,
    },
    frameParent: {
      flexDirection: "row",
    },
    password: {
      fontSize: FontSize.size_base,
      fontFamily: FontFamily.smallRegular,
      color: Color.selected,
      textAlign: "left",
      flex: 1,
    },
    instanceChild: {
      display: "none",
    },
    passwordParent: {
      padding: Padding.p_3xs,
      flexDirection: "row",
      alignItems: "center",
      alignSelf: "stretch",
      borderColor: Color.selected,
      borderRadius: Border.br_8xs,
    },
    passwordGroup: {
      borderWidth: 0.4,
      borderColor: Color.selected,
      borderRadius: Border.br_8xs,
      borderStyle: "solid",
    },
    signUp1: {
      fontSize: FontSize.h5Black_size,
      color: Color.lightForegroundsFgOnInverted,
      textAlign: "left",
      fontFamily: FontFamily.xSMALL,
      fontWeight: "500",
    },
    signUpContainer: {
      borderRadius: Border.br_11xl,
      backgroundColor: Color.myntraPrime,
      height: 35,
      justifyContent: "center",
    },
    signuplogin: {
      position: "absolute",
      top: 194,
      left: 28,
      width: 334,
      alignItems: "center",
    },
    loginSignup: {
      backgroundColor: Color.lightForegroundsFgOnInverted,
      width: "100%",
      height: 844,
      overflow: "hidden",
      flex: 1,
    },
  });

export default Login
