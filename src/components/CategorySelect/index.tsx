import React from 'react'
import { ScrollView, FlatList  } from 'react-native'

import styles from './styles'
import { categories } from '../../utils/categories'
import Category from '../Category'







export default function CategorySelect () {
   
       

    return (
      <ScrollView 
      horizontal
      
      style={styles.container}
      showsHorizontalScrollIndicator={false}

      >
          {
              categories.map(category => (
                  <Category 
                  key={category.id}
                  title={category.title}
                  icon={category.icon}
                  
                  
                  />
              ))
          }

      </ScrollView>
    )
}