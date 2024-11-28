import {Pressable, View} from "react-native";

export default function PrimaryButton({children}) {
    function pressHandler() {
        console.log('Pressed!');
    }

    return (
        <Pressable
            style={({pressed}) => pressed ? [styles.buttonOuterContainer, styles.pressed] : styles.buttonOuterContainer}
            onPress={pressHandler}
            android_ripple={{color: '#210644'}
            }
        >
            <View style={styles.buttonContainer}>
                <Text style={styles.buttonText}>{children}</Text>
            </View>;
        </Pressable>
    );
}

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden',
    },
    buttonInnerContainer: {
        backgroundColor: '#72063c',
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
    pressed: {
        opacity: 0.75
    }
});
