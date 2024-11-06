
# API Template

## Descripción
Este proyecto es una plantilla de API backend construida con Node.js, Express, y TypeScript, diseñada para rendimiento y escalabilidad. Soporta PostgreSQL para almacenamiento general y MongoDB para manejo de chats en tiempo real.

## Características
- **Autenticación y Roles**: Gestión de usuarios con roles y cifrado de contraseñas.
- **WebSockets**: Integración con Socket.io para notificaciones y chats en tiempo real.
- **Pruebas Automáticas**: Configuración de Jest para pruebas unitarias e integración.
- **Registro de Logs**: Winston para registro de errores y logs de aplicación.
- **Manejo de Errores**: Middleware para captura y manejo centralizado de errores.
- **Docker**: Configuración para PostgreSQL y MongoDB en contenedores Docker.

## Requisitos Previos
- Node.js y npm instalados
- Docker (para ejecutar las bases de datos en contenedores)

## Configuración del Proyecto

### 1. Clonar el Repositorio
```bash
git clone <URL-del-repositorio>
cd api-template
2. Instalar Dependencias
bash
Copiar código
npm install
3. Configuración del Archivo .env
Crea un archivo .env en la raíz del proyecto basado en .env.example y completa las variables necesarias:

DATABASE_URL para PostgreSQL
JWT_SECRET para autenticación
4. Configuración de Docker
Para iniciar las bases de datos PostgreSQL y MongoDB en contenedores, ejecuta:

bash
Copiar código
docker-compose up -d
5. Ejecutar el Servidor en Modo de Desarrollo
bash
Copiar código
npm run dev
6. Ejecutar Pruebas
Para ejecutar las pruebas con Jest:

bash
Copiar código
npm test
Estructura del Proyecto
src/
controllers/: Controladores de la lógica de rutas.
middleware/: Middlewares de autenticación y manejo de errores.
services/: Lógica de negocio independiente de los controladores.
repositories/: Acceso a datos.
subscriptions/: Configuración de eventos en tiempo real.
logs/: Archivos de logs generados por Winston.
tests/: Pruebas unitarias y de integración.
config/: Configuración de bases de datos.
types/: Tipos y definiciones de TypeScript.
Contribuciones
Las contribuciones son bienvenidas. Por favor, sigue las guías de estilo de código y asegúrate de que todas las pruebas pasan antes de hacer un pull request.

Licencia
Este proyecto está licenciado bajo la MIT License.

Copiar código
Este archivo README proporciona instrucciones detalladas sobre la instalación, configuración y ejecución del proyecto, así como una descripción general de su estructura y funcionalidades.

### Prisma y Migraciones

Este proyecto utiliza **Prisma** como ORM (Object-Relational Mapping) para interactuar con la base de datos de manera eficiente y estructurada. Prisma permite definir modelos de datos en archivos `.prisma`, los cuales representan tablas en la base de datos. Para mantener una arquitectura modular, cada modelo se define en un archivo separado dentro de la carpeta `prisma/schema`, y Prisma combina estos archivos para generar un esquema unificado.

#### Cómo realizar migraciones

Para realizar migraciones, que son cambios en la estructura de la base de datos (como añadir o modificar tablas), sigue estos pasos:

1. **Definir o modificar un modelo** en un archivo `.prisma` dentro de la carpeta `prisma/schema`.
2. **Ejecutar la migración** con el siguiente comando, proporcionando un nombre descriptivo para la migración:

   ```bash
   npx prisma migrate dev --name nombre_migracion

Esto creará un archivo de migración con las instrucciones SQL necesarias y aplicará los cambios a la base de datos.

Generar el cliente de Prisma usando:

bash
Copiar código
npx prisma generate
Esto asegura que Prisma esté sincronizado con los cambios recientes, actualizando los tipos y permitiendo el uso de los modelos en el código.

Este flujo de trabajo asegura que la base de datos esté siempre sincronizada con los modelos definidos en Prisma, facilitando una estructura de datos coherente y escalable.

go
Copiar código
