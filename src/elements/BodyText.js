import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export class BodyText extends Component {
  render() {
    return (
      <View>
        <Text style={styles.text}>
          {this.props.children}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    color: '#000',
    backgroundColor: '#eee'
  }
})

export default BodyText
