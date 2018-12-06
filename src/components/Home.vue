<template>
    <div id="home">
        <p>You are in the secured home {{user.displayName}}</p>
    </div>
</template>

<script>
    export default {
        name: 'home',
        created () {
            this.$store.dispatch('setUser');
            this.$store.dispatch('setDb');
        },
        computed: {
            user () {
                return this.$store.state.user
            }
        }
    }
</script>
