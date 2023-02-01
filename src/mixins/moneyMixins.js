export default {
    mounted() {
        console.log("component using mixin mounted");
    },
    methods: {
        addMoney(price) {
            this.totalMoney += price;
        },
    },
};