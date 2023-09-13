import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function LoginScreen() {
    return (
        <View>
            <View style={styles.screen}>
                <Text>Oiii</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        marginTop: 100,
        marginLeft: 200,
    },
})

export default LoginScreen;