import { makeAutoObservable } from "mobx";
import { User } from "types/user";

class UserStore {
    public user: User | null = null;
    
    constructor() {
        makeAutoObservable(this);
    }

    public setUser(user: User): void {
        this.user = user;
    }

}

export default new UserStore();