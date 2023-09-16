const theme = {
  $black: "#191919",
  $darkGray: "#73737d",
  $white: "#fff",
  $mainColor: "#191919",
  $border: "#aaa",
  fixed: ($zIndex = 1) => ({
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
    "z-index": $zIndex,
  }),
}

export default theme
