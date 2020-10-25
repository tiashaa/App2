import React from 'react'
import { Text, View, FlatList, StyleSheet } from 'react-native'

const semester3 = () => {
  const courses = [
    { name: 'Design Patterns (SWE 4501)', key: '1' },
    { name: 'Introduction to Cloud Computing (CSE 4559)', key: '2' },
    { name: 'Numerical Methods (Math 4543)', key: '3' },
    { name: 'Operating Systems (CSE 4501)', key: '4' },
    { name: 'Server Programming (SWE 4537)', key: '5' },
    { name: 'Software Security (SWE 4503)', key: '6' }
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
    color: 'blue',
    marginVertical: 20,
  },
  viewStyle: {
    margin: 15,
  }
})

export default semester3