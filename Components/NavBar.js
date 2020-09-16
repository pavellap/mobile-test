import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Todo app</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderBottomColor: '#5181B8',
        backgroundColor: '#rgb(81,129,184)',
        justifyContent: "flex-end",
        alignItems: "center",
        width: '100%',
        paddingTop: 37,
        paddingHorizontal: 30,
        paddingBottom: 30
    },
    text: {
        color: "#fff",
        fontSize: 22
    }
})
