import React, {useState, useEffect} from 'react';
import {FlatList, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {ThreadRow, Separator} from '../../../components/Threads';
import {listenToThreads, listenToThreadTracking} from '../../../../firebase';
import { SafeAreaView } from 'react-native-safe-area-context';

const isThreadUnread = (thread, threadTracking) => {
  if (
    threadTracking[thread._id] &&
    threadTracking[thread._id] < thread.latestMessage.createdAt
  ) {
    return true;
  }

  return false;
};

const Threads = ({navigation}) => {
  const [threads, setThreads] = useState([]);
  const [threadTracking, setThreadTracking] = useState({});
  const {userData, authUserData} = useSelector(state => state.userReducer);

  useEffect(() => {
    const unsubscribe = listenToThreads().onSnapshot(querySnapshot => {
      // console.log(querySnapshot.docs);
      const allThreads = querySnapshot.docs.map(snapshot => {
        return {
          _id: snapshot.id,
          name: authUserData.firstName,
          latestMessage: {text: ''},
          ...snapshot.data(),
        };
      });

      setThreads(allThreads);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    const unsubscribe = listenToThreadTracking().onSnapshot(snapshot => {
      setThreadTracking(snapshot.data() || {});
      // console.log("🚀 ~ file: index.js ~ line 46 ~ unsubscribe ~ snapshot.data()", snapshot.data())
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff', paddingBottom: 50}}>
      <FlatList
        data={threads}
        keyExtractor={item => item._id}
        renderItem={({item}) => (
          <ThreadRow
            {...item}
            onPress={() => navigation.navigate('Messages', {thread: item})}
            unread={isThreadUnread(item, threadTracking)}
          />
        )}
        ItemSeparatorComponent={() => <Separator />}
      />
    </SafeAreaView>
  );
};

export default Threads;
