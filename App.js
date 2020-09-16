import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import NavBar from "./Components/NavBar";
import AddTodo from "./Components/TodoList/AddTodo";


export default function App() {

    const [todos, handleTodos] = useState([]);
    const addTodo = title => handleTodos(prevState => [...prevState, title])

    return (
        <View style={styles.container}>
            <NavBar />
            <AddTodo />
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    input: {
        marginTop: 20,
        flexDirection: "row",
        width: "70%",
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 14,
        fontSize: 15
    }
});
