export default {
  extends: ["stylelint-config-standard"],
  rules: {
    "declaration-block-no-duplicate-properties": true,
    "color-hex-case": "lower",
    "max-nesting-depth": 3,
    "property-no-unknown": true,
    "selector-class-pattern": "^[a-z0-9-]+$",
  },
};