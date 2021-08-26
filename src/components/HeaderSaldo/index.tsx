import React from 'react'
import { View, Text  } from 'react-native'

import styles from './styles'


export default function HeaderSaldo () {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>R$000,00</Text>
                <Text style={styles.subTitle}>Saldo Disponível</Text>
                <Text style={styles.title2}>R$000,00</Text>
                <Text style={styles.subTitle}>Agendado até 31/mês</Text>
                
            </View>
        </View>
    )
}