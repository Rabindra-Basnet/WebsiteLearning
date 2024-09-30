// import { useEffect, useState } from 'react'
import axios from 'axios';
import "./fetch.css"
import { useLoaderData } from 'react-router-dom';

function Fetch() {
    // const [users, setUsers] = useState([])

    // react router dom method for using some data fetching from database
    const users = useLoaderData()

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await axios.get('https://dummyjson.com/users')
    //             const userData = response.data.users;
    //             console.log(userData)

    //             // mapping what needs
    //             // const transformedUsers = userData.map((user) => ({
    //             //     id: user.id,
    //             //     name: `${user.firstName} ${user.lastName}`,
    //             //     age: user.age,
    //             //     email: user.email,
    //             //     address: user.address,
    //             //     crypto: user.crypto,
    //             // }));
    //             // // console.log(crypto)
    //             // console.log(transformedUsers.crypto)
    //             // // // // filter method
    //             // // // const filteredUsers = transformedUsers.filter(user => user.age > 25);
    //             // setUsers(transformedUsers);
    //             // // reduce method have accumulator, currentvalue, index, and array as a parameter and initialvalue as an last;
    //             // // const totalAge = filteredUsers.reduce((acc, user) => acc + user.age, 0);
    //             // // console.log(totalAge)
    //             // console.log(transformedUsers.address.address)
    //             setUsers(userData);

    //         } catch (error) {
    //             console.log(error)
    //         }
    //     }
    //     fetchData()
    // }, [])
    return (
        <div className='container'>
            <div className="heading">Users List (Age &gt; 25) </div>
            <table className='user-table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th>Crypto</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            {console.log(user.name)}
                            <td>{user.id}</td>
                            <td>{user.firstName} {user.lastName}</td>
                            <td>{user.age}</td>
                            <td>{user.email}</td>
                            <td>
                                {user.crypto && user.crypto.length > 0 ? (
                                    [Array(user.crypto)].map((crypto, index) => (
                                        <tr key={index}>
                                            <td>{crypto.coin}</td>
                                        </tr>
                                    ))
                                ) : (
                                    "No crypto data"
                                )}
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>

        </div>
    )
}

export default Fetch


export const userLoader = async () => {
    try {
        const response = await axios.get("https://dummyjson.com/users")
        return response.data.users
    } catch (error) {
        console.log("Failed to fetch :: user details", error)
    }
}