import React, { useContext } from 'react';
import{ StyleSheet, Text, TouchableOpacity, ActivityIndicator } from 'react-native'; 
import { AppContext } from '../context/AppContext';

export default function CustomButton({ color, title, onPress, disabled, isNotSignRegister }) { 
    const [state, setContext] = useContext(AppContext);
    return (
        <TouchableOpacity
            style={[styles.button, { borderColor: color }]} 
            onPress={onPress}
            disabled={disabled}
        > 
        {!state.loading && !isNotSignRegister ? 
                    ( 
                        <Text style={[styles.buttonText, styles.large, { color },]}>{title}</Text>
                    ) : 
                    (
                        <ActivityIndicator
                            animating={state.loading}
                            color={color}
                            size="large"
                        />
                    )
        }
        {
            isNotSignRegister && <Text style={[styles.buttonText, styles.large, { color },]}>{title}</Text>
        }
        </TouchableOpacity>
    ); 
}

const styles = StyleSheet.create({ 
    button: {
        marginTop: 10,
        minWidth: 100,
        borderWidth: 2,
        borderRadius: 3,
    }, 
    small: {
        fontSize: 14,
        padding: 5,
    },
    large: {
        fontSize: 16,
        padding: 10,
    },
    buttonText: {
        textAlign: 'center',
        fontWeight: 'bold', 
    },
    title: {
        fontSize: 14, fontWeight: 'bold',
    },
});