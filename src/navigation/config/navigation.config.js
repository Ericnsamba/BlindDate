export default {
  HomeStackConfig: {
    headerBackground: null,
    headerBackTitleVisible: false,
    headerRight: null,
    headerShown: null,
  },
  ChatStackConfig: {
    // headerStyle: {
    //   backgroundColor: '#eaeaea',
    //   elevation: 0,
    //   shadowOpacity: 0,
    // },
    headerBackground: null,
    // headerTitleStyle: {
    //   fontSize: 18,
    //   maxWidth: 220,
    //   alignSelf: 'center',
    // },
    // headerBackTitleVisible: false,
    headerLayoutPreset: 'center',
    // headerTintColor: '#fff',
    style: {
      backgroundColor: 'red',
    },
    headerRight: null,
    headerShown: null,
  },
  ProfileStackConfig: {
    // headerStyle: {
    //   backgroundColor: '#eaeaea',
    //   elevation: 0,
    //   shadowOpacity: 0,
    // },
    headerBackground: null,
    // headerTitleStyle: {
    //   fontSize: 18,
    //   maxWidth: 220,
    //   alignSelf: 'center',
    // },
    // headerBackTitleVisible: false,
    headerLayoutPreset: 'center',
    // headerTintColor: '#fff',
    style: {
      backgroundColor: 'red',
    },
    headerRight: null,
    headerShown: null,
  },
  LoginStackNavigator: {
    // headerStyle: {
    //   backgroundColor: '#eaeaea',
    //   elevation: 0,
    //   shadowOpacity: 0,
    // },
    headerBackground: null,
    // headerTitleStyle: {
    //   fontSize: 18,
    //   maxWidth: 220,
    //   alignSelf: 'center',
    // },
    // headerBackTitleVisible: false,
    headerLayoutPreset: 'center',
    // headerTintColor: '#fff',
    style: {
      backgroundColor: 'red',
    },
    headerRight: null,
    headerShown: null,
  },
  TabStackConfig: {},

  linking: {
    prefixes: ['https://GameTracker.com/app', 'GameTracker://app'],
    config: {
      screens: {
        AppMainNavigator: {
          screens: {
            //tab
            Home: {
              screens: {
                HomeScreen: {
                  path: 'home/:id',
                  parse: {
                    id: id => `${id}`,
                  },
                },
                First: {
                  path: 'home-first',
                },
                Second: {
                  path: 'home-second',
                },
              },
            },
            Setting: {
              screens: {
                Settings: {
                  path: 'settings',
                  parse: {
                    id: id => `${id}`,
                  },
                },
              },
            },

            //
          },
        },
        LoginStackNavigator: {
          screens: {
            SignUp: {
              path: 'signup/:id',
              parse: {
                id: id => `${id}`,
              },
            },
          },
        },
        ModalFirst: {
          path: 'modal-first/:id',
          parse: {
            id: id => `${id}`,
          },
        },
      },
    },
  },
};
