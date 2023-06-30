import React from "react";
import styles from "./Apple.module.css";
import { useNavigate } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { Model } from "./Model/Model";
import { OrbitControls, Stage } from "@react-three/drei";
export default function Apple() {
  const nav = useNavigate();
  return (
    <div className={`${styles.maindiv} flex items-center justify-center  `}>
      <div className="flex  flex-col items-center justify-center gap-3 md:flex-row ">
        <img
          src="https://uiverse.io/build/_assets/sad-astronaut-2GA54L3F.png"
          alt=""
        />
        <p className="text-white font-bold text-xl underline">
          Can't affort Apple or the api
        </p>
        <div className="flex flex-col gap-5">
          <button className={` ${styles.button}`}>
            {" "}
            <a href="https://www.youtube.com/watch?v=9CfAlk0R3gw">
              Learn why : )
            </a>
          </button>
          <button
            className="fancy"
            onClick={() => {
              nav("/login");
            }}
          >
            <div class="svg-wrapper-1">
              <div class="svg-wrapper">
                <svg
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </div>
            <span>Login</span>
          </button>
        </div>
      </div>
      <div className={styles.CanvasDiv}>
        <Canvas>
          <Stage environment={"city"} intensity={"0.7"}>
            <Model />
          </Stage>
          <OrbitControls enableZoom={true} autoRotate={true} />
        </Canvas>
      </div>
    </div>
  );
}
