import React from 'react';
import {
    Text, 
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

export default function SkillCard({ skill }){
    return(
        <TouchableOpacity key={skill}>
            <Text style={styles.textResult}>{skill}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    textButton: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    textResult: {
        marginTop: 30,
        fontSize: 18,
        fontWeight: 'bold',
        backgroundColor: '#4F4F4F',
        borderRadius: 50,
        padding: 15,
        textAlign: 'center'
    }
})