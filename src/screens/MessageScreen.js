import React, {useState} from 'react';

const MessageScreen = () => {
  const [publicMessages, setPublicMessages] = useState([]);
  const [privateMessages, setPrivateMessages] = useState([]);

  // Function to handle sending a public message
  const sendPublicMessage = message => {
    // Add the message to the publicMessages state
    setPublicMessages([...publicMessages, message]);
  };

  // Function to handle sending a private message
  const sendPrivateMessage = message => {
    // Add the message to the privateMessages state
    setPrivateMessages([...privateMessages, message]);
  };

  return (
    <div>
      <h1>Public Messages</h1>
      <ul>
        {publicMessages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>

      <h1>Private Messages</h1>
      <ul>
        {privateMessages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>

      <input
        type="text"
        placeholder="Enter a public message"
        onChange={e => sendPublicMessage(e.target.value)}
      />

      <input
        type="text"
        placeholder="Enter a private message"
        onChange={e => sendPrivateMessage(e.target.value)}
      />
    </div>
  );
};

export default MessageScreen;
