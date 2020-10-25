import React from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';

 

 
const HomeScreen = (props)=>{
  return (
    <View style={styles.container}>
       <Image
                source={require ('../../Image/iut.jpg')}
                style={styles.imageStyle}
            />
     <Text style = {styles.textStyle}>Department of CSE{"\n"}Program: B.Sc. in SWE</Text>
     <TouchableOpacity onPress={function (){props.navigation.navigate("Profile");}}>
                <Text style = {styles.touchStyle}>My Profile</Text>
            </TouchableOpacity>
            <View style = {styles.buttonStyle}>
                <Button
                    title="Semesters"
                    onPress={function (){props.navigation.navigate("Semesters");}}
                    color="green"
                    margin="15"
                />
            </View>

            <View style = {styles.buttonStyle}>
                <Button
                    title="Faculty List"
                    onPress={function (){props.navigation.navigate("FacultyList");}}
                    color="green"
                />
            </View>
    </View>
  )
};

const styles = StyleSheet.create(
  {
      textStyle:{
          fontSize: 22,
          color: "black",
          textAlign: "center",
          margin: 10
      },
      imageStyle: {
          height: 300,
          width: 250,
          alignSelf: 'center',
      },
      viewStyle: {
          margin: 20,
          alignSelf: 'center',
          backgroundColor: "lightblue"
      },
      buttonStyle: {
          margin: 5,
      },
      touchStyle: {
          fontSize: 20,
          color:'white',
          textAlign: "center",
          marginHorizontal: 5,
          marginVertical: 10,
          backgroundColor: "cornflowerblue"
      },
  }
);
 
export default HomeScreen;