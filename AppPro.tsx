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
        <View style={[styles.container, { backgroundColor: isDark ? 'white' : '#121212' } ]}>
            <Text style={isDark ? styles.whiteText: styles.blackText }>
            This code write in TSX - typescript 
        </Text>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent : 'center',
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
