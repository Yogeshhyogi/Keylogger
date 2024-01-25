# Keylogger Software

## Description:

Keylogger software is a beginner-level cybersecurity project designed to record every keystroke made by the user on their keyboard devices. This simple yet effective software can be used for various purposes, such as monitoring user activity, enhancing security, or understanding keyboard input patterns.

## Features:

- **Real-time Key Logging:** Captures and logs each keystroke made by the user.
- **Event Handling:** Utilizes event handling to track keydown events on the keyboard.
- **Error Handling:** Incorporates error handling to manage and log any potential errors during execution.
- **Customizable Output:** Provides flexibility in customizing the output format, making it suitable for different use cases.
- **Modular Structure:** Organizes code into separate modules, enhancing readability and maintainability.

## Usage:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/keylogger.git
   ```

2. **Install Dependencies:**
   ```bash
   cd keylogger
   npm install
   ```

3. **Run the Keylogger:**
   - Navigate to the project directory:
     ```bash
     cd keylogger
     ```
   - Run the keylogger script:
     ```bash
     node main.js
     ```

4. **View Output:**
   Monitor the console output for real-time keypress information.

## Customization:

- **Throttling (Optional):** If needed, adjust the throttling interval in `main.js` to control the frequency of output.

```javascript
// Throttle the output function to print messages every 500 milliseconds
const throttledOutput = throttle(event => {
  const keyId = keycodes[event.keyCode];
  console.log(`Key Pressed: ${keyId} - Timestamp: ${event.timeS}.${event.timeMS}`);
}, 500);
```

## Notes:

- Ensure that your user has the necessary permissions to access `/dev/input` for the keylogger to function correctly.
- This project is intended for educational purposes and ethical use only.

## How to Stop the Keylogger:

To stop the keylogger, press `Ctrl + C` in the terminal where the keylogger is running. This will interrupt the execution and gracefully stop the keylogger script.

Feel free to explore, experiment, and enhance this keylogger software according to your learning goals and project requirements. Happy coding!
