import React, { useEffect } from 'react';

const TelegramLogin = () => {
  useEffect(() => {
    // Load the Telegram widget script
    const script = document.createElement('script');
    script.src = 'https://telegram.org/js/telegram-widget.js?22';
    script.async = true;
    script.setAttribute('data-telegram-login', 'ConnectVerseBot');
    script.setAttribute('data-size', 'large');
    script.setAttribute('data-onauth', 'onTelegramAuth(user)');
    script.setAttribute('data-request-access', 'write');
    document.getElementById('telegram-login').appendChild(script);
  }, []);

  const onTelegramAuth = (user) => {
    alert(`Logged in as ${user.first_name} ${user.last_name} (${user.id}${user.username ? ', @' + user.username : ''})`);
  };

  // Make sure this function is globally accessible
  window.onTelegramAuth = onTelegramAuth;

  return (
    <div id="telegram-login">
      {/* Telegram login button will be injected here */}
    </div>
  );
};

export default TelegramLogin;
