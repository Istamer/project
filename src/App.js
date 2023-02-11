import './App.css';
import Home from "./components/home/home";
import Login from "./components/login/login";
import Registration from "./components/registration/registration";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import {useState} from "react";

function App() {

    const [user, setLoginUser]=useState(null)
  return (
    <div className="App">
        <BrowserRouter>
        <Routes>

            {user ? <><Route path="/" element={<Home setLoginUser={setLoginUser} User={user}/>} /></>:
                <>  <Route path="/login" index element={<Login setLoginUser={setLoginUser}/>} />
                    <Route path="registration" element={< Registration />} /></>}
            {/* <Route exact path="/">
              {
                  user && user._id ? <Home setLoginUser={setLoginUser}/> : <Login setLoginUser={setLoginUser}/>
              }
             </Route>
             <Route path="/login" element={<Login/>}>
              <Login setLoginUser={setLoginUser}/>
             </Route>
             <Route path="/registration">
              <Registration />
             </Route>*/}
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;

{/*<BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="registration" element={<Registration />} />
        <Route path="movie/:movieId" element={<MovieInfo />} />
        <Route path="login" element={<Login />} />

        <Route
            path="profile"
            element={
                <ProtectedRoute user={user.user} redirectPath="/login">
                    <Profile />
                </ProtectedRoute>
            }
        />

        <Route path="*" element={<NoPage />} />
    </Routes>
</BrowserRouter>*/}