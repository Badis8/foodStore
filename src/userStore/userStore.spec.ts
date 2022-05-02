export interface User{
    id:string,
    pseudoName:string,
    password:string,
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
    getUser(id:string){
        for (const user of this.users){
            if(user.id===id){
                return user;
            }
        }
    }
    getIdBypseudoName(pseudoName:string):string{
        for (const user of this.users){
            if(user.pseudoName===pseudoName){
                return user.id;
            }
        }
        return 'unfound'
    }
}
describe('testing user connection ',()=>{
test('should store a user',()=>{
    const userStore=new UserStore([]); 
    const user:User=
    {
        id:'123,',
        pseudoName:'badis',
        password:'321',
    }

    userStore.store(user);

    expect(userStore.getUsers()[0]).toBe(user);
});
test('should get user by id',()=>{
    const userStore=new UserStore([]); 
    const user:User=
    {
        id:'123',
        pseudoName:'badis',
        password:'321',
    }      
    userStore.store(user);
    const fetchedUser=userStore.getUser('123');
    expect(fetchedUser).toBe(user);
});
test('should get id by name and password',()=>{
    const userStore=new UserStore([]); 
    const user:User=
    {
        id:'123',
        pseudoName:'badis',
        password:'321',
    }      
    userStore.store(user);
    const id=userStore.getIdBypseudoName('badis');
    expect(id).toBe(user.id);
})
});