<template>
  <section>
    <h1>404 Page Not Found!</h1>
    <button @click="goHome">Go to Home</button>
  </section>
</template>

<script>
export default {
  methods: {
    goHome() {
      this.$router.replace("/");
    },
  },
};
</script>

<style lang="scss" scoped>
section {
  padding: 100px 0 200px;
  text-align: center;
  h1 {
    font-size: 60px;
    font-weight: 700;
  }
}
</style>
