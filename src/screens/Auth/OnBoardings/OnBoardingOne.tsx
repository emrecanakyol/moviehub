import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import images from '../../../assets/images/images';
import MHButton from '../../../components/MHButton';
import { styles } from './styles';
import { ONBOARDINGTWO } from '../../../navigators/Stack';
import Dots from './Dots';

type RootStackList = {
    navigation: any;
};

const OnBoardingOne = ({ navigation }: RootStackList) => {

    const handlePress = () => {
        navigation.navigate(ONBOARDINGTWO)
    };

    return (
        <ImageBackground
            source={images.OnBoardingOne}
            style={styles.background}
        >
            <View style={styles.container}>
                <Text style={styles.title}>FİLMİ ŞİMDİ ÜCRETSİZ İZLE</Text>
                <Text style={styles.description}>Şimdi filmin keyfini ücretsiz olarak çıkarın! Hemen izlemeye başlayabilirsiniz.</Text>
                <View style={styles.btnContainer}>
                    <Dots status={1} />
                    <MHButton onPress={handlePress}>
                        İLERİ
                    </MHButton>
                </View>
            </View>
        </ImageBackground>
    );
};

export default OnBoardingOne;
