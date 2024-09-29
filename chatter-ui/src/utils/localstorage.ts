
export class LocalStorageUtil  {

    setItem(key: string, value: string) {
        localStorage.setItem(key,value);
    }

    getItem(key: string) {

        return localStorage.getItem(key) || null;
    }

    removeItem(key:string) {
        localStorage.removeItem(key);
    }
}