import AsyncStorage from "@react-native-async-storage/async-storage";


export enum STORAGE_GET_DATA_STATUS {
    LOADING = 'LOADING',
    SUCCESS = 'SUCCESS',
    EMPTY = 'EMPTY',
    ERROR = 'ERROR',
}

export enum STORAGE_KEYS {
    IS_ONBOARDING_DONE = '@IS_ONBOARDING_DONE',
}

export const storeData = async (key: STORAGE_KEYS, value: string) => {
    try {
        await AsyncStorage.setItem(key, value)
    } catch (e) {
        
    }
}

export const getData = async (key: STORAGE_KEYS, initialValue : string) => {
    try {
      const value = await AsyncStorage.getItem(key)
        return [value === null ? STORAGE_GET_DATA_STATUS.EMPTY :  STORAGE_GET_DATA_STATUS.SUCCESS,value]
    } catch(e) {
        return [STORAGE_GET_DATA_STATUS.ERROR,initialValue]
    }
  }

export const removeData = async (key: STORAGE_KEYS) => {
    try {
        await AsyncStorage.removeItem(key)
    } catch(e) {
        
    }
}