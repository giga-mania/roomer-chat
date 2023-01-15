import {useEffect, useState} from "react";
import {ThemeProvider} from "styled-components";

import socket from "./feature/socket";
import useDarkMode from "./hooks/useDarkMode";
import GlobalStyles from "./components/UI/GlobalStyles";
import Manual from "./components/manual/Manual.component";
import ChatBox from "./components/chatBox/ChatBox.components";
import IconManual from "./components/UI/IconManual/IconManual";
import ToggleTheme from "./components/UI/DarkThemeBtn/DarkThemeBtn"
import {darkTheme, lightTheme} from "./components/UI/DarkThemeBtn/themeModes";
import RoomInputForm from "./components/roomInputForm/RoomInputForm.component"

import "./App.styles.scss"

function App() {
    const [roomData, setRoomData] = useState({roomName: "", username: "", isRunning: false})
    const [instanceMap, setInstanceMap] = useState("")
    const [theme, toggleTheme] = useDarkMode();
    const [isManualOpened, setIsManualOpened] = useState(false)
    const themeMode = theme === "light" ? lightTheme : darkTheme;

    useEffect(() => {
        socket.connect()
    }, [])


    return (
        <ThemeProvider theme={themeMode}>
            <GlobalStyles/>
            <div className="top-level">
                {
                    !roomData.isRunning ? <RoomInputForm setRoomData={setRoomData}/> :
                        <ChatBox roomName={roomData.roomName} username={roomData.username}
                                 collectInstance={setInstanceMap}/>
                }
                <div className="manual-wrapper">
                    {
                        !roomData.isRunning && <IconManual toggleManual={setIsManualOpened} isManualOpened={isManualOpened}/>
                    }
                    {
                        isManualOpened && <Manual theme={theme} />
                    }
                </div>
                <ToggleTheme theme={theme} toggleTheme={toggleTheme}/>
            </div>
        </ThemeProvider>
    );
}

export default App;
