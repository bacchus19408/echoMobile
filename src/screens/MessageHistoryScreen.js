// Initialize an empty array to store the message history
const messageHistory = [];

// Function to add a new message to the history
const addMessageToHistory = message => {
  messageHistory.push(message);
};

// Example usage
addMessageToHistory('Hello, world!');
addMessageToHistory('How are you?');

console.log(messageHistory); // Output: ["Hello, world!", "How are you?"]
