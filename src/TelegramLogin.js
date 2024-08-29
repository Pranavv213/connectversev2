import React, { useEffect } from 'react';
import { db } from "./firebase-config.js";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
const userCollection = collection(db, "user2");

const TelegramLogin = () => {
  useEffect(() => {
    // Load the Telegram widget script
    const script = document.createElement('script');
    script.src = 'https://telegram.org/js/telegram-widget.js?22';
    script.async = true;
    script.setAttribute('data-telegram-login', 'ConnectVerseBot');
    script.setAttribute('data-size', 'medium');
    script.setAttribute('data-onauth', 'onTelegramAuth(user)');
    script.setAttribute('data-request-access', 'write');
    document.getElementById('telegram-login').appendChild(script);
  }, []);

  const onTelegramAuth = async (user) => {
    
   
    
    // Change the button text after successful authentication
    const buttonElement = document.querySelector('.telegram-login-button'); // Update this selector based on actual button class or ID
    localStorage.setItem('telegram_username',user.username)
    buttonElement.innerText = 'Logged in as @'+user.username;
    await addDoc(userCollection,{username:user.username});
   
    
  
    
   
  };

  window.onTelegramAuth = onTelegramAuth;

  return (
 
      <div id="telegram-login">
       
      </div>
  
  );
};

export default TelegramLogin;
