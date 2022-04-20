import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import app from "../firebase.init";

const GoogleProvider = new GoogleAuthProvider();

const auth = getAuth(app);


const useFirebase = () => {
    const [user, setUser] = useState({})



    const singInWithGoogle = () => {
        signInWithPopup(auth, GoogleProvider)
            .then((result) => {

                const user = result.user;
                setUser(user)
                console.log(user);
            }).catch((error) => {

                const errorMessage = error.message;
                console.error(errorMessage);

            });
    }
    const handleSingOut = () => {

        signOut(auth)
            .then(() => {

            }).catch((error) => {

            });

    }


    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user)
        })
    }, [user])

    // return [user, setUser]; 
    return { user, singInWithGoogle , handleSingOut};
}

export default useFirebase;