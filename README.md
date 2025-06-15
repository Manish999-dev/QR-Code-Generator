# QR-Code-Generator

This is a simple Node.js project that generates a QR code image from a URL provided by the user via the command line.

## Features

- Prompts the user to enter a URL using the `inquirer` package.
- Generates a QR code image for the entered URL using the `qr-image` package.
- Saves the generated QR code as a PNG file.
- Saves the entered URL to a text file (`URL.txt`).

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name

2. Install dependencies:

    ```bash
    npm install
## Usage
  Run the application using:
  
      node index.js
  -You will be prompted to enter a URL. After entering it, the app will:
  
  -Generate a QR code image (qr_img.png) in the project directory.
  
  -Save the URL in a file named URL.txt.

## Dependencies
-inquirer ^12.6.3

-qr-image ^3.2.0

## Author
Manish Kumar Dangal Magar

## License

This project is licensed under the [ISC License](https://opensource.org/licenses/ISC).

## Screenshot

![QR Code CLI Screenshot](./screenshot.png)

## Technologies Used

- Node.js
- Inquirer
- QR-Image
- File System Module (fs)

## Future Improvements

- Add an option to open the generated QR code automatically.
- Let users customize the output file name.
- Create a web-based interface for non-developers.
