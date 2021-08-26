import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    header: {
      flex: 1,
      position: "absolute",
      top: 0.2,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: 156,
      backgroundColor: '#005AA6',
      borderBottomWidth: 4,
      borderBottomColor: '#FEED00',


    },

    logoImg: {
        width: 32,
        height: 32,
        position: "absolute",
        left: 20,
        top: 40,

        
    },
    icons: {
        width: 90,
        padding: 10,
        flex: 1,
        flexDirection: 'row', 
        position: 'absolute',
        right: 8,
        bottom: 75,
        paddingRight: 2,
        justifyContent: 'space-around',
        
    },
    title: {
        flex: 1,
        justifyContent: 'flex-start',
        left: 19,
        top: 30,
        marginTop: 25,
  
    },






  });
  

  export default styles