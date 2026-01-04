# QRCode Generator

A simple web application for generating QR codes from URLs. No login required - just enter a URL and get your QR code instantly.

## Features

- Generate QR codes from any URL
- Download QR codes as PNG images
- Responsive design that works on desktop and mobile
- Clean, modern UI with loading animations
- No authentication or sign-up needed

## Technologies Used

- **Backend**: Python Flask
- **Frontend**: HTML, CSS, JavaScript
- **QR Code Generation**: Python qrcode library

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd QRCode
   ```

2. Install Python dependencies:
   ```bash
   pip install flask qrcode[pil]
   ```

3. Run the application:
   ```bash
   python backend/app.py
   ```

4. Open your browser and navigate to `http://localhost:5001`

## Usage

1. Enter a URL in the input field
2. Click the "Touch me to create the QRCode" button
3. Wait for the QR code to generate
4. View the QR code on the page
5. Click "Download QR Code" to save the image

## Project Structure

```
QRCode/
├── backend/
│   └── app.py          # Flask server and QR generation logic
├── frontend/
│   ├── index.html      # Main HTML page
│   ├── style.css       # Styling and animations
│   └── main.js         # Frontend JavaScript logic
└── README.md           # This file
```

## API Endpoints

- `GET /` - Serves the main HTML page
- `GET /style.css` - Serves the CSS file
- `GET /main.js` - Serves the JavaScript file
- `POST /generate_qr` - Generates QR code from URL
  - Request body: `{"url": "https://example.com"}`
  - Response: PNG image of the QR code

## Contributing

Feel free to submit issues and pull requests.

## Author

Created by Kauê Leandro Farias Monteiro

- GitHub: [kmdev-cmd](https://github.com/kmdev-cmd/)
- LinkedIn: [Kauê Leandro Farias Monteiro](https://www.linkedin.com/in/kau%C3%AA-leandro-farias-monteiro-80a9a13a2/)
