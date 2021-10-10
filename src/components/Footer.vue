<template>
  <footer>
    <h1>{{ location }}</h1>
  </footer>
</template>

<script>
export default {
  props: {
    location: "",
  },
};
</script>

<style scoped lang="scss">
footer {
  height: 87px;
  border-top: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Source Serif Pro", serif;
  font-size: 24px;
  flex-shrink: 0;
}
</style>
