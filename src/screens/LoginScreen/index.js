import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "./styles";
import firebase from "../../../config/firebase";
import { circle } from "react-native/Libraries/Animated/Easing";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function Login(navigation) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorLogin, setErrorLogin] = useState("");

  const loginFirebase = () => {
    const auth = getAuth();
    if (errorLogin) {
      setErrorLogin(false);
    }
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        //navigation.navigate("HomeScreen", {idUser: user.uid})
        // ...
      })
      .catch((error) => {
        setErrorLogin(true);
        console.log("nao achou")
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  useEffect(() => {}, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <Text style={styles.ect}>
        {" "}
        ECT<Text style={styles.max}>MAX</Text>
      </Text>

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        placeholderTextColor={"#B0C4DE"}
        type="text"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />

      <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder="Senha"
        placeholderTextColor={"#B0C4DE"}
        type="text"
        onChangeText={(text) => setPassword(text)}
        value={password}
      />

      {errorLogin === true && (
        <View style={styles.contentAlert}>
          <MaterialCommunityIcons
            name="alert-circle"
            size={24}
            color="#bdbdbd"
          />
          <Text style={styles.warningAlert}>Senha ou E-mail inválido!</Text>
        </View>
      )}
      <TouchableOpacity
        disabled={email === "" || password === ""}
        onPress={loginFirebase}
        style={styles.buttonLogin}
      >
        <Text style={styles.textButtonLogin}>Login</Text>
      </TouchableOpacity>

      <View style={{ flexDirection: "row" }}>
        <Text style={styles.registration}>Não tem uma conta?</Text>
        <Text
          style={[styles.linkSubscribe]}
          onPress={() => navigation.navigate("RegistroScreen")}
        >
          Registre-se
        </Text>
      </View>
      <View style={{ height: 100 }}></View>
    </KeyboardAvoidingView>
  );
}
