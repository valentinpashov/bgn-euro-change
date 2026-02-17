# 💶 BGN to EUR Change Calculator

A modern, high-performance web application designed to automatically calculate change from Bulgarian Leva (BGN) to Euro (EUR) using the fixed exchange rate.

## ✨ Key Features

* **Real-Time Calculation:** Results update instantly as you type.
* **Modern UI:** Clean interface.
* **Smart Reset:** Reset button
* **🇧🇬 Fixed Rate:** Official exchange rate: **1.95583**.

## 🛠 Tech Stack

* **React**
* **Vite**
* **CSS3**
* **Vite PWA Plugin**

## 🚀 Getting Started

Follow these steps to run the project locally.

### Prerequisites
Make sure you have Node.js installed.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/YOUR-USERNAME/bgn-euro-change.git](https://github.com/YOUR-USERNAME/bgn-euro-change.git)
    cd bgn-euro-change
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```

4.  Open your browser at: `http://localhost:5173`

## 📂 Project Structure

```text
src/
├── components/
│   ├── MoneyInput.jsx      # Reusable input component with modern styling
│   ├── MoneyInput.css      # Styles for inputs
│   ├── ChangeResult.jsx    # Component to display the calculated change
│   └── ChangeResult.css    # Styles for the result card
├── App.jsx                 # Main application logic and state management
├── App.css                 # Global layout, "Aurora" background, and Reset button
└── main.jsx                # Application entry point
└── index.css               
