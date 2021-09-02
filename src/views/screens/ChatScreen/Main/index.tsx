// import React, {useState, useCallback, useEffect, useRef} from 'react';
// import {
//   Bubble,
//   GiftedChat,
//   SystemMessage,
//   IMessage,
//   Send,
// } from 'react-native-gifted-chat';
// import {
//   View,
//   Text,
//   SafeAreaView,
//   StyleSheet,
//   ActivityIndicator,
//   BackHandler,
//   TouchableOpacity,
//   Alert,
// } from 'react-native';
// import database from '@react-native-firebase/database';
// import firestore from '@react-native-firebase/firestore';
// import auth from '@react-native-firebase/auth';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// // import { uuid } from 'uuidv4';

// const chatReference = database().ref('/users/123');

// import * as themes from '../../../theme/Variables';
// import MenuButton from '../../../components/Profile/MenuButton';
// import {createChatId} from '../../../../utils/utils';

// const ChatScreenMain = ({navigation}) => {
//   const [messages, setMessages] = useState([]);
//   const [threads, setThreads] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [fireMessages, setFireMessages] = useState([]);
//   const db = firestore();
//   const user = auth().currentUser;
//   let unsubscribe2 = useRef(null);
//   const [chatId, setChatId] = useState(createChatId(user._user.uid, user.id));
//   console.log(
//     '🚀 ~ file: index.tsx ~ line 37 ~ ChatScreenMain ~ user',
//     user._user.uid,
//   );
//   // console.log(uuid());

//   function handleButtonPress() {
//     if (roomName.length > 0) {
//       // create new thread using firebase & firestore
//       firestore()
//         .collection('MESSAGE_THREADS')
//         .add({
//           name: roomName,
//           latestMessage: {
//             text: `${roomName} created. Welcome!`,
//             createdAt: new Date().getTime(),
//           },
//         })
//         .then(() => {
//           navigation.navigate('ChatRoom');
//         });
//     }
//   }

//   useEffect(() => {
//     unsubscribe2.current = db
//       .collection('chats')
//       .doc(chatId)
//       .onSnapshot(snap => {
//         const snapData = snap.data();
//         if (snapData.messages) {
//           setFireMessages(snapData.messages.reverse());
//         }
//       });
//     BackHandler.addEventListener('hardwareBackPress', handleBackButton);
//     return () => {
//       unsubscribe2.current();
//       console.log('Chat unmount');
//       BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
//     };
//   }, []);

//   const handleBackButton = () => {
//     Alert.alert(
//       'Exit App',
//       'Exiting the application?',
//       [
//         {
//           text: 'Cancel',
//           onPress: () => console.log('Cancel Pressed'),
//           style: 'cancel',
//         },
//         {
//           text: 'OK',
//           onPress: () => BackHandler.exitApp(),
//         },
//       ],
//       {
//         cancelable: false,
//       },
//     );
//     return true;
//   };
//   // useEffect(() => {
//   //   const unsubscribe = firestore()
//   //     .collection('MESSAGE_THREADS')
//   //     .orderBy('latestMessage.createdAt', 'desc')
//   //     .onSnapshot(querySnapshot => {
//   //       const threads = querySnapshot.docs.map(documentSnapshot => {
//   //         return {
//   //           _id: documentSnapshot.id,
//   //           name: '',
//   //           latestMessage: {text: ''},
//   //           ...documentSnapshot.data(),
//   //         };
//   //       });

//   //       setThreads(threads);
//   //       console.log(threads);
//   //       if (loading) {
//   //         setLoading(false);
//   //       }
//   //     });

//   //   return () => unsubscribe();
//   // }, []);

//   // if (loading) {
//   //   // return <ActivityIndicator size="large" color="#555" />;
//   //   console.log('🚀 ~ file: index.tsx ~', loading);
//   // }

//   const handleSendMessage = () => {
//     firestore()
//       .collection('MESSAGE_THREADS')
//       .doc(thread._id)
//       .collection('MESSAGES')
//       .add({
//         text,
//         createdAt: new Date().getTime(),
//         user: {
//           _id: user.uid,
//           displayName: user.displayName,
//         },
//       });
//   };

//   useEffect(() => {
//     setMessages([
//       {
//         _id: 1,
//         text: 'Hello developer',
//         createdAt: new Date(),
//         user: {
//           _id: 2,
//           name: 'React Native',
//           avatar: 'https://placeimg.com/140/140/any',
//         },
//       },
//     ]);
//   }, []);

//   const renderSend = props => {
//     return (
//       <Send {...props}>
//         <View style={styles.sendingContainer}>
//           <Ionicons name="send" size={34} color="black" />
//         </View>
//       </Send>
//     );
//   };

//   const renderLoading = props => {
//     return (
//       <View style={styles.loadingContainer}>
//         <ActivityIndicator size="large" color="#6646ee" />
//       </View>
//     );
//   };

//   const renderBubble = props => {
//     return (
//       // Step 3: return the component
//       <Bubble
//         {...props}
//         wrapperStyle={{
//           right: {
//             // Here is the color change
//             backgroundColor: '#05375a',
//           },
//         }}
//         textStyle={{
//           right: {
//             color: '#fff',
//           },
//         }}
//       />
//     );
//   };

//   const displayMessages = () => {
//     if (fireMessages == undefined || fireMessages.length == 0) {
//       return setFireMessages([
//         {
//           _id: 1,
//           text: 'Lets chat - Connection loading',
//           createdAt: new Date(),
//           user: {
//             _id: 2,
//             name: 'Chats loading',
//             avatar: 'https://placeimg.com/140/140/any',
//           },
//         },
//       ]);
//     }

//     return fireMessages.map(message => {
//       return {
//         ...message,
//         createdAt: new Date(message.createdAt.seconds * 1000),
//       };
//     });

//     // return fireMessages;
//   };

//   const onSend = useCallback((messages = []) => {
//     setMessages(previousMessages =>
//       GiftedChat.append(previousMessages, messages),
//     );
//   }, []);

//   return (
//     <SafeAreaView style={styles.container}>
//       <MenuButton
//         iconName="chevron-back-outline"
//         alignSelf="flex-start"
//         iconSize={34}
//         onPress={() => {
//           navigation.goBack();
//         }}
//       />
//       <GiftedChat
//         renderUsernameOnMessage
//         showUserAvatar
//         // isAnimated
//         messages={displayMessages()}
//         onSend={messages => onSend(messages)}
//         user={{
//           _id: user._user.uid,
//           // name: user.user.fullName,
//           avatar: 'https://placeimg.com/140/140/any',
//         }}
//         alwaysShowSend
//         renderSend={renderSend}
//         renderLoading={renderLoading}
//         renderBubble={renderBubble}
//         placeholder={`Type a message to ${user.name}...`}
//       />
//       <View style={styles.spaceer} />
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: themes.Colors.white,
//   },
//   spaceer: {
//     height: 20,
//   },
// });

// export default ChatScreenMain;

import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

import {createNewThread} from '../../../../firebase';
import {TextField, Button} from '../../../components/Form';
import User from '../../../../store/reducers/User';
// export const currentUser = () => auth().currentUser.toJSON();

const ChatScreenMain = ({route, navigation}) => {
  const user = auth().currentUser;
  const [threadName, setThreadName] = useState('');
  const [loading, setLoading] = useState(false);

  const handlePress = () => {
    setLoading(true);
    createNewThread(threadName)
      .then(() => {
        navigation.navigate('Threads');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    
    // firestore()
    //   .collection('MESSAGE_THREADS')
    //   .get()
    //   .then(querySnapshot => {
    //     console.log('querySnapshot: ', querySnapshot);
    //     firestore()
    //       .collection('MESSAGES')
    //       .doc()
    //       .get()
    //       .then(userMessages => {
    //         console.log('userMessages: ', userMessages);
    //       });
    //     // firestore()
    //     //   .collection('MESSAGES')
    //     //   // Filter results
    //     //   .where('_id', '==', user?.uid)
    //     //   .get()
    //     //   .then(userMessages => {
    //     //     console.log('userMessages: ', userMessages._docs);
    //     //     if (userMessages && userMessages.length > 0) {
    //     //       navigation.navigate('Threads');
    //     //     }
    //     //     /* ... */
    //     //   });
    //   });
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', backgroundColor: '#fff'}}>
      <TextField
        placeholder="Thread Name"
        onChangeText={name => setThreadName(name)}
      />
      {/* <Button
        onPress={() => navigation.navigate('Threads')}
        title="Create"
        disabled={loading}
      /> */}
      <Button onPress={handlePress} title="Create" disabled={loading} />
    </View>
  );
};

export default ChatScreenMain;
