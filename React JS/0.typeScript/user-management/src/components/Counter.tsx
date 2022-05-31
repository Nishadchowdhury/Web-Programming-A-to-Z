import React, { ChangeEvent, FormEvent, useState } from 'react';

const Counter = () => {

    interface User {
        name: string,
        job: string
    }

    const [counter, setCounter] = useState<number>(0);
    const [user, setUser] = useState<User | null>(null);

    // const handleI = (): void => {
    //     setCounter(counter + 1)
    // }

    const handleUserSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const userData = {
            name: "Nishad",
            job: "dev",
        }
        setUser(userData)

    }

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>): void => {

    }

    return (
        <div>
            ok counter

            <h1>count {counter}</h1>

            <button onClick={() => setCounter(counter + 1)} > + </button>
            <button onClick={() => setCounter(counter - 1)} > - </button>
        </div>
    );
};

export default Counter;