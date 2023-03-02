import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'

const Start = ({ date, time }) => {

    return (
        <View>
            <View style={styles.start}>
                <Text>Start Time</Text>
                <Text style={styles.startText}>Today, 7:36pm</Text>
            </View>
            <View style={styles.line} />
        </View>
    )
}

export default Start

const styles = StyleSheet.create({
    start: {
        flexDirection: 'row', 
        marginTop: 10,
        marginLeft: 20
    },
    startText: {
        marginLeft: 50,
        marginBottom: 10
    },
    line: {
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#eeeee4',
    }
})