import React, { FC } from 'react';
import UserModel from '../types/models';

// const User: FC<{ name: string, age?: number }> = (props) => {
//     return (
//         <div>

//             hello from: My {props.name}

//         </div>
//     );
// };


// interface props {
//     name: string,
//     age: number,
//     addUser?: () => void
// }


interface props {
    user: UserModel,
    addUser: (user: UserModel) => void
}


const User: FC<props> = ({ user, addUser }) => {
    return (
        <div>

            hello from: My {user.name} with experience {user.email}

            <button onClick={() => addUser(user)} >
                add user
            </button>

        </div>
    );
};

export default User;