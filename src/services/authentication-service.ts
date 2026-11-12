export default class AuthenticationService {
    static isAuthenticated: boolean = false;

    static logout(): void {
    }

    static login(username: string, password: string): Promise<boolean> {
        const isAuthenticated = (username === 'ulrich' && password === 'armel');
        return new Promise(resolve => {
            setTimeout(() => {
                this.isAuthenticated = isAuthenticated
                resolve(isAuthenticated)
            }, 1000);
        });
    }
}