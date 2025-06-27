# James White Portfolio Site

This is the personal portfolio website for **James White**, a Platform & Automation Engineer specializing in DevOps, cloud migration, and IT systems management. The site showcases James's professional experience, skills, certifications, and provides a downloadable CV.

## About the Site

- **Purpose:**  
  To present James White's professional background, technical skills, certifications, and recent projects in a modern, responsive format. The site also provides contact information and a downloadable CV.

- **Features:**  
  - Responsive design using [Bootstrap](https://getbootstrap.com/)
  - Built with [React](https://react.dev/) (bootstrapped with [Create React App](https://github.com/facebook/create-react-app))
  - Modular React components for easy maintenance and scalability
  - Downloadable CV/Resume
  - Clean, dark-themed UI with accessible navigation
  - Source code and assets organized for clarity

## How It Was Made

- **Framework:**  
  [React](https://react.dev/) (using Create React App)

- **Styling:**  
  [Bootstrap 5](https://getbootstrap.com/) and [Bootstrap Icons](https://icons.getbootstrap.com/) for layout, components, and icons.  
  Custom CSS for additional tweaks.

- **Structure:**  
  - Each major section (Bio, Experience, Certifications, Resume, Footer) is a separate React component in `src/components/`.
  - The navigation bar and footer are shared across all pages.
  - Static assets (images, CV) are stored in the `public/` folder.

- **Deployment:**  
  The site can be deployed as a static site using GitHub Pages, Azure Static Web Apps, or any static hosting provider.

## Getting Started

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/portfolio-site.git
   cd portfolio-site
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Run the development server:**
   ```sh
   npm start
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the site.

4. **Build for production:**
   ```sh
   npm run build
   ```
   This will create a `build` folder with the production-ready files.

5. **Deploy the site:**
   - For GitHub Pages, run `npm run deploy` (ensure your repository is correctly set in `package.json`).
   - For other hosts, upload the contents of the `build` folder to your web server.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
