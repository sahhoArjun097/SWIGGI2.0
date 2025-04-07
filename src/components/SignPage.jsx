import { signInWithPopup, signOut } from "firebase/auth";
import React from "react";
import { auth, provider } from "../config/FirebaseAuth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/authSlice";
import { useNavigate } from "react-router-dom";

function SignPage() {
  const navigate = useNavigate();
  const userData = useSelector((state) => state.authSlice.userData);
  const dispatch = useDispatch();
console.log(userData)
  async function handleAuth() {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result)
      const userData = {
        name: result.user.displayName,
        photo: result.user.photo,
      };
      dispatch(addUser(userData));
      navigate("/");
    } catch (error) {
      console.error("Error signing in:", error.message);
    }
  }

  async function handleLogout() {
    try {
      await signOut(auth);
      dispatch(removeUser());
    } catch (error) {
      console.error("Error signing out:", error.message);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="bg-white bg-opacity-10 backdrop-blur-lg p-10 rounded-xl shadow-2xl w-[400px] text-center border border-white/20">
        {userData ? (
          <div>
            <img
              src={userData.photo}
              alt=""
              className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-white"
            />
            <h2 className="text-2xl font-bold text-white">{userData.name}</h2>
            <p className="text-gray-300 mb-6">You are signed in</p>
            <button
              onClick={handleLogout}
              className="w-full bg-gradient-to-r from-red-500 to-red-700 text-white font-semibold py-3 rounded-lg transition duration-300 shadow-lg hover:from-red-600 hover:to-red-800"
            >
              Logout
            </button>
          </div>
        ) : (
          <button
            onClick={handleAuth}
            className="flex items-center justify-center w-full bg-white/20 hover:bg-white/30 text-white font-semibold py-3 rounded-lg transition duration-300 shadow-lg border border-white/30 backdrop-blur-md"
          >
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              alt="Google Logo"
              className="w-6 h-6 mr-2"
            />
            Sign in with Google
          </button>
        )}
      </div>
    </div>
  );
}

export default SignPage;
