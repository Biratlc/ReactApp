export const createNewDiscussion = (user, photoURL, discussion) => {
    return{
        ...discussion,
        creatorUid: user.uid,
        createdBy: user.displayName,
        creatorPhotoURL: photoURL || '/assets/user.png',
        createdAt: new Date()
    }
}

export const objectToArray = (object) => {
    if (object) {
        return Object.entries(object).map(a => Object.assign({}, a[1], {id: a[0]}))
    }
}
