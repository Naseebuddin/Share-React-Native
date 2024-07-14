import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import imagePath from '../constant/imagePath';
import Share from 'react-native-share';

const Home = () => {
  const options = {
    url:'https://www.youtube.com/@appstackengineer',
  }


  const shareApp = async () =>{
     try {
      const res = await Share.open(options);
      console.log(res,'res');
      
     }catch(error){
      console.log(error,'error');
      
     }
  }

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity style={styles.btnStyle} onPress={()=>shareApp()}>
        <Image
          style={styles.shreIceStyle}
          source={imagePath.share}
          resizeMode="contain"
        />
        <Text style={styles.btnTextStyle}>Share App</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  btnStyle: {
    borderWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#a65959',
    padding: 20,
    borderRadius: 12,
    width: '80%',
    flexDirection: 'row',
  },
  btnTextStyle: {
    fontSize: 32,
    color: 'black',
    fontStyle: 'italic',
  },
  shreIceStyle: {
    width: 42,
    height: 42,
    marginRight: 12,
  },
});
