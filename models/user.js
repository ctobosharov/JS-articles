export default{
    register(username, password){
        return firebase.auth().createUserWithEmailAndPassword(username, password)
    },
    login(email, password){
        return firebase.auth().signInWithEmailAndPassword(email, password)
    },
    logout(){
        return firebase.auth().signOut()
    }
};