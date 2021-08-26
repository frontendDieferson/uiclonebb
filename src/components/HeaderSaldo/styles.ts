import React from "react"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
     
      width: '100%',
      maxHeight: 95,
      
      flexDirection: 'row',
      marginBottom: 370,
      backgroundColor: '#FFF',
      borderBottomWidth: 1,
      borderBottomColor: '#E7E1E1',
    
      

    },
    content: {
      width: "90%",
      padding: 10,
      margin: 10,
      left: 8,
      display: "flex",
      flexWrap: 'wrap',
      alignContent:'space-between',
      flexDirection: 'column',
 
    },
    title: {
      fontSize: 20,
      color: '#005AA6',
      fontWeight: 'bold',
      marginBottom: 5,

    },
    subTitle: {
      fontSize: 16,
      color: '#B1B1B1',
    },
    title2: {
      fontSize: 20,
      color: '#CC4749',
      fontWeight: 'bold',
      marginBottom: 5,
    }





  });
  

  export default styles