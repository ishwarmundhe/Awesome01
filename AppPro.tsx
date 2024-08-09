import React from 'react';
import { 
    View,
    Text,
    StyleSheet,
    useColorScheme
} from 'react-native';

function AppPro(): JSX.Element {
    const isDark = useColorScheme() === 'dark';
    return (
        <View style={styles.container}>
        <Text  style={isDark ? styles.blackText : styles.whiteText}>
            This code write in TSX - typescript 
        </Text>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginVertical: 20
        
    },
    whiteText: {
        color:'black',
    },
    blackText: {
        color:'white'
    }

})

export default AppPro;
