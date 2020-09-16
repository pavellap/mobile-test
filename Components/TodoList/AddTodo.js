import React, {useState} from 'react'
import {View, Button, Text, TextInput, StyleSheet} from 'react-native'


export default function() {
    const [text, handleText] = useState("");

    return (
        <View style={styles.container}>
            <TextInput style={styles.input}/>
            <Button title='Add todo Item'/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        paddingVertical: 10
    },
    input: {
        width: "65%",
        borderBottomWidth: 2,
        borderBottomColor: "#ccc",
    }
})
