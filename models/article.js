export default {
    create(data) {
        return firebase.firestore().collection('articles').add({ ...data })
    },
    getAll() {
        return firebase.firestore().collection('articles').get()
    },
    close(id) {
        return firebase.firestore().collection('articles').doc(id).delete()
    }
};