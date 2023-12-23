<template>
    <select v-model="selectedOption" @change="logSelectedOption">
        <div v-for="(opt, index) in options" :key="index">
            <option :value="opt">{{ opt }}</option>
        </div>
        <option value="single">Single</option>
        <option value="widow">Widow</option>
        <option value="all">Alle</option>
    </select>
</template>
  
<script>
export default {
    name: 'FilterItem',
    props: {
        customers: Array,
        options: Array,
    },
    data() {
        return {
            selectedOption: '',
        };
    },
    methods: {
        logSelectedOption() {
            console.log(this.selectedOption);
            this.$emit('filter-customers', this.selectedOption)
        }
    },

};
</script>
  