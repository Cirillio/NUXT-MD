export default defineAppConfig({
  ui: {
    colors: {
      neutral: "stone",
      primary: "amber",
    },
    header: {
      slots: {
        root: "backdrop-blur-xs bg-default/10z",
      },
    },
    button: {
      slots: {
        base: "cursor-pointer",
      },
    },
    input: {
      slots: {
        base: "transition-all duration-300",
      },
    },
  },
});
