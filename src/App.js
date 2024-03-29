import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Messages from "./components/Messages/Messages";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header />
                <Navbar />
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route
                            path='/dialogs/*'
                            element={
                                <Dialogs
                                    data={props.appState.messagesPage}
                                    dispatch={props.dispatch}
                                />
                            }
                        />
                        <Route
                            path='/profile/*'
                            element={
                                <Profile
                                    profilePage={props.appState.profilePage}
                                    dispatch={props.dispatch}
                                />
                            }
                        />
                        <Route path='/news/*' element={<News />} />
                        <Route path='/messages/*' element={<Messages />} />
                        <Route path='/music/*' element={<Music />} />
                        <Route path='/settings/*' element={<Settings />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
