import React from 'react'

import {View,Text, StyleSheet, ActivityIndicator} from 'react-native'


export default class About extends React.Component {

    render (){
        return (
             <View style = {style.view}>
            <Text style = {style.title}>A propos</Text>
            <Text style = {style.test}>Application Faites</Text>
             <ActivityIndicator color="#FF0000" size="large" animating={true}/>
            </View>
        )
    }
}


const style = StyleSheet.create({

    view:{
        margin:60
    },
    title:{
        fontSize: 22,
        marginBottom: 20
    },
    test:{
        fontSize: 42,
        marginBottom: 50
    }
})