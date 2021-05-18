import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import RazorpayCheckout from 'react-native-razorpay';

export default function App() {
  const [price, setprice] = useState();
  const final = price * 100;
  console.log(final);
  const pay = () => {
    var options = {
      description: 'text',
      image: 'https://i.imgur.com/3g7nmJC.png',
      currency: 'INR',
      key: 'rzp_test_4aWNFDmHRQURHC', // Your api key
      amount: final,
      name: 'foo',
      prefill: {
        email: 'void@razorpay.com',
        contact: '9191919191',
        name: 'Razorpay Software',
      },
      theme: {color: '#F37254'},
    };
    RazorpayCheckout.open(options)
      .then(data => {
        // handle success
        alert(`Success: ${data.razorpay_payment_id}`);
      })
      .catch(error => {
        // handle failure
        alert(`Error: ${error.code} | ${error.description}`);
      });
  };

  return (
    <View style={{backgroundColor: '#fff', height: '100%'}}>
      <TextInput
        style={{
          width:300,
          backgroundColor: '#ADD8E6',
          borderRadius: 15,
          color: '#000',
          alignSelf: 'center',top:300
        }}
        keyboardType="numeric"
        onChangeText={setprice}
        placeholder='amount'
        ></TextInput>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <TouchableOpacity
          onPress={() => {
            pay();
          }}
          style={{
            height: 40,
            width: 150,
            backgroundColor: '#0000A0',
            borderRadius: 10,
          }}>
          <Text
            style={{
              alignSelf: 'center',
              top: 0,
              color: '#FFF',
              fontWeight: 'bold',
              fontSize: 25,
            }}>
            pay
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
