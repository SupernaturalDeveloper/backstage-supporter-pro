<template>
    <div></div>
</template>

<script>
    export default {
        name: "LoginView",

        data() {
            return {};
        },

        async mounted() {
            const params = {
                params: {
                    loginData: {
                        name: "",
                        password: "",
                    },
                },
            };
            let res = await this.$R.postLogin(params);
            console.log(res);
        },

        methods: {},
    };
</script>

<style lang="scss" scoped>
</style>