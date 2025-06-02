# 🎲 Dice or Die

Un juego de mesa digital donde debes avanzar por el tablero, recolectar dados especiales y enfrentarte a jefes. ¿Usarás la fuerza o el soborno para vencer?

## 📝 Descripción

Dice or Die es un juego de mesa por turnos donde el jugador debe:

- Avanzar por el tablero usando dados
- Recolectar dados especiales con diferentes efectos
- Ganar dinero en casillas especiales
- Enfrentarse a jefes al final de cada etapa
- Decidir entre derrotar a los jefes en combate o sobornarlos

## 🚀 Tecnologías Utilizadas

- Vue.js 3
- Pinia (manejo de estado)
- Vite
- Docker
- GitHub Actions (CI/CD)
- Vitest (Testing)
- Eslint (Linter)

## 🛠️ Instalación y Ejecución Local

### Prerrequisitos

- Node.js v20 o superior
- pnpm (recomendado) o npm

### Pasos de Instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/Dantexito/Solemne2_AppWeb.git
cd Solemne2_AppWeb
```

2. Instalar dependencias:

```bash
pnpm install
```

3. Ejecutar en modo desarrollo:

```bash
pnpm dev
```

4. Ejecutar pruebas:

```bash
pnpm test
```

5. Construir para producción:

```bash
pnpm build
```

## 🐳 Ejecución con Docker

### Usando Docker Hub

```bash
docker pull lbrowni/dice_or_die:latest
docker run -p 8080:80 lbrowni/dice_or_die:latest
```

### Construcción Local

1. Construir la imagen:

```bash
docker build -t dice_or_die .
```

2. Ejecutar el contenedor:

```bash
docker run -p 8080:80 dice_or_die
```

## 🔗 Enlaces

- [Docker Hub](https://hub.docker.com/r/lbrowni/dice_or_die)
- [GitHub Repository](https://github.com/Dantexito/Solemne2_AppWeb)

## ✅ Tests

El proyecto incluye pruebas unitarias usando Vitest. Para ejecutar las pruebas:

```bash
# Ejecutar pruebas
pnpm test
```

## 👥 Autores

- Nombre: Lucas Brown Ibieta
- GitHub: [@LBrownI](https://github.com/LBrownI)

- Nombre: Dante Quezada Poblete
- GitHub: [@Dantexito](https://github.com/Dantexito)
