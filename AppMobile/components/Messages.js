import React,{Component} from 'react';
import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity
} from 'react-native'

export default Messages = ({navigation}) => {
    return(
        <SafeAreaView style={{height: '100%', width: '100%', backgroundColor: '#fca788'}}>
          <View style={{height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center'}}>
            <View style={{height: '50%', width: '100%', justifyContent: 'flex-end', alignItems: 'center'}}>
              <Text style={{fontSize: 18}}>
                Webview - Messages
              </Text>
              <Text style={{fontSize: 16}}>
                Link: Messages.html
              </Text>
            </View>
            <View style={{height: '50%', width: '100%', justifyContent: 'flex-start', alignItems: 'center'}}>
              <TouchableOpacity onPress = {() => {
                navigation.navigate("vnexpress1");
                }}>
                  <Text>
                      Touch go to vnexpress.net
                  </Text>
              </TouchableOpacity>
            </View>
          </View>   
        </SafeAreaView>
    )
}

