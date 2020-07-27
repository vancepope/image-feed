import React, { useContext } from "react";
import { View, StyleSheet, TouchableWithoutFeedback, Animated } from "react-native";
import { FontAwesome5, Feather } from "@expo/vector-icons";
import { AppContext } from "../context/AppContext";

export default function AddButton(props) {
    const [state, setContext] = useContext(AppContext);
    const thermometerX = state.mode.interpolate({
        inputRange: [0, 1],
        outputRange: [-24, -100]
    });

    const thermometerY = state.mode.interpolate({
        inputRange: [0, 1],
        outputRange: [-50, -100]
    });

    const timeX = state.mode.interpolate({
        inputRange: [0, 1],
        outputRange: [-24, -24]
    });

    const timeY = state.mode.interpolate({
        inputRange: [0, 1],
        outputRange: [-50, -150]
    });

    const pulseX = state.mode.interpolate({
        inputRange: [0, 1],
        outputRange: [-24, 50]
    });

    const pulseY = state.mode.interpolate({
        inputRange: [0, 1],
        outputRange: [-50, -100]
    });

    const rotation = state.mode.interpolate({
        inputRange: [0, 1],
        outputRange: ["0deg", "45deg"]
    });

    const sizeStyle = {
        transform: [{ scale: state.buttonSize }]
    };

    function handlePress() {
        Animated.sequence([
            Animated.timing(state.buttonSize, {
                toValue: 0.95,
                duration: 200,
                useNativeDriver: false,
            }),
            Animated.timing(state.buttonSize, {
                toValue: 1,
                useNativeDriver: false,
            }),
            Animated.timing(state.mode, {
                toValue: state.mode._value === 0 ? 1 : 0,
                useNativeDriver: false,
            })
        ]).start();
    };

    return (
        <View style={{ alignItems: "center" }}>
            <Animated.View style={{ position: "absolute", left: thermometerX, top: thermometerY }}>
                <View style={styles.secondaryButton}>
                    <Feather name="thermometer" size={24} color="#FFF" />
                </View>
            </Animated.View>
            <Animated.View style={{ position: "absolute", left: timeX, top: timeY }}>
                <View style={styles.secondaryButton}>
                    <Feather name="clock" size={24} color="#FFF" />
                </View>
            </Animated.View>
            <Animated.View style={{ position: "absolute", left: pulseX, top: pulseY }}>
                <View style={styles.secondaryButton}>
                    <Feather name="activity" size={24} color="#FFF" />
                </View>
            </Animated.View>
            <Animated.View style={[styles.button, sizeStyle]}>
                <TouchableWithoutFeedback onPress={handlePress} underlayColor="#7F58FF">
                    <Animated.View style={{ transform: [{ rotate: rotation }] }}>
                        <FontAwesome5 name="plus" size={24} color="#FFF" />
                    </Animated.View>
                </TouchableWithoutFeedback>
            </Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        justifyContent: "center",
        width: 72,
        height: 72,
        borderRadius: 36,
        backgroundColor: "#222e61",
        position: "absolute",
        marginTop: -50,
        shadowColor: '#fff',
        borderWidth: 3,
        borderColor: "#fff"
    },
    secondaryButton: {
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: "#222e61"
    }
});
