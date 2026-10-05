import { nextJsConfig } from "@repo/eslint-config/next-js";

/** @type {import("eslint").Linter.Config[]} */
export default [
  ...nextJsConfig,
  {
    rules: {
      // TypeScript already checks prop shapes; runtime propTypes are redundant
      // and the rule can't see types like `React.InputHTMLAttributes<…>`.
      "react/prop-types": "off",
      // A leading underscore marks a binding that is deliberately unused —
      // e.g. props kept only to preserve a component's public shape.
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
    },
  },
  {
    // The /superrad sales page is a pixel-faithful Figma clone that relies on
    // raw positioned, sprite-cropped, and masked images; next/image's sizing
    // model doesn't fit those cases, so plain <img> is intentional here.
    files: ["app/superrad/**/*.{ts,tsx}"],
    rules: {
      "@next/next/no-img-element": "off",
    },
  },
];
