# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

# Indian Agriculture Data Analysis

This project displays analytics over the Indian Agriculture dataset 

## Features

- Table showing the crop with maximum and minimum production per year.
- Table displaying average yield and cultivation area for each crop over the years 1950-2020.


## Prerequisites

Ensure you have **Node.js** and **Yarn** installed.

## Installation

1. Clone the repository:
   git clone https://github.com/Deepanshu-Chopra/agriculture-analysis.git
   cd IndianAgriDataAnalysis
2. Install dependencies:
    yarn install
3. To run the project locally:
    yarn dev


Here are the screenshots:
1.crop average yield production : https://github.com/Deepanshu-Chopra/agriculture-analysis/blob/main/src/assets/CropAvYieldAndCultivation.png
2.Crop production analysis : https://github.com/Deepanshu-Chopra/agriculture-analysis/blob/main/src/assets/CropProductionAnalysis.png



