# Roomunity Front

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.6.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Structure

```bash
home-manager-frontend/
├── src/
│   ├── app/
│   │   ├── core/                      # Módulo Core: Servicios y lógica global.
│   │   │   ├── interceptors/          # Interceptores HTTP.
│   │   │   ├── guards/                # Guards de rutas.
│   │   │   ├── services/              # Servicios globales (autenticación, notificaciones).
│   │   │   ├── models/                # Modelos compartidos en toda la aplicación.
│   │   │   ├── utils/                 # Utilidades (helpers, validaciones).
│   │   │   └── core.module.ts         # Configuración del módulo Core.
│   │   ├── shared/                    # Módulo compartido: Componentes y pipes reutilizables.
│   │   │   ├── components/            # Componentes reutilizables (botones, tablas).
│   │   │   ├── directives/            # Directivas personalizadas.
│   │   │   ├── pipes/                 # Pipes personalizados.
│   │   │   └── shared.module.ts       # Configuración del módulo Shared.
│   │   ├── features/                  # Módulos funcionales de la aplicación.
│   │   │   ├── calendar/              # Módulo Calendario.
│   │   │   │   ├── components/        # Componentes específicos del calendario.
│   │   │   │   ├── pages/             # Páginas principales del calendario.
│   │   │   │   ├── services/          # Servicios relacionados con el calendario.
│   │   │   │   ├── models/            # Modelos específicos.
│   │   │   │   └── calendar.module.ts # Configuración del módulo.
│   │   │   ├── tasks/                 # Módulo Tareas.
│   │   │   │   ├── (Estructura similar a calendar/)
│   │   │   ├── shopping/              # Módulo Lista de Compras.
│   │   │   │   ├── (Estructura similar a calendar/)
│   │   │   └── health/                # Módulo Salud.
│   │       │   ├── (Estructura similar a calendar/)
│   │   ├── layout/                    # Layout principal de la aplicación.
│   │   │   ├── header/                # Encabezado.
│   │   │   ├── footer/                # Pie de página.
│   │   │   ├── sidebar/               # Menú lateral.
│   │   │   └── layout.module.ts       # Configuración del layout.
│   │   └── app.module.ts              # Módulo principal de la aplicación.
│   ├── assets/                        # Archivos estáticos (imágenes, fuentes, etc.).
│   ├── environments/                  # Configuraciones para entornos (dev, prod).
│   ├── styles/                        # Estilos globales.
│   └── index.html                     # Punto de entrada HTML.

```
