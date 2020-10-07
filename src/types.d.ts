type json = typeof import("@/locales/en.json");
declare module "@vue-composable/core" {
  interface i18n extends json {}
}
