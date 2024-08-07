# Vite template (React)

TODO:

- [x] typescript
- [x] prettier
- [x] eslint
  - [x] prettier + eslint
- [x] tanstack router
  - [ ] routing examples
- [x] tanstack query (aka react query)
  - [x] axios for http layer
  - [x] query example
  - [x] query error handling example
  - [ ] query example usage in react
  - [x] mutation example
  - [ ] mutation error handling example
  - [ ] mutation example usage in react
- [x] husky + lint-staged
- [x] yarn v4
- [x] import path alias
- [x] vscode setting
- [ ] i18n
  - [x] i18next implementation
  - [x] typescript integration
  - [x] router integration
  - [ ] handle `dir` and `lang` attribute of document
- [ ] ssr (if possible)
- [ ] design system / aka ui kit
- [ ] storybook
- [ ] head tags handling
- [x] authentication
- [ ] fonts
- [ ] env var handling

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
