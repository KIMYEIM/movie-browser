<template>
  <div class="home__container">
      <div class="home__top">
        <h1>MOVIE BROWSER.</h1>
      </div>
      <div class="home__menu">
        <div class="menu__item">
          SEARCH FOR MOVIES BY NAME
        </div>
        <div class="menu__item">
          LATEST
        </div>
        <div class="menu__item">
          NOW PLAYING
        </div>
        <div class="menu__item">
          TOP POPULAR
        </div>
      </div>
    <Footer
      class="footer" 
      location="home"/>
  </div>
  <div id="sticker--1"></div>
  <div id="sticker--2"></div>
  <div id="sticker--3"></div>
</template>

<script>
import Footer from '~/components/Footer'
export default {
  components: {
    Footer,
  },
}
</script>

<style lang="scss" scoped>
.home__container {
  height: 100%;
  display: flex;
  flex-direction: column;
  font-size: 64px;
  .home__top {
    flex-grow: 1;
    padding: 40px;
  }
  .menu__item {
    height: 102px;
    border-top: 1px solid black;
    display: flex;
    align-items: center;
    padding-left: 345px;

    @media (max-width: 1000px) {
      padding-left: 35.7vw;
    }
  }
}
#sticker--1 {
  position: absolute;
  width: 121px;
  height: 131px;
  right: 330.82px;
  bottom: 445px;
  background: url('/src/images/image2.png');
  //clip-path: circle(42.9% at 49% 49%);
}
#sticker--2 {
  position: absolute;
  width: 185.92px;
  height: 210.89px;
  bottom: 280px;
  right: 80px;
  background: url('/src/images/image1.png') center;
}
#sticker--3 {
  position: absolute;
  width: 141.06px;
  height: 157.13px;
  left: 69.77px;
  bottom: 125px;
  background: url('/src/images/image3.png') center;
}

</style>