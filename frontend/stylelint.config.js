export default {
  extends: ["stylelint-config-standard"],
  ignoreFiles: ["dist/**"],
  rules: {
    "declaration-block-no-duplicate-properties": true,
    "max-nesting-depth": 3,
    "property-no-unknown": true,
    "selector-class-pattern": "^[a-z0-9-]+$",
    "no-empty-source": null,
  },
};