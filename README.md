
# 🎲 Dice or Die

A digital board game where you advance across the board, collect special dice, and face powerful bosses. Will you use force or bribery to achieve victory?

## 📝 Description

Dice or Die is a turn-based board game where the player must:

  * Advance across the board using dice.
  * Collect special dice with different effects.
  * Earn money on special squares.
  * Confront bosses at the end of each stage.
  * Decide between defeating bosses in combat or bribing them.

## 🚀 Technologies Used

  * **Frontend:** Vue.js 3, Pinia (State Management), Vite
  * **Backend:** Express.js, Node.js
  * **Database:** MongoDB
  * **Containerization:** Docker & Docker Compose
  * **CI/CD:** GitHub Actions
  * **Testing:** Vitest
  * **Linter:** Eslint

## 🛠️ Installation and Local Execution

The project is divided into a frontend and a backend. You will need to run both simultaneously.

### Prerequisites

  * Node.js v20 or superior
  * pnpm (recommended) or npm
  * A local instance of MongoDB running, or a connection string to a cloud database.

### Backend Setup

1.  Navigate to the backend directory:
    ```bash
    cd backend
    ```
2.  Install backend dependencies:
    ```bash
    pnpm install
    ```
3.  Create a `.env` file in the `/backend` directory and add your MongoDB connection string:
    ```
    MONGODB_URI=your_mongodb_connection_string
    ```
4.  Run the backend server:
    ```bash
    pnpm start
    ```
    The API will be running on `http://localhost:3000`.

### Frontend Setup

1.  From the project root, navigate to the frontend directory:
    ```bash
    cd frontend
    ```
2.  Install frontend dependencies:
    ```bash
    pnpm install
    ```
3.  Create a `.env` file in the `/frontend` directory to point to your local backend:
    ```
    VITE_API_BASE_URL=http://localhost:3000
    ```
4.  Run the frontend in development mode:
    ```bash
    pnpm dev
    ```
    The application will be available at `http://localhost:8080` (or another port if 8080 is busy).

## 🐳 Execution with Docker (Recommended)

The easiest way to run the entire application (frontend, backend, and database) is with Docker Compose.

### Prerequisites

  * Docker and Docker Compose installed.
  * `.env` file in the `/frontend` directory with: `VITE_API_BASE_URL=http://localhost:3000`

### Steps

1.  From the project root directory, build and run all the services in the background:

    ```bash
    docker-compose up --build -d
    ```

2.  The application will be available at **[http://localhost:8080](https://www.google.com/search?q=http://localhost:8080)**.

3.  To stop all services:

    ```bash
    docker-compose down
    ```

## 🔗 Enlaces

  * [GitHub Repository](https://github.com/LBrownI/dice-or-die)

## ✅ Tests

The project includes unit tests for the frontend using Vitest.

```bash
# Navigate to the frontend directory
cd frontend

# Run tests
pnpm test
```
## REFERENCES
* [uuuulala - Threejs Rolling Dice](https://github.com/uuuulala/Threejs-rolling-dice-tutorial)
* [byWulf - Threejs DICE](https://github.com/byWulf/threejs-dice)
* [Threejs D20 Mesh](https://jsfiddle.net/prisoner849/2wrmyatL/)


## 👥 Authors

  * **Lucas Brown Ibieta**
      * GitHub: [@LBrownI](https://github.com/LBrownI)
  * **Dante Quezada Poblete**
      * GitHub: [@Dantexito](https://github.com/Dantexito)
