import React from "react"
import { Text, View, FlatList, StyleSheet} from "react-native"

const semester2 = () => {
    const courses = [
        { name: "Algorithms (CSE 4403)", key: '1'},
        { name: "Database Management System 2 (CSE 4409)", key: '2'},
        { name: "Data Communication and Networking (CSE 4411)", key: '3'},
        { name: "Engineering Ethics (HUM 4411)", key: '4'},
        { name: "Probability and Statistics (Math 4411)", key: '5'},
        { name: "Software Requirements & Specifications (SWE 4401)", key: '6'},
      ]

      return (
        <View style={styles.viewStyle}>
          <FlatList
            data={courses}
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
    color: "blue",
    marginVertical: 20,
  },
  viewStyle: {
    margin: 15,
},
})

export default semester2