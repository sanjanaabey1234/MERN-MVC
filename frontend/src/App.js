import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import AddUser from "./Components/Add_User/AddUser";
import UserDetails from "./Components/User_Details/Users";
import UpdateUsers from "./Components/UpdateUser/UpdateUser";
import Statistics from "./Components/Statistics/Statistics"; // Import the new component
import Settings from "./Components/Settings/Settings";
import "./i18n";
import { ThemeProvider, LanguageProvider } from "./Components/context/Contexts";

function App() {
  return (
    <div>
      <React.Fragment>
        <ThemeProvider>
          <LanguageProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/mainhome" element={<Home />} />
              <Route path="/adduser" element={<AddUser />} />
              <Route path="/userdetails" element={<UserDetails />} />
              <Route path="/userdetails/:id" element={<UpdateUsers />} />
              <Route path="/statistics" element={<Statistics />} />
              <Route path="/settings" element={<Settings />} />

              {/* Nav wala thiyena Link ex:"/mainhome" link eka click karaama yanne 
          App.js eken Home.js eka run karanawa */}
            </Routes>
          </LanguageProvider>
        </ThemeProvider>
      </React.Fragment>
    </div>
  );
}

export default App;
