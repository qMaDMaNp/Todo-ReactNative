import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Task = ({text}) => {
    return (
        <View style={styles.task}>
            <View style={styles.taskLeft}>
                <View style={styles.taskSquare}></View>
                <Text style={styles.taskText}>{text}</Text>
            </View>
            <View style={styles.circular}></View>
        </View>
    )
};

const styles = StyleSheet.create({
    task: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        marginTop: 15,
    },
    taskLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    taskSquare: {
        width: 24,
        height: 24,
        borderRadius: 5,
        marginRight: 15,

        backgroundColor: '#55BCF6',
        opacity: 0.5,
    },
    taskText: {
        maxWidth: '80%'
    },
    circular: {
        width: 12,
        height: 12,
        borderColor: '#55BCF6',
        borderWidth: 2,
        borderRadius: 5
    }
});

export default Task;