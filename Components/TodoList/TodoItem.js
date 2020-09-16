import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

export default function({ data }) {
    return (
        <TouchableOpacity
            onLongPress={}
        >
            <View style={styles.container}>
                <Text style={styles.text}>{data}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        borderColor: "#eee",
        borderWidth: 2,
        borderRadius: 4,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: 10
    },
    text: {
        color: "#123fff"
    }
})
