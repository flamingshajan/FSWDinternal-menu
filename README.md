# 🍴 The Golden Spoon Bistro Menu Display

A modern, responsive React application showcasing a restaurant menu. It features reusable components, clear list rendering using the `map()` method, and conditional rendering for dietary badges, built with **Vite**.

## 🚀 Links (Mandatory for Submission)

- **GitHub Repository:** [https://github.com/flamingshajan/FSWDinternal-menu.git]
- **Live Website:** (https://menu-fswd-flaming.netlify.app/)

## 🏗️ Component Structure

The application is built around two main components:

- **`App.jsx`**: Manages the application state, holds the menu data, renders the Header, Footer, Restaurant Info, and uses `map()` to display the menu lists.
- **`MenuItem.jsx`**: A reusable, presentation component that accepts `name`, `price`, `description`, `category`, and `isVegetarian` as props. It implements **conditional rendering** to show a distinctive green "Vegetarian 🌿" badge if `isVegetarian` is `true`.

## ⚙️ Run Locally

Follow these steps to get the project running on your local machine:

1.  **Clone the repository:**
    ```bash
    git clone [your-github-link]
    cd restaurant-menu-app
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Run the project in development mode:**
    ```bash
    npm run dev
    ```
4.  Open the link provided in your terminal (usually `http://localhost:5173`) in your browser.

## ☁️ Deployment Instructions

### 1. GitHub Setup

1.  Create a **new public repository** on GitHub (e.g., `react-menu-app`).
2.  Initialize Git and push your code:
    ```bash
    git init
    git add .
    git commit -m "Initial commit: Completed React Menu App"
    git branch -M main
    git remote add origin [your-github-repo-url]
    git push -u origin main
    ```

### 2. Vercel/Netlify Deployment

1.  Go to **Vercel** or **Netlify** and sign in.
2.  Click "Add New" or "New Site from Git".
3.  Select your GitHub repository (`react-menu-app`).
4.  **Configuration (Vite default):**
    * **Framework Preset:** `Vite` (Vercel) or leave as default/React (Netlify)
    * **Build Command:** `npm run build`
    * **Output Directory:** `dist`
5.  Click **Deploy**.
6.  Once the deployment is complete, copy the live URL and paste it into the **README.md** file above.

### 3. Final Submission Step

Before zipping and submitting, make sure you **delete the `node_modules` folder** to reduce the file size:

```bash
# From the root of your project (restaurant-menu-app)
rm -rf node_modules
