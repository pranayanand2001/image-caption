# Image Manipulation Web Application

This web application allows users to search for images using the Unsplash API and customize them by adding captions and shapes. The app utilizes Fabric.js for canvas manipulation, enabling users to drag, resize, and reposition elements on the canvas before downloading the modified image.

## Features

- **Image Search**: Search for images using the Unsplash API by entering keywords.
- **Image Customization**: Add customizable captions and various shapes (circle, rectangle, triangle, polygon) to images.
- **Canvas Manipulation**: Drag, resize, and reposition shapes and text on the image canvas.
- **Download Modified Image**: Download the customized image directly with all applied modifications.

## Demo

Check out the live demo on **GitHub Pages**: [Live Demo Link](https://pranayanand2001.github.io/image-caption)

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript (Vanilla JS)
- **API**: Unsplash API for image search
- **Canvas Manipulation**: Fabric.js for handling image, text, and shape layering and interactions

## Getting Started

### Prerequisites

- **Unsplash API Access Key**: Sign up at [Unsplash Developer](https://unsplash.com/developers) to get an API Access Key.

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/image-caption.git
   cd image-caption
   ```

2. **Add API Key**:
   - In the project directory, create a `.env` file and add your Unsplash API Access Key:

     ```plaintext
     REACT_APP_UNSPLASH_ACCESS_KEY=your_access_key
     ```

3. **Run the application locally**:

   ```bash
   open index.html
   ```

4. **Deploy to GitHub Pages**:
   - Ensure your repository is set up to deploy on GitHub Pages. Once configured, GitHub will build and deploy your project automatically.

## Usage

1. **Search Images**: Enter a keyword in the search bar and click "Search" to retrieve images from the Unsplash API.
2. **Add Captions and Shapes**: Click "Add Captions" next to an image to open the editor. Use the options to add text or shapes, drag and resize them as needed.
3. **Download Image**: Once satisfied with your edits, click "Download" to save the image with your modifications.

## Troubleshooting

- **CORS Issues**: If you encounter CORS issues, make sure your API key is valid and that you’re sending requests from a permitted domain.
