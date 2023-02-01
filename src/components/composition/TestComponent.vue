
<template>
    <h2>Hello Reusability</h2>
    <hr>
    <ProductStatus />
    <hr>
    <FeeStatus />
    <hr>
    <SavingStatus />

</template>

<script>
import {} from "vue";
import FeeStatus from "../mixin/FeeStatus.vue";
import ProductStatus from "../mixin/ProductStatus.vue";
import SavingStatus from "../mixin/SavingStatus.vue";
export default {
    name: "TestComponent",
    components: { ProductStatus, FeeStatus, SavingStatus },
};
</script>

<style></style>