import React, { useState, useEffect} from 'react';
import {
    View, 
    Text, 
    StyleSheet, 
    TextInput, 
    Platform,
    FlatList,
} from 'react-native';
import SkillCard from '../components/SkillCard';
import Button from '../components/Button';

export default function Home(){

    const [newSkill, setNewSkill] = useState('');
    const [mySkill, setMySkill] = useState([]);
    const [greeting, setGreeting] = useState('');

    function handleNewSkill(){
        setMySkill(oldState => [...oldState, newSkill])
    }

    useEffect( () => {
        const greeting = new Date().getHours();
        
        if(greeting < 12){
            setGreeting('Bom dia!');
        }else if(greeting >= 12 && greeting < 18){
            setGreeting('Boa tarde!');
        }else{
            setGreeting('Boa noite!');
        }

    }, []);

    return (
        <View style={styles.container}>
            
            <Text style={styles.styleText}>Bem-vindo! Guilherme</Text>
            <Text>{greeting}</Text>
            <TextInput
                style={styles.input}
                placeholder='Insira a sua skill'
                onChangeText={setNewSkill}
            />

            <Button onPress={handleNewSkill} />

            <Text style={[styles.styleText, {marginTop: 50}]} >My skills</Text>

            <FlatList
                data={mySkill}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <SkillCard skill={item} />
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1C1C1C',
        paddingHorizontal: 20,
        paddingVertical: 70,
        paddingHorizontal: 30
    },
    styleText: {
        fontSize: 25,
        color: '#fff',
        fontWeight: 'bold',
    },
    input: {
        marginTop: 20,
        borderRadius: 5,
        backgroundColor: '#363636',
        color: '#fff',
        padding: Platform.OS === 'ios' ? 15 : 10,
    },
})