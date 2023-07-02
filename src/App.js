import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login";
import Chats from "./Components/Chats";
import AuthContextProvider from "./Contexts/AuthContextProvider";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Routes> 
          <Route path="/" element={<Login />} />
           <Route path="/chats" element={<Chats />} />
        
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
