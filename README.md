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
src/
  ├── app/
  │     ├── core/               # funcionalidades “globales”, usadas por muchas partes
  │     │     ├── services/      # servicios singleton: autenticación, comunicación API, guardias, etc.
  │     │     │    auth.service.ts
  │     │     │    api.service.ts
  │     │     └── guards/        # guardias de rutas, permisos, etc.
  │     │          auth.guard.ts
  │     │
  │     ├── shared/             # componentes / utilidades / UI reutilizable
  │     │     ├── components/    # cabecera, footer, modal genérica, spinner, etc.
  │     │     ├── pipes/         # pipes globales si los hay
  │     │     └── utils/         # funciones utilitarias, helpers, constantes, etc.
  │     │
  │     ├── features/           # aquí cada “gran funcionalidad” tiene su módulo
  │     │     ├── auth/          # login, registro, gestión de auth
  │     │     │     ├── components/
  │     │     │     │     login.component.ts + .html/.scss
  │     │     │     │     register.component.ts + .html/.scss
  │     │     │     ├── auth.service.ts   # si se especializa
  │     │     │     ├── auth-routing.module.ts
  │     │     │
  │     │     ├── notes/         # parte de notas compartidas entre usuarios
  │     │     │     ├── components/   # listado de notas, editor, etc.
  │     │     │     ├── services/     # lógica de notas: fetch, guardar, sincronizar…
  │     │     │     ├── models/       # interfaces / tipos de Nota, Usuario, etc.
  │     │     │     ├── notes-routing.module.ts
  │     │     │     └── notes.module.ts
  │     │     │
  │     │     ├── calendar/      # calendario / organización / agenda
  │     │     │     ├── components/   # vista calendario, evento, formulario evento…
  │     │     │     ├── services/     # lógica de gestión de eventos, sincronización, API
  │     │     │     ├── models/       # tipo Evento, etc.
  │     │     │     ├── calendar-routing.module.ts
  │     │     │     └── calendar.module.ts
  │     │     │
  │     │     ├── diet/          # parte de dietas
  │     │     │     ├── components/  
  │     │     │     ├── services/
  │     │     │     ├── models/
  │     │     │     ├── diet-routing.module.ts
  │     │     │     └── diet.module.ts
  │     │     │
  │     │     ├── workouts/      # parte de entrenamientos
  │     │     │     ├── components/
  │     │     │     ├── services/
  │     │     │     ├── models/
  │     │     │     ├── workouts-routing.module.ts
  │     │     │     └── workouts.module.ts
  │     │     │
  │     │     └── ...            # otras funcionalidades futuras...
  │     │
  │     ├── app-routing.module.ts  # configuración global de rutas + lazy-loading de features
  │     └── app.module.ts
  │
  ├── assets/       # imágenes, estilos globales, fuentes, etc.
  ├── environments/ # configuración para distintos entornos (dev, prod…)
  └── main.ts / index.html / etc.

```
