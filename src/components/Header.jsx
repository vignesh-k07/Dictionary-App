import React, { useEffect, useState } from "react";
import { FaUserAlt } from "react-icons/fa";

import appLogo from "../assets/app-logo.jpg";

const styles = {
  header: "flex justify-around items-center h-20 bg-[#251D3A]",
  logoContainer: "flex items-center justify-between ml-10",
  logo: "w-[50px] h-[50px] rounded-xl",
  logoText: "text-white font-bold text-xl ml-5",
  headerItems: "flex items-center justify-end",
  headerItem: "m-2 p-2",
  button:
    "bg-[#0E3056] hover:bg-[#333C83] text-white font-bold py-2 px-4 rounded shadow-xl",
};

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logoContainer}>
        <img src={appLogo} className={styles.logo} />
        <div className={styles.logoText}>Dictionary App</div>
      </div>
      <div className={styles.headerItems}>
        <div className={styles.headerItem}>
          <button type="button" className={styles.button}>
            Connect Wallet
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header