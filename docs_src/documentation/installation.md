# 🚀 **Installation Guide**

Welcome to the installation guide! Follow these steps to set up the application on your system.

---

## ✅ **Prerequisites**
Before you begin, ensure you have the following installed:

- 🐍 **Python 3.10+**: Required for running the application. Ensure the version is **≥ 3.10 and < 3.13**.
- 📦 **pip**: Python's package installer for managing dependencies.
- 🐳 **Docker Desktop**: For containerized deployment and running services.

---

## 🐳 **Step 1: Install Docker Desktop**
1. 🔗 Download Docker Desktop from the [official website](https://www.docker.com/products/docker-desktop).
2. Follow the installation instructions for your operating system:
   - **Windows**: Ensure **WSL 2** is installed and enabled.
   - **Mac**: Use the appropriate version for **Intel** or **Apple Silicon** chips.
   - **Linux**: Install **Docker Engine** and **Docker Compose** separately if Docker Desktop is unavailable.
3. ✅ Verify Docker is running by executing the following command in your terminal:
   ```sh
   docker --version
   ```

---

## ⚙️ **Step 2: Run Docker Compose**
1. Navigate to the project directory containing the `docker-compose.yml` file:
   ```sh
   cd path/to/your/project
   ```
2. Start the services by running:
   ```sh
   docker-compose up
   ```
3. 🛠️ Docker Compose will:
   - Pull the required images.
   - Create containers.
   - Start the application.
4. 📜 Check the logs to ensure the services are running.

---

## 🌐 **Step 3: Verify Installation**
1. Open your browser and navigate to the application URL (e.g., `http://localhost:8000`).
2. 🎉 Confirm that the application is accessible and functioning as expected.

---

## 💡 **Optional: Install Python Dependencies**
If you prefer not to use Docker, you can manually install the Python dependencies:

1. 🛠️ Create a virtual environment:
   ```sh
   python -m venv venv
   ```
2. 🔑 Activate the virtual environment:
   - **Windows**:
     ```sh
     venv\Scripts\activate
     ```
   - **Mac/Linux**:
     ```sh
     source venv/bin/activate
     ```
3. 📦 Install dependencies from the `requirements.txt` file:
   ```sh
   pip install -r requirements.txt
   ```

---

## 🎯 **Next Steps**
Now that the application is installed, you're ready to start exploring its features. Happy coding! 🚀