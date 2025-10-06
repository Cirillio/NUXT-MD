export const useSearch = () => {
  const model = ref("");

  const clear = () => {
    model.value = "";
    console.log(model.value);
  };

  return { model, clear };
};
