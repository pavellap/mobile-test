import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, View, Platform, Text, FlatList} from 'react-native';
import NavBar from "./Components/NavBar";
import AddTodo from "./Components/TodoList/AddTodo";
import TodoItem from "./Components/TodoList/TodoItem";
const initialTodoState = [
    {
        id: '1',
        title: "First Todo"
    },
    {
        id: '2',
        title: "Second Todo"
    },
    {
        id: '3',
        title: "Third Todo"
    },
    {
        id: '4',
        title: "Fourth Todo"
    },
    {
        id: '5',
        title: "Fifth Todo"
    },
    {
        id: '6',
        title: "Sixth Todo"
    }
]

export default function App() {

    const [todos, handleTodos] = useState(initialTodoState);
    const removeTodo = id => handleTodos(prevState => prevState.filter(item => item.id !== id))

    return (
        <View style={styles.container}>
            <NavBar />
            <AddTodo addTodo={item => handleTodos(prevState => [...prevState, item])}/>
            <FlatList
                style={styles.list}
                data={todos}
                keyExtractor={item => item.id}
                renderItem={({item}) => (<TodoItem handleRemove={removeTodo} data={item}/>)}
            />
            <Text>You are running application on platform: {Platform.OS}</Text>
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
    list: {
        width: '80%',
        paddingHorizontal: 20
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


