class AuthService {
    public accessToken: string | null = null;

    constructor() {
        this.accessToken = null;
    }
    
    public async login(email: string, password: string): Promise<boolean> {
        if (email && password) {

            const token = await new Promise((resolve) => {
                setTimeout(() => {
                    resolve("12345token");
                }, 2000);
            });

            if (!token || typeof token !== "string") {
                return false;
            }

            this.accessToken = token;

            return true;
        }

        return false;
    }
    
    public logout(): void {
        this.accessToken = null;
    }

}

export default new AuthService();