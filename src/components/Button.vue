<template>
    <button @click="onClick()" :style="{background: color}" class="btn">{{ text }}</button>
</template>

<script>
export default {
    name: 'ButtonItem',
    props: {
        text: String,
        color: String
    },
    methods: {
        onClick() {
            this.$emit('btn-click')
        }
    },
}
</script>
<style scoped>

.btn {
  color: #fff;
  cursor: pointer;
  font-size:16px;
  line-height: 45px;
  margin: 0 0 2em;
  text-decoration: none;
  text-transform: uppercase;
  padding: 2px 7px;
  
}

.btn {
    margin-top: 50px;
  cursor: pointer;
  border: 0 solid;
  outline: 1px solid;
  outline-color: rgba(255, 255, 255, .5);
  outline-offset: 0px;
} 

.btn:hover {
  transform: scale(1.04);
}
</style>

