export interface User{
    id:string,
    pseudoName:string,
}
export class UserStore{
    constructor(private readonly users:Array<User>){
    }
    store(user:User){
        this.users.push(user);
    }
    getUsers(){
        return this.users
    }
}
test('should store a user',()=>{
    const userStore=new UserStore([]); 
    const user:User=
    {
        id:'123,',
        pseudoName:'badis',
    }
    userStore.store(user)
    expect(userStore.getUsers()[0]).toBe(user);
});