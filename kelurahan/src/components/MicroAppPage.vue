<template>
  <div class="app-page">
    <div class="list-page">
      <div class="list-warteg-pkl">
        <warteg-pkl></warteg-pkl>
      </div>
    </div>
  </div>
</template>
<script>
  import WartegPKLComponent from './WartegPKLComponent';
  export default {
    data(){
      return{

      }
    },
    components: {
        'warteg-pkl': WartegPKLComponent,
    },
    methods: {
      gotoPage(route) {
        this.$router.push(route);
      },
    }
  }
</script>
<style>
  .list-warteg-pkl{
    margin-top: 16px;
  }

</style>
