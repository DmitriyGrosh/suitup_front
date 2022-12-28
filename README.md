# Туториал по старту проекта с использованием React + TS + eslint + prettier

## Инициализация проекта
### При помощи `npm`:
 ```
npm init
 ```
### При помощи `yarn`:
 ```
 yarn init
 ```

## Инициализация TypeScript
 ```
 tsc --init
 ```

## Инициализация eslint
 ```
npx eslint --init
 ```

Ищем файл `.eslintrc.js` и вставляем следующий код:

```
module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: 'tsconfig.json',
        tsconfigRootDir : __dirname,
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint/eslint-plugin'],
    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
    ],
    root: true,
    env: {
        node: true,
        jest: true,
    },
    ignorePatterns: ['.eslintrc.js'],
    rules: {
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
    },
};
```

Далее переустанавливаем зависимости

### При помощи `npm`:
```
 npm install --save-dev typescript tsconfig-paths ts-node ts-loader eslint-plugin-react eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin @types/node
```

### При помощи `yarn`:
```
 yarn add -D typescript tsconfig-paths ts-node ts-loader eslint-plugin-react eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin @types/node
```

## Добавляем prettier
 ```
touch .prettierrc
 ```
Ищем файл `.prettierrc` и вставляем следующий код:

```
{
  "singleQuote": true,
  "trailingComma": "all"
}
```

Устанавливаем зависимости

### При помощи `npm`:
```
npm install --save-dev prettier eslint-plugin-prettier eslint-config-prettier
```

### При помощи `yarn`:
```
yarn add -D prettier eslint-plugin-prettier eslint-config-prettier
```

## Инициализация React

Устанавливаем зависимости

### При помощи `npm`:

```
    npm install react react-dom
    
    npm install --save-dev @types/react @types/react-dom 
```

### При помощи `yarn`:

```
    yarn add react react-dom
    
    yarn add -D @types/react @types/react-dom 
```

