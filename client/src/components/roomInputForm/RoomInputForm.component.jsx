import React, {useState} from 'react';
import useValidateUsername from '../../hooks/useValidateUsername';

import "./RoomInputForm.styles.scss"

const RoomInputForm = ({setRoomData}) => {
    const [roomName, setRoomName] = useState("")
    const {usernameValueChangeHandler, validateUsername, value} = useValidateUsername()


    const onJoinRoomHandler = () => {
        const isValid = validateUsername()
        console.log(isValid)
        if (roomName && isValid) {
            setRoomData({isRunning: true, roomName, username: value})
        } else {
            alert("0 < name <= 16 AND only alphabetic OR _ are allowed")
        }
    }

    const onJoinRoomInputKeyDown = (e) => {
        if (e.key === "Enter") {
            onJoinRoomHandler()
        }
    }

    return (
        <div className="join-room-container">
            <input type="text" value={roomName} onChange={(e) => setRoomName(e.target.value)}
                   onKeyDown={onJoinRoomInputKeyDown}
                   placeholder="Enter a room name.."
                   className="input-field"
            />

            <input type="text" value={value} onChange={usernameValueChangeHandler}
                   onKeyDown={onJoinRoomInputKeyDown} placeholder="enter as a <username>"
                   className="input-field"
            />
            <button onClick={onJoinRoomHandler} className="join-button">Join</button>
        </div>
    );
};

export default RoomInputForm;