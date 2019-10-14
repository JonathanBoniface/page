import React from 'react'
import {StyleSheet, TextInput, View, Text, ActivityIndicator} from 'react-native'


export default class Search extends React.Component {


    constructor(props){
        super(props)
        this.state = {
            joueur: 'Jonathan'

        }
    }
    render() {

        return(
            <View style = {style.view}>
            <View style = {style.head}>
            <TextInput
                style={{height: 40, }}
                value={this.state.joueur}

            />
                <TextInput
                    style={{height: 40,}}
                    value={this.state.joueur}

                />

                <TextInput
                    style={{height: 40,}}
                    value={this.state.joueur}

                />

             </View>
                <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style = {style.deck}>
                        <Text>Deck</Text>
                        <ActivityIndicator color="#FF0000" size="large" animating={true}/>

                    </View>
                <View style = {style.pioche}>
                    <Text>Pioche</Text>
                    <ActivityIndicator color="#FF0000" size="large" animating={true}/>


                    <View style = {style.main}>
                        <Text>Main</Text>
                        <View style={ { flex:1 ,flexDirection: 'row'}}>
                            <ActivityIndicator color="#FF0000" size="large" animating={true}/>
                            <ActivityIndicator color="#FF0000" size="large" animating={true}/>
                            <ActivityIndicator color="#FF0000" size="large" animating={true}/>
                        </View>
                    </View>
                </View>



                </View>
<View>

</View>
                <View>

                </View>


            </View>



        )
    }
}


const style = StyleSheet.create({

    view:{


    },
    head:{
        borderColor:'gray',
        borderWidth: 1,

    },
    pioche:{
        textAlign: 'center',

        marginTop: 70,
        borderColor:'gray',
        borderWidth: 1,
        backgroundColor:'green',
        height: 300,
        width: 350

    },
    deck:{
        textAlign: 'center',

        marginTop: 70,
        borderColor:'gray',
        borderWidth: 1,
        backgroundColor:'blue',
        height: 100,
        width: 150

    },
    main:{
        flex:3,
        backgroundColor:'pink',

        height: 100,
        marginTop: 400,


    }
})