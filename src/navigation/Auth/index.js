import { createMaterialTopTabNavigator } from 'react-navigation';

import { SignIn } from './SignIn';
import { SignUp } from './SignUp';

const routeConfig = {
    'SIGN IN': {
        screen: SignIn,
    },
    'SIGN UP': {
        screen: SignUp,
    },
};

const tabNavConfig = {
    initialRouteName:  'SIGN IN',
    swipeEnabled:      true,
    animationEnambled: true,
    tabBarOptions:     {
        style: {
            height:          40,
            color:           '#FFF',
            backgroundColor: 'transparent',
        },
        labelStyle: {
            fontSize:      13,
            color:         '#FFF',
            fontWeight:    'normal',
            letterSpacing: 1,
        },
        indicatorStyle: {
            height:          4,
            backgroundColor: '#84dea6',
        },
    },
};

const AuthTopNavigator = createMaterialTopTabNavigator(
    routeConfig,
    tabNavConfig
);

export { AuthTopNavigator };
