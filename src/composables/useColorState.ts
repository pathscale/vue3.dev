import { reactive } from "vue";

const accent = reactive({
  light: "#3D63DD",
  dark: "#3D63DD",
});

const gray = reactive({
  light: "#8B8D98",
  dark: "#8B8D98",
});

const background = reactive({
  light: "#FFFFFF",
  dark: "#111111",
});

export function useColorState() {
  return {
    accent,
    gray,
    background,
  };
}
