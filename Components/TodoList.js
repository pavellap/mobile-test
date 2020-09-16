import React from 'react'
import {Text, FlatList, View} from 'react-native'

export default function({ list }) {
    return (
        <View>
            <FlatList data={list} renderItem={({item, index}) => <Text style={{color: "#000"}} key={index}>{item.text}</Text>}/>
        </View>
    )
}
