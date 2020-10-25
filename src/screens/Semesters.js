import React from "react"
import {View, StyleSheet, Button} from "react-native"

const Semesters = (props) => {
  return (
    <View style={styles.viewStyle}>
      <View style = {styles.buttonStyle}>
        <Button
          title="1st Semsester"
          onPress={function (){
            props.navigation.navigate("semester1");
            }
          }
          color="cornflowerblue"
        /> 
      </View>

      <View style = {styles.buttonStyle}>
        <Button
          title="2nd Semsester"
            onPress={function (){
              props.navigation.navigate("semester2");
              }
            }
          color="cornflowerblue"
        />
      </View>

      <View style = {styles.buttonStyle}>
        <Button
          title="3rd Semsester"
            onPress={function (){
              props.navigation.navigate("semester3");
              }
          }
          color="cornflowerblue"
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 40,
    color: "blue",
  },
  viewStyle: {
      marginHorizontal: 70,
      marginVertical: 50,
      backgroundColor: "lightblue" 
  },
  buttonStyle: {
    marginVertical: 60,
},
})

export default Semesters