export default {
  // type check ts files
  '*.{ts,tsx}': () => 'tsc --noEmit',

  // format
  '*': (filenames) =>
    `prettier --ignore-unknown --write ${filenames.join(' ')}`,

  // Lint js/ts files
  '*.{js,jsx,ts,tsx}': (filenames) =>
    `eslint --report-unused-disable-directives --max-warnings 0 --fix ${filenames.join(' ')}`,
}
