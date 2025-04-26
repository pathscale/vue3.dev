import { ref, watch } from "vue";
import type { Ref } from "vue";

export type ThemeValue = "light" | "dark";

const theme: Ref<ThemeValue> = ref(
  (localStorage.getItem("theme") as ThemeValue) || "light",
);

watch(theme, (newTheme) => {
  localStorage.setItem("theme", newTheme);
  document.documentElement.setAttribute("data-theme", newTheme);
});

function setTheme(newTheme: ThemeValue) {
  theme.value = newTheme;
}

export function useTheme() {
  return {
    theme,
    setTheme,
  };
}
