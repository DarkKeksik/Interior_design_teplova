const themes = {
  main: {
    color_text: "#FFFFF0",
    some_accent: "#CBA35C",
    color_text_extra: "#A5A59B",
    color_text_extra_2: "#1B1B1B",
    background_black: "#2A2A2A",
    background_black_extra: "#1B1B1B",
    background_white: "#FFFFF0",
    size_headlines: "3.75rem",
    size_text: "0.875rem",
    font_family_text: "Montserrat",
    font_family_headlines: "Montserrat",
    animation_duration: ".3s",

    background_button: "#FFFFF0",
    color_button: "#1B1B1B",
    hover_background_button: "#2a2a2a",
    hover_text_button: "#FFFFF0",

    background_table: "#2A2A2A",
  },
  modal: {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      background: "none",
      border: "none",
      padding: "20px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      zIndex: 9999,
    },
  },
}

export default themes
