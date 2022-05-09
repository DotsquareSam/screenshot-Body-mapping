// import React, { Component } from 'react';
// import { View,  TextInput, Button, Image, StyleSheet, TouchableOpacity,Dimensions  } from 'react-native';
// import ValidationComponent from 'react-native-form-validator';
// var CryptoJS = require("crypto-js");
// import ViewShot from "react-native-view-shot";
// import { captureScreen } from 'react-native-view-shot';
// import RNFetchBlob from 'rn-fetch-blob'
// import CameraRoll from "@react-native-community/cameraroll";

// import Svg, {
//   Circle,
//   Ellipse,
//   G,
//   Text,
//   TSpan,
//   TextPath,
//   Path,
//   Polygon,
//   Polyline,
//   Line,
//   Rect,
//   Use,
//   Symbol,
//   Defs,
//   LinearGradient,
//   RadialGradient,
//   Stop,
//   ClipPath,
//   Pattern,
//   Mask,
// } from 'react-native-svg';
// const dirs = RNFetchBlob.fs.dirs;
// const WIDTH = Dimensions.get('screen').width;
// import ZigzagLines from "react-native-zigzag-lines"

// var data = { id: 1 }
// export default class App extends ValidationComponent {

//   constructor(props) {
//     super(props);
//     this.state = {
//       value: '',
//       count: 0,
//       uri: '',
//       width:''
//     };
//   }
//   componentDidMount() {
//     setTimeout(()=>{
//       this.takeScreenShot()
//     },1000)
    
//   }
//   takeScreenShot = () => {
//     // To capture Screenshot
//     captureScreen({
//       // Either png or jpg (or webm Android Only), Defaults: png
//       format: 'jpg',
//       // Quality 0.0 - 1.0 (only available for jpg)
//       quality: 0.8,
//     }).then(
//       //callback function to get the result URL of the screnshot
//       (uri) => {
//         console.log(uri)
//         CameraRoll.save(uri)
//                 .then(res=>console.log(res))
//                 .catch(err => console.log('err:', err))
//       },
//       (error) => console.error('Oops, Something Went Wrong', error),
//     );
//   };
//   _onSubmit() {
//     // Encrypt
//     // Encrypt
//     var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), 'secret key 123').toString();

//     // Decrypt
//     var bytes = CryptoJS.AES.decrypt(ciphertext, 'secret key 123');
//     var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

//     console.log(decryptedData); // [{id: 1}, {id: 2}]
//     // Call ValidationComponent validate method
//     this.validate({
//       value: { minlength: 3, maxlength: 7, required: true },

//     });

//   }
//   render() {
//     return (
//       <View style={{backgroundColor:'white',flex:1}} ref="viewShot" options={{ format: "jpg", quality: 0.9 }}  >
//         <TouchableOpacity
//           style={styles.buttonStyle}
//           onPress={() => setTimeout(()=>{this.takeScreenShot()},1000)}>
//           <Text style={styles.buttonTextStyle}>
//             Take Screenshot
//           </Text>
//         </TouchableOpacity>
//         <Image
//           style={{resizeMode:'cover',width:'100%',height:'50%'}}
//           source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
//         />
//         {this.state.uri != "" && <Image source={{ uri: this.state.uri }} style={{ width: 350, height: 350, marginTop: 50, resizeMode: 'contain' }}></Image>} 
//           </View>
//     )
//   }
// }

      



// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//     padding: 10,
//     alignItems: 'center',
//   },
//   titleText: {
//     fontSize: 22,
//     textAlign: 'center',
//     fontWeight: 'bold',
//   },
//   textStyle: {
//     textAlign: 'center',
//     padding: 10,
//   },
//   buttonStyle: {
//     fontSize: 16,
//     color: 'white',
//     backgroundColor: 'green',
//     padding: 5,
//     minWidth: 250,
//   },
//   buttonTextStyle: {
//     padding: 5,
//     color: 'white',
//     textAlign: 'center',
//   },
// });

// Image Mapper in React Native to Create Clickable Areas on Image
// https://aboutreact.com/react-native-image-mapper/

// Import React
// import React, { useState } from 'react';
// // Import Required Components
// import { View, Text } from 'react-native';

// //Import ImageMapper Component
// import ImageMapper from 'react-native-image-mapper';

// const getRandomColor = () => {
//   //Function to return random color
//   //To highlight the mapping area
//   const letters = '0123456789ABCDEF';
//   let color = '#';
//   for (var i = 0; i < 6; i++)
//     color += letters[Math.floor(Math.random() * 16)];
//   return color;
// };

// const App = () => {
//   //State for the selected area
//   const [selectedAreaId, setSelectedAreaId] = useState([]);

//   const mapperAreaClickHandler = async (item, idx, event) => {
//     const currentSelectedAreaId = selectedAreaId;
//     if (Array.isArray(currentSelectedAreaId)) {
//       const indexInState = currentSelectedAreaId.indexOf(item.id);
//       if (indexInState !== -1) {
//         console.log('Removing id', item.id);
//         setSelectedAreaId([
//           ...currentSelectedAreaId.slice(0, indexInState),
//           ...currentSelectedAreaId.slice(indexInState + 1),
//         ]);
//       } else {
//         alert(`Clicked Item Id: ${item.id}`);
//         console.log('Setting Id', item.id);
//         setSelectedAreaId([...currentSelectedAreaId, item.id]);
//       }
//     } else {
//       if (item.id === currentSelectedAreaId) {
//         setSelectedAreaId(null);
//       } else {
//         setSelectedAreaId(item.id);
//       }
//     }
//   };

//   return (
//     <View style={{ flex: 1, alignItems: 'center', padding: 30 }}>
//       <Text
//         style={{
//           fontSize: 30,
//           textAlign: 'center',
//           marginTop: 40
//         }}>
//         Image Mapper Example in React Native
//       </Text>
//       <Text
//           style={{
//             fontSize: 25,
//             marginTop: 20,
//             marginBottom: 30,
//             textAlign: 'center',
//           }}>
//           www.aboutreact.com
//         </Text>
//       <ImageMapper
//         imgHeight={551}
//         imgWidth={244}
//         imgSource={{
//           uri:
//             'https://raw.githubusercontent.com/msalo3/react-native-image-mapper/master/Examples/human.png',
//         }}
//         imgMap={RECTANGLE_MAP}
//         onPress={
//           (item, idx, event) => 
//             mapperAreaClickHandler(item, idx, event)
//         }
//         containerStyle={{ top: 10 }}
//         selectedAreaId={selectedAreaId}
//         multiselect
//       />
//     </View>
//   );

// };

// export default App;

// // Maps to Create Clickable Areas
// const RECTANGLE_MAP = [
//   {
//     id: '0',
//     name: 'Left Foot',
//     shape: 'rectangle',
//     x2: 210,
//     y2: 540,
//     x1: 200,
//     y1: 500,
//     prefill: getRandomColor(),
//     fill: 'blue',
//   },
//   {
//     id: '1',
//     name: 'Right Foot',
//     shape: 'rectangle',
//     x2: 155,
//     y2: 540,
//     x1: 125,
//     y1: 500,
//     prefill: getRandomColor(),
//     fill: 'blue',
//   },
//   {
//     id: '2',
//     name: 'Left Knee',
//     shape: 'rectangle',
//     x2: 110,
//     y2: 400,
//     x1: 80,
//     y1: 370,
//     prefill: getRandomColor(),
//     fill: 'blue',
//   },
//   {
//     id: '3',
//     name: 'Right Knee',
//     shape: 'rectangle',
//     x2: 155,
//     y2: 400,
//     x1: 125,
//     y1: 370,
//     prefill: getRandomColor(),
//     fill: 'blue',
//   },
//   {
//     id: '4',
//     name: 'Stomach',
//     shape: 'rectangle',
//     x2: 105,
//     y2: 200,
//     x1: 00,
//     y1: 00,
//     prefill: getRandomColor(),
//     fill: 'blue',
//   },
//   {
//     id: '5',
//     name: 'Left Hand',
//     shape: 'rectangle',
//     x2: 40,
//     y2: 315,
//     x1: 5,
//     y1: 250,
//     prefill: getRandomColor(),
//     fill: 'blue',
//   },
//   {
//     id: '6',
//     name: 'Right Hand',
//     shape: 'rectangle',
//     x2: 235,
//     y2: 315,
//     x1: 200,
//     y1: 250,
//     prefill: getRandomColor(),
//     fill: 'blue',
//   },
//   {
//     id: '7',
//     name: 'Face',
//     shape: 'rectangle',
//     x2: 145,
//     y2: 70,
//     x1: 90,
//     y1: 30,
//     prefill: getRandomColor(),
//     fill: 'blue',
//   },
//   {
//     id: '8',
//     name: 'Head',
//     shape: 'rectangle',
//     x2: 145,
//     y2: 30,
//     x1: 90,
//     y1: 0,
//     prefill: getRandomColor(),
//     fill: 'blue',
//   },
// ];

import React, { Component } from 'react';
import { View, Text,Appearance } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme:''
    };
  }
  componentDidMount(){
    const theme=Appearance.getColorScheme()
    this.setState({
      theme:theme
    })
  }

  render() {
    return (
      <View>
        <Text style={{fontSize:52,color:this.state.theme=='light'?'black':'white'}}> App </Text>
      </View>
    );
  }
}
