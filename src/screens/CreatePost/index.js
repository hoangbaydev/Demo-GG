import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import axios from "axios";

GoogleSignin.configure({
  scopes: ["https://www.googleapis.com/auth/drive.readonly"],

  webClientId:
    "1046017412155-52e1rsi0th0e5kqt75csi7l9dg25nsr3.apps.googleusercontent.com",
  offlineAccess: true,
  hostedDomain: "",
  forceCodeForRefreshToken: true,
  accountName: "",
  
});

const signIn = async () => {
  try {
    // await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    const res = await axios.post("http://192.168.1.45:4000/api/v1/users/loginWithGoogle", {
      tokenId: userInfo.idToken,
    });
    console.log(res.data);
    
  } catch (error) {
    console.log(`${error}`);

    // if (error.code === statusCodes.SIGN_IN_CANCELLED) {
    //   // user cancelled the login flow
    // } else if (error.code === statusCodes.IN_PROGRESS) {
    //   // operation (e.g. sign in) is in progress already
    // } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
    //   // play services not available or outdated
    // } else {
    //   // some other error happened
    // }
  }
};

export default function App() {
  return (
    <View style={styles.container}>
      <GoogleSigninButton
        style={{ width: 192, height: 48 }}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={signIn}
        // disabled={this.state.isSigninInProgress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
