# Туториал по старту проекта с использованием React + TS + Vite

## Инициализация проекта

см. README.md чтобы заинициализировать вместе с линтерами

### Создаем в корне проекта `index.html`

```
 touch index.html
```

Добавляем в `index.html` контент

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Suit UP !</title>
</head>
<body>
<div id="root"></div>
<script type="module" src="/src/index.tsx"></script>
</body>
</html>
```

### Создаем в корне проекта `src`

```
 touch src
```

### Создаем файлы для инициализации реакта

<sub> опускаемся в src: </sub>

```
 cd src
```

<sub> добавляем типы для Vite: </sub>

```
 touch vite-env.d.ts
```

<sub> вставляем следующий код: </sub>

```
/// <reference types="vite/client" />
```

<sub> создаем файл для инициализации react </sub>

```
 touch index.tsx
```

<sub> вставляем следующий код: </sub>

```
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './app';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
```

### Создаем в `src` папку `app`, а там файл `index.tsx`

```
cd app

touch index.tsx
```

<sub> вставляем следующий код: </sub>

```
import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return <div>{count}</div>;
}

export default App;
```

### Создаем в корне проекта `.gitignore`

```
 touch .gitignore
```

<sub> вставляем следующий код: </sub>

```
# compiled output
/dist
/node_modules

# Tests
/coverage
/.nyc_output

# IDEs and editors
/.idea
.project
.classpath
.c9/
*.launch
.settings/
*.sublime-workspace

# IDE - VSCode
.vscode/*
!.vscode/settings.json
!.vscode/tasks.json
!.vscode/launch.json
!.vscode/extensions.json

.env
.env.production
```

### Создаем в корне проекта `vite.config.ts`

<sub> устанавливаем заисимости: </sub>

### При помощи `npm`:

```
 npm install --save-dev vite @vitejs/plugin-react
```

### При помощи `yarn`:

```
 yarn add -D vite @vitejs/plugin-react
```

<sub> вставляем следующий код: </sub>

```
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});

```

```
 touch .gitignore
```

### Структура проекта

```
├── index.html/                      # HTML, определяющий шаблон приложения
├── src/                             # Исходники
│   ├── app/                         # Папка с используемыми элементами
│   │   ├── ...                      # UI-kit для приложения
│   │   └── index.tsx                # Файл экспорта всех компонентов UI-kit
├── .gitignore                       # Список исключённых файлов из Git
├── package.json                     # Список модулей и прочей информации
├── tsconfig.json                    # Список настроек для TypeScript
├── vite.config.ts                   # Конфигурация Vite
├── tsconfig.node.json               # Список настроек для TypeScript для Vite
├── README.md                        # Документация приложения
└── tsconfig.json                    # Параметры компилятора TypeScript
```

### Добоавляем скрипты для старта

```
    "dev": "vite --port 3000",
    "build": "tsc && vite build",
    "preview": "vite preview"
```
