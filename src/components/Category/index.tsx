import React from 'react'
import { View, Text, ScrollView, FlatList  } from 'react-native'
import { SvgProps } from 'react-native-svg'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'

import styles from './styles'

type Props = RectButtonProps & {
    title: string;
    icon: React.FC<SvgProps>;
}





export default function Category ({
    title,
    icon: Icon,
    ...rest
}:Props) {
   
       

    return (
      <RectButton {...rest}>
          <View style={styles.container}>
          <View style={styles.content}>
              <Icon 
                width={40}
                height={40}
                color='#005AA6'
              />
             
          </View>
            <Text style={styles.title}>
                { title }
            </Text>
            </View>
      </RectButton>
    )
}