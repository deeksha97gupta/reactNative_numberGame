import React from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, Image } from 'react-native';
import BodyText from '../components/BodyText';
import Color from "../constants/color";
import MainButton from '../components/MainButton';


const GameOverScreen = props => {
    return (
        <ScrollView>
            <View style={styles.screen}>
                <Text> The Game is Over </Text>
                <View style={styles.imageContainer}>
                    <Image 
                        // source={require('../assets/images.jpg')}
                        source={{uri: 'data:image/jpeg;base64,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'}}
                        style={styles.image}
                    />
                </View>
                <BodyText style={styles.resultText}>
                    Your Phone needed <Text style={styles.highlight}>{props.roundsNumber} </Text> rounds
                    to guess number <Text style={styles.highlight}>{props.userNumber}</Text>
                </BodyText>  
                <MainButton onPress={props.onRestart}>  
                NEW GAME
                </MainButton>   
            </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    imageContainer: {
        width: Dimensions.get('window').width * 0.7,
        height: Dimensions.get('window').width * 0.7,
        borderRadius: Dimensions.get('window').width * 0.7 / 2,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical:  Dimensions.get('window').height / 30,
    },
    resultText: {
        textAlign: 'center',
        fontSize: Dimensions.get('window').height < 400 ? 16 : 20,
    },
    highlight: {
        color: Color.primary,
    }
 });
 
 export default GameOverScreen;