import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      'react/no-unescaped-entities': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-explicit-any': 'off', // Disable the rule for explicit any types
      'react-hooks/exhaustive-deps': 'warn', // Change from 'error' to 'warn' for useEffect dependencies
      '@next/next/no-img-element': 'off', // Disable the warning for <img> elements
      'jsx-a11y/alt-text': 'warn', // Change from 'error' to 'warn' for alt text requirements
    },
  },
];

export default eslintConfig;
