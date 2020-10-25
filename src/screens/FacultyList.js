  
import React from "react"
import { Text, View, FlatList, StyleSheet} from "react-native"


const FacultyList = () => {
    const faculty = [
        { name: "●	Dr Fazlul Hasan Siddiqui", key: '1'}, 
        { name: "●	Dr Md. Abdul Hakim Khan", key: '2'}, 
        { name: "●	Mr Sohel Ahmed", key: '3'},
        { name: "●	Mr Ashraful Alam Khan", key: '4'},
        { name: "●	Mr Mohayeminul Islam" , key: '5'},
        { name: "●	Mr Tasnim Ahmed", key: '6'},
      ]
      
      return (
        <View style={styles.viewStyle}>
          <FlatList
            data={faculty}
            renderItem={function ({ item }) {
              return <Text style={styles.textStyle}>{item.name}</Text>
            }}
          />
        </View>
      )
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    color: "green",
    marginVertical: 30,
  },
  viewStyle: {
    alignSelf: 'center',
},
})

export default FacultyList
