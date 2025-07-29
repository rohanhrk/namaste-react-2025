import {useState} from 'react'

const User = ({name, address, eMail}) => {
    const [count1] = useState(0);
    return (
        <div className="user-card">
            <h1>{count1}</h1>
            <h1>Name: {name}</h1>
            <h1>Address: {address}</h1>
            <h1>eMail: {eMail}</h1>
        </div>
    )
}

export default User;