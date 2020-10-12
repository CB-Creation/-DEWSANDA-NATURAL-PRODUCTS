import * as React from 'react'
import { StyleSheet,Text ,View,Button,Image} from 'react-native'

export default function HomeScreen({navigation}) {
    return (
    	<>
    	<Button
      title="SignIn Our DataBase For More Offers"
      onPress={() =>
        navigation.navigate('SignIn')}
    />

    <Button
    title="Store"
    onPress={() =>
        navigation.navigate('Product')}
    />
        <View>
                <Text style={styles.title}>HomeScreen</Text>
                <Image source={{uri:"https://www.prolificdigital.co.uk/wp-content/uploads/2020/08/rsz_pd_logo_transparent.png"}}
                	   style={{width: 300, height: 50}}
                />
        </View>
        </>
    )
}

const styles=StyleSheet.create({
	title:{
		fontSize:20,
		marginLeft:300
	}
})