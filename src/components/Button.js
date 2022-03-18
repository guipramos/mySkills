import React from 'react';
import {
    Text, 
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

export default function SkillCard({onPress}){
    return(
        <TouchableOpacity 
            style={styles.button}
            onPress={onPress}
        >
            <Text style={styles.textButton}>Add skills</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#4B0082',
        padding: 15,
        marginTop: 30,
    },
    textButton: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
})