import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import logo from "../../assets/login_desktop.png";
import Login from "../Login/Login.module.css";
import { firbaseauth } from "../../utils/Firebase";
import styles from "./SignUp.module.css";
export default function Signup(props) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [button, isLoad] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [userName, setUserName] = useState("");
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firbaseauth, (currentUser) => {
      setUser(currentUser);
      setIsLoading(false);
      if (currentUser) {
        navigate("/");
      }
    });
    return unsubscribe;
  }, [navigate]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    isLoad(true);
    try {
      await createUserWithEmailAndPassword(firbaseauth, email, password);
      setEmail("");
      setPassword("");
      setError(null);
      alert("Successfully registered!");
      setTimeout(() => {
        navigate("/");
      }, 1300);
      isLoad(false);
    } catch (error) {
      setError(error.message);
      setTimeout(() => {
        setError(null);
      }, 1400);
      isLoad(false);
    }
  };
  return isLoading ? (
    <div>Loading...</div>
  ) : user ? (
    <div>Redirecting...</div>
  ) : (
    <div className={styles.mainDiv}>
      <div className={styles.left}>
        <img src={logo} alt="" />
      </div>
      <div>
        <div className={styles.card}>
          <p className={styles.singup}>Sign Up</p>
          <div className={styles.inputBox1}>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className={styles.user}>Email</span>
          </div>

          <div className={styles.inputBox}>
            <input
              type="text"
              required
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
                props.handleNameChange(e);
              }}
            />
            <span>Username</span>
          </div>

          <div className={styles.inputBox}>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span>Password</span>
          </div>
          <div className="flex flex-col justify-center items-center w-full">
            {button ? (
              <button className={styles.btn} disabled>
                Loading...
              </button>
            ) : (
              <button
                className={styles.btn}
                type="submit"
                onClick={handleSubmit}
              >
                SignUp
              </button>
            )}
            {error && <p className="mb-2 text-red-600">{error}</p>}
            <div className="flex items-center justify-center w-3/5">
              <p className={Login.tag} onClick={() => navigate("/Login")}>
                <p className={Login.tagTop}>Already have an accout?</p>
                Login here
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
