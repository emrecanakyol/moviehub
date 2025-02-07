import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import images from '../../../assets/images/images';
import MHButton from '../../../components/MHButton';
import { styles } from './styles';
import Dots from './Dots';
import { ONBOARDINGTHREE } from '../../../navigators/Stack';

type RootStackList = {
    navigation: any;
};

const OnBoardingTwo = ({ navigation }: RootStackList) => {

    const handlePress = () => {
        navigation.navigate(ONBOARDINGTHREE)
    };

    return (
        <ImageBackground
            source={images.OnBoardingTwo}
            style={styles.background}
        >
            <View style={styles.container}>
                <Text style={styles.title}>SONRAKİ MACERANIZA HAZIR OLUN</Text>
                <Text style={styles.description}>Yeni bir macera için hazır olun! Bir sonraki heyecan verici yolculuk sizi bekliyor.</Text>
                <View style={styles.btnContainer}>
                    <Dots status={2} />
                    <MHButton onPress={handlePress}>
                        İLERİ
                    </MHButton>
                </View>
            </View>
        </ImageBackground>
    );
};

export default OnBoardingTwo;
