// @ts-check
import antfu from "@antfu/eslint-config";
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(
  // Your custom configs here
  antfu({
    // ...@antfu/eslint-config options, see e.g. https://github.com/antfu/eslint-config?tab=readme-ov-file#rules-overrides
  }).override(
    "antfu/vue/rules",
    {
      rules: {
        "vue/block-order": ["error", {
          order: [
            "template",
            "script",
            "style",
          ],
        }],
      },
    },
  ).override(
    "antfu/stylistic/rules",
    {
      rules: {
        "style/quotes": ["error", "double", {
          allowTemplateLiterals: true,
          avoidEscape: true,
        }],
        "style/semi": ["error", "always"],
      },
    },
  ),
);