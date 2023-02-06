import { useEffect, useState } from "react";
import { getData, STORAGE_GET_DATA_STATUS, STORAGE_KEYS } from "../helper/storage";

export default function useStorage(key : STORAGE_KEYS, check: string, initialValue : string) {
    const [storedValue, setStoredValue] = useState<(string | boolean | null)[]>([STORAGE_GET_DATA_STATUS.LOADING,initialValue]);

    useEffect(() => {
        getData(key, initialValue).then((value) => {
            setStoredValue(value)
        })
    }, [key, initialValue])

    const [status, value] = storedValue;
    const equal = value === check;

    return [status,equal,  value ] as [STORAGE_GET_DATA_STATUS,boolean, string];
}