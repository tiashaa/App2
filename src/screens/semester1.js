import React from "react"
import { Text, View, FlatList, StyleSheet} from "react-native"

const semester1 = () => {
    const courses = [
        { name: "Computer Organization and Architecture (CSE 4305)", key: '1'},
        { name: "Data Structures (CSE 4303)", key: '2'},
        { name: "Database Management System (CSE 4307)", key: '3'},
        { name: "Linear Algebra (Math 4341)", key: '4'},
        { name: "Object Oriented Concepts 2 (SWE 4301)", key: '5'},
        { name: "Theory of Computing (CSE 4309)", key: '6'},
      ]

      return (
        <View style={styles.viewStyle}>
          <FlatList
            data={courses}
            renderItem={function ({ item }) {
              return <Text style={styles.textStyle}>{item.name}</Text>;
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

export default semester1