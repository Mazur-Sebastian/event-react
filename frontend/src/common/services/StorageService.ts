export class StorageService {
    getItem(field: string, parse: boolean = false): any {
        const localStorageItem = localStorage.getItem(field);

        if (localStorageItem && parse) {
            return JSON.parse(localStorageItem);
        }

        return localStorageItem;
    }

    setItem(field: string, data: object | string, parse: boolean = false): void {
        localStorage.setItem(field, parse ? JSON.stringify(data) : (data as string));
    }

    removeItem(field: string): void {
        localStorage.removeItem(field);
    }
}
