// App.jsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './scenes/Home.jsx';
import Register from './scenes/Register.jsx';
import Login from './scenes/Login.jsx';
import Community from './scenes/Community.jsx';
import { Toaster } from 'react-hot-toast';
import Profile from './scenes/Profile.jsx';
import Trade from './scenes/Trade.jsx';
import AddItem from './scenes/AddItem.jsx';

function App() {
  const PrivateRoute = ({ element }) => {
    // Vérifiez si l'utilisateur est authentifié (vous pouvez mettre en œuvre cette logique en fonction de la présence du token, par exemple)
    const isAuthenticated = !!localStorage.getItem('token');

    // Renvoie le composant Route si l'utilisateur est authentifié, sinon redirige vers la page de connexion
    return isAuthenticated ? element : <Navigate to="/login" />;
  };

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        {/* Ajoutez une condition pour rediriger vers /trade si l'utilisateur est connecté */}
        <Route
          path="/"
          element={
            <PrivateRoute
              element={<Navigate to="/trade" />}
              // Ajoutez une propriété `redirectIfAuthenticated` à votre composant PrivateRoute
              redirectIfAuthenticated
            />
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/community" element={<Community />} />
        <Route path="/trade" element={<Trade />} />
        <Route path="/additem" element={<PrivateRoute element={<AddItem />} />} />
        <Route path="/profile" element={<PrivateRoute element={<Profile />} />} />
        {/* ... autres routes ... */}
      </Routes>
    </div>
  );
}

export default App;
