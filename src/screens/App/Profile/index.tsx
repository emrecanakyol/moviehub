import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { Button, Title, Divider, IconButton } from 'react-native-paper';
import { colors } from '../../../utils/colors';
import images from '../../../assets/images/images';
import { responsive } from '../../../utils/responsive/responsive';
import styles from './styles';

const ProfileScreen = () => {

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={images.defaultProfile}
                    style={styles.profileImage}
                />
                <View style={styles.userInfo}>
                    <Title style={styles.userName}>Emre Can Akyol</Title>
                    <Text style={styles.userEmail}>emrecan@example.com</Text>
                </View>
                <IconButton
                    icon="pencil"
                    size={24}
                    style={styles.editIcon}
                />
            </View>

            <Divider style={styles.divider} />

            <Button
                mode="contained"
                style={styles.button}
                icon="account-cog"
            >
                Hesap Detaylarım
            </Button>

            <Divider style={styles.divider} />

            <Button
                mode="contained"
                style={styles.button}
                icon="account"
            >
                Profil Bilgilerim
            </Button>

            <Divider style={styles.divider} />

            <Button
                mode="contained"
                style={styles.button}
                icon="cogs"
            >
                Ayarlar
            </Button>
        </ScrollView>
    );
};

export default ProfileScreen;
