/* eslint-disable prettier/prettier */
import Toast from 'react-native-toast-message';


export const showToast = (message: string, type = 'error', title = 'Alert') => {
    Toast.show({
        type,
        text1: title,
        text2: message,
    });
};
