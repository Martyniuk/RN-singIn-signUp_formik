import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import { AuthScreen } from 'screens/Auth';
import { ContentScreen } from 'screens/Content';

const MainApp = createSwitchNavigator(
    {
        Auth: AuthScreen,
        Home: ContentScreen,
    },
    {
        initialRouteName: 'Auth',
    }
);

export const Main = createAppContainer(MainApp);
