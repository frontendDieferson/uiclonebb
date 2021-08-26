import React from 'react'
import { View, Text, Image, TouchableOpacity  } from 'react-native'
import styles from './styles'
import { StatusBar } from 'expo-status-bar';
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function Header() {
    return (
        
        <View style={styles.header}>
            <Image style={styles.logoImg} source={require ('../../../assets/logobb.jpg')} />
               
            <View style={styles.icons}>
                <TouchableOpacity>
                    <MaterialCommunityIcons 
                    name='message-bulleted'
                    size={28}
                    color='#FFF'

                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <MaterialCommunityIcons 
                    name='logout'
                    size={28}
                    color='#FFF'

                    />
                </TouchableOpacity>
               
            </View>
            <View style={styles.title}>
            <Text style={{
                fontSize: 29,
                color: '#FFF',
                fontWeight: '600'

            }}
            >
                Dieferson Soares
                </Text>

            </View>
           
            

            
            
        </View>
    )
}

