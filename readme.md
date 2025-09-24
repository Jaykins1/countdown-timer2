# ⏱️ Countdown Timer

A modern, responsive countdown timer built with vanilla HTML, CSS, and JavaScript. Features a sleek glassmorphism design with full timer functionality and quick preset options.

## 🚀 Features

- **Custom Time Setting**: Set hours, minutes, and seconds individually
- **Quick Presets**: One-click buttons for 1min, 5min, 10min, 25min, and 1 hour
- **Timer Controls**: Start, pause, and reset functionality
- **Visual Feedback**: Real-time countdown display with status messages
- **Audio Notification**: Text-to-speech alert when timer completes
- **Background Tab Support**: Continues counting even when browser tab is inactive
- **Modern UI**: Glassmorphism design with smooth animations and hover effects
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices

## 🛠️ Technologies Used

- **HTML5**: Semantic structure and form inputs
- **CSS3**: Modern styling with gradients, backdrop filters, and animations
- **Vanilla JavaScript**: Timer logic, DOM manipulation, and browser APIs

## 📁 Project Structure

```
countdown-timer/
├── index.html          # Main HTML structure
├── style.css           # Styling and responsive design
├── ind.js              # JavaScript functionality
└── README.md           # Project documentation
```

## 🎯 JavaScript Concepts Demonstrated

- **DOM Manipulation**: Selecting and updating HTML elements
- **Event Handling**: Input changes, button clicks, and browser events
- **Timing Functions**: `setInterval()` and `clearInterval()`
- **Date/Time Calculations**: Converting and formatting time units
- **Browser APIs**: Speech Synthesis and Page Visibility API
- **Input Validation**: Ensuring valid time values
- **State Management**: Tracking timer status and user interactions

## 🎨 CSS Features

- **Glassmorphism Effect**: Semi-transparent background with backdrop blur
- **CSS Gradients**: Modern background and button styling
- **Flexbox Layouts**: Responsive and centered design
- **CSS Animations**: Pulse effect for timer completion
- **Hover Effects**: Interactive button feedback
- **Media Queries**: Mobile-first responsive design

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No server setup required - runs locally

### Installation
1. Clone or download the project files
2. Ensure all files are in the same directory:
   ```
   countdown-timer/
   ├── index.html
   ├── style.css
   └── ind.js
   ```
3. Open `index.html` in your web browser

### Usage
1. **Set Timer**: Enter desired hours, minutes, and seconds, or use quick preset buttons
2. **Start**: Click the green "Start" button to begin countdown
3. **Pause**: Click the orange "Pause" button to temporarily stop the timer
4. **Reset**: Click the red "Reset" button to restore original time settings
5. **Quick Set**: Use preset buttons for common timer durations

## 🔧 Customization Options

### Changing Colors
Edit the CSS variables in `style.css`:
```css
/* Background gradient */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Button colors */
.start-btn { background: linear-gradient(45deg, #4CAF50, #45a049); }
.pause-btn { background: linear-gradient(45deg, #ff9800, #f57c00); }
.reset-btn { background: linear-gradient(45deg, #f44336, #d32f2f); }
```

### Adding New Presets
Add new quick-set buttons in HTML:
```html
<button class="quick-btn" onclick="quickSet(30,0,0)">30 Min</button>
```

### Modifying Notifications
Update the notification message in `ind.js`:
```javascript
const utterance = new SpeechSynthesisUtterance("Your custom message!");
```

## 📱 Browser Compatibility

- **Chrome**: ✅ Full support
- **Firefox**: ✅ Full support
- **Safari**: ✅ Full support
- **Edge**: ✅ Full support
- **Mobile Browsers**: ✅ Responsive design

## 🐛 Troubleshooting

### Timer Not Starting
- Check browser console (F12) for JavaScript errors
- Ensure all file names match the HTML references
- Verify all three files are in the same directory

### Buttons Not Working
- Confirm JavaScript file is properly linked in HTML
- Check for typos in function names (case-sensitive)
- Ensure no syntax errors in JavaScript code

### Styling Issues
- Verify CSS file is properly linked in HTML
- Check for missing closing brackets in CSS rules
- Clear browser cache and refresh page

## 📝 Learning Outcomes

This project demonstrates:
- **File Organization**: Proper separation of HTML, CSS, and JavaScript
- **Modern CSS**: Advanced styling techniques and responsive design
- **JavaScript Fundamentals**: DOM manipulation, timing, and event handling
- **User Experience**: Interactive feedback and accessibility considerations
- **Code Quality**: Clean, commented, and maintainable code structure

## 🔄 Future Enhancements

Potential improvements for portfolio expansion:
- **Sound Files**: Custom notification sounds
- **Multiple Timers**: Run several timers simultaneously  
- **Local Storage**: Save user preferences and timer presets
- **Themes**: Dark/light mode toggle
- **Progress Bar**: Visual countdown representation
- **Keyboard Shortcuts**: Space to start/pause, R to reset

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements!

---

**Built with ❤️ for learning and portfolio development**