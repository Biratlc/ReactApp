import { tryStatement } from "@babel/types"

export const createNewEvent = (user, photoURL, event) => {
    return{
        ...event,
        hostUid: user.uid,
        hostedBy: user.displayName,
        hostPhotoURL: photoURL || '/assets/user.png',
        created: new Date(),
        attendees:{
            [user.uid]:{
                going: tryStatement,
                joinDtae: new Date(),
                photoURL: photoURL || '/assets/user.png',
                displayName: user.displayName,
                host: true
            }
        }
    }
}