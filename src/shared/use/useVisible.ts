import {ref} from "vue";

export const useVisible = () => {
  const isVisible = ref(false)

  function setIsVisible(value: boolean): void {
    isVisible.value = value
  }

  return {
    isVisible,
    setIsVisible
  }
}
