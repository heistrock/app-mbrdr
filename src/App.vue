<template>
  <div id="app">
    <vHeader />
    <main>
      <template v-for="item in $root.canvas.items">
        <vCanvas
          v-bind:data="item.data"
          v-bind:id="item.id"
          v-bind:name="item.name"
          v-bind:key="item.id"
        />
      </template>
    </main>
    <vFooter />
  </div>
</template>

<script>
import vHeader from './components/Header.vue';
import vLoading from './components/Loading.vue';

export default {
  name: 'App',
  components: {
    vHeader,
    vCanvas: () => ({
      component: import('./components/Canvas.vue'),
      delay: 200,
      timeout: 10000,
      loading: vLoading,
      error: vLoading,
    }),
    vFooter: () => ({
      component: import('./components/Footer.vue'),
      delay: 600,
      timeout: 10000,
      loading: vLoading,
      error: vLoading,
    }),
  },
};
</script>

<style lang="scss">
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

body {
  font-size: 16px;
}

#app {
  color: #666666;
  font-family: "Courier New", Courier, monospace;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

button,
input {
  color: #666666;
  font-size: 1.4rem;
  font-family: "Courier New", Courier, monospace;
  background-color: #ffffff;
  border: 1px solid #666666;
}

input {
  max-width: 12rem;
  height: 1.6rem;
}

button:focus,
button:active,
input:focus,
input:active {
  background-color: #dddddd;
  outline: 1px solid #666666;
}

button:hover,
input:hover {
  outline: 1px solid #666666;
}

@media (min-width: 900px) {
  input,
  button {
    font-size: .9rem;
  }

  input {
    height: 1rem;
  }
}
</style>
<style scoped>
main {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 59.2rem;
  margin: 0 auto;
  padding: 6em 0 4em 0;
  text-align: left;
}
</style>
