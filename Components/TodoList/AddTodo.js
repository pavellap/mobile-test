import React, {useState} from 'react'
import {View, Button, Alert, TextInput, StyleSheet} from 'react-native'


export default function({addTodo}) {
    const [text, handleText] = useState("");

    const handleAdd = () => {
        console.log("Current text: ", text)
        if (text !== "") {
            addTodo({
                title: text,
                id: new Date().toString()
            })
            handleText("")
        }
        else
            Alert.alert("Todo text cant be empty")
    }

    return (
        <View style={styles.container}>
            <TextInput value={text} onChangeText={handleText} style={styles.input} onSubmitEditing={handleAdd}/>
            <Button title='Add todo Item' onPress={handleAdd}/>
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
