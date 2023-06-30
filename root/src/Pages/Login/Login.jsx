import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { SigninwithGoogle, firbaseauth } from "../../utils/Firebase";
import login from "../../assets/Login.jpg";
import styles from "./Login.module.css";
export default function Login() {
  const [formData, setFormData] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState();
  const [error, setError] = useState("");
  const [check, setCheck] = useState(true);
  const navigate = useNavigate();

  const handleSignIn = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      let userCreds = await signInWithEmailAndPassword(
        firbaseauth,
        email,
        password
      );
      setUser(userCreds.user);

      if (check) {
        localStorage.setItem(
          "loginCredentials",
          JSON.stringify({ email, password })
        );
      } else {
        localStorage.removeItem("loginCredentials");
      }
      navigate("/");
    } catch (error) {
      setError(error.message);
      setEmail("");
      setPassword("");
      setTimeout(() => {
        setError("");
      }, 2000);
    }
    setIsLoading(false);
  };

  // Check if login credentials are present in local storage
  const loginCredentials = JSON.parse(localStorage.getItem("loginCredentials"));
  if (loginCredentials) {
    handleSignIn(null, true);
  }
  const ProviderSignIn = () => {
    SigninwithGoogle();
  };

  useEffect(() => {
    onAuthStateChanged(firbaseauth, (user) => {
      if (user) {
        setUser(user);
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        setUser(null);
        setFormData([]);
      }
    });
  }, [onAuthStateChanged]);

  return (
    <div>
      {user ? (
        <div className="flex flex-col justify-center items-center">
          <p>You are logged in as: {user.email}</p>
          <p>Redirecting to Main Page</p>

          <div className="pyramid-loader">
            <div className="rap">
              <span className="side side1"></span>
              <span className="side side2"></span>
              <span className="side side3"></span>
              <span className="side side4"></span>
              <span className="shadow"></span>
            </div>
          </div>
          {error && <p>{error}</p>}
        </div>
      ) : (
        <div className={styles.mainDiv}>
          <div className={styles.image}>
            {" "}
            <img src={login} alt="" />
          </div>
          <div className={styles.box}>
            <div className={styles.heading}>
              <h1>Sign in</h1>
              <h3>Sign in to your account</h3>
            </div>
            <div className={styles.buttonWrapper}>
              <button
                onClick={() => {
                  ProviderSignIn();
                }}
                className="group h-9 px-4 border-2 border-gray-300 rounded-full transition duration-300 
 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100"
              >
                {" "}
                <div className={styles.btnWrap}>
                  <img
                    src="https://tailus.io/sources/blocks/social/preview/images/google.svg"
                    class="w-5"
                    alt="google logo"
                  />
                  <span className={styles.btnSpan}>Login with Google</span>
                </div>
              </button>
              <button
                onClick={() => {
                  navigate("/Apple:3");
                }}
                className="group h-9 px-6 border-2 border-gray-300 rounded-full transition duration-300 
                 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100"
              >
                {" "}
                <div className={styles.btnWrap}>
                  <img
                    src="https://img.icons8.com/material-outlined/24/000000/mac-os--v2.png"
                    class="w-5"
                    alt="apple logo"
                  />
                  <span className={styles.btnSpan}>Login with Apple</span>
                </div>
              </button>
            </div>
            <form className={styles.form} onSubmit={handleSignIn}>
              <div className={styles.inputBox}>
                <input
                  type="text"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required="required"
                />
                <span className={styles.user}>Username</span>
              </div>
              <div className={styles.inputBox}>
                <input
                  type="password"
                  required="required"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
                <span>Password</span>
              </div>
              {isLoading ? (
                <button className={styles.btn} disabled>
                  Sign in..
                </button>
              ) : (
                <div className={styles.LoginBtn}>
                  <button className={styles.btn} type="submit">
                    Sign in
                  </button>
                  {error && <p className={styles.error}> {error}</p>}
                </div>
              )}
              <div className="flex items-center justify-center w-3/5">
                <p
                  className={styles.tag}
                  onClick={() => {
                    navigate("/SignUp");
                  }}
                >
                  <p className={styles.tagTop}>Don't have an accout?</p>
                  Register here
                </p>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
