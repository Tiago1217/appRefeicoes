
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert, TextInput } from "react-native";
import { firebase } from "../firebase";

export default function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    function dados(user) {
        setUser(user)
        if (initializing) setInitializing(false);

    }

    function logar() {
        firebase.auth().signInWithEmailAndPasswordnW(email, senha)
            .then(() => {
                if (user) {
                    alert('Usuário não existe.')

                    return;
                }
                navigation.navigate('Rotas', { email })
            })
            .catch((error) => {
                alert(error);
                navigation.navigate('login')
            })
    }

    return (
        <View style={estilo.container}>
            <Text style={estilo.titulo}>Entrar no app Refeição</Text>

            <TextInput style={estilo.input} placeholder="Digite o Email." />
            <TextInput style={estilo.input} placeholder="Digite a Senha." />

            <TouchableOpacity style={estilo.botaoLogar}>
                <Text style={estilo.textoBotaoLogar}>Logar</Text>
            </TouchableOpacity>

        </View>
    );
}

const estilo = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#116611'
    },

    titulo: {
        fontSize: 50,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        marginBottom: 25,

    },

    input: {
        width: 250,
        height: 30,
        backgroundColor: '#5f5c',
        marginVertical: 10,
        borderRadius: 10,
        paddingHorizontal: 15,
        fontSize: 25
    },

    botaoLogar: {

        width: 250,
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
        marginVertical: 40,

    },

    textoBotaoLogar: {
        fontSize: 25,
        color: '#fff',
    },

})