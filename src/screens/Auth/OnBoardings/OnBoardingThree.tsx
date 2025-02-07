import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import images from '../../../assets/images/images';
import MHButton from '../../../components/MHButton';
import { styles } from './styles';
import { HOME } from '../../../navigators/Stack';
import Dots from './Dots';

type RootStackList = {
    navigation: any;
};

const OnBoardingThree = ({ navigation }: RootStackList) => {

    const handlePress = () => {
        navigation.navigate(HOME)
    };

    return (
        <ImageBackground
            source={images.OnBoardingOne}
            style={styles.background}
        >
            <View style={styles.container}>
                <Text style={styles.title}>SİNEMA DÜNYASINA DALIŞ</Text>
                <Text style={styles.description}>Sinema dünyasının derinliklerine adım atın!    Film ve hikayelerin büyülü dünyasına dalmaya hazır olun.</Text>
                <View style={styles.btnContainer}>
                    <Dots status={3} />
                    <MHButton onPress={handlePress}>
                        İLERİ
                    </MHButton>
                </View>
            </View>
        </ImageBackground>
    );
};

export default OnBoardingThree;
