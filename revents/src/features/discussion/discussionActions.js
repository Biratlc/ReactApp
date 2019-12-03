import { createNewDiscussion } from "../../app/common/util/helper";
import { toastr } from "react-redux-toastr";


export const createDiscussion = discussion => {
    return async(dispatch, getState, {getFirestore, getFirebase})=>{
        const firestore = getFirestore();
        const firebase = getFirebase();
        const user = firebase.auth().currentUser;
        const photoURL = getState().firebase.profile.photoURL;
        const newDiscussion = createNewDiscussion(user, photoURL, discussion);
        try{
           let createdDiscussion = await firestore.add("discussions", newDiscussion);       
            toastr.success("Success!", "A discussion post has been created");        
            return createdDiscussion;
        }
        catch(error){
            toastr.error('Oops', 'Something went wrong');
        } 
    }
}