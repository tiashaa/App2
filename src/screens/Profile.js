import React from "react"
import { Text, View, StyleSheet, Image} from "react-native"

const Profile = () => {
  return (
    <View style={styles.viewStyle}>
        <Image
                source = {require ('../../Image/profile.jpg')}
                style={styles.imageStyle}
        />
        <Text style = {styles.textStyle}>
            Name:Tiasha{"\n"}
            Student ID: 170042041{"\n"}
            Room No: F-501{"\n"}
            Email: hriditanur@iut-dhaka.edu{"\n"}
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    textStyle: {
      fontSize: 18,
      color: "black",
      alignSelf: "center",
    },
    viewStyle: {
      margin: 50,
      alignSelf: "center",
      backgroundColor: "lightgrey"
    },
    imageStyle: {
      margin: 26,  
      height: 260,
      width: 260,
      alignSelf: 'center',
  },
  })

export default Profile