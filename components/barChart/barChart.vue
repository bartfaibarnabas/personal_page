<template>
    <v-container>
        <v-row>
            <bar name="JavaScript" :size="95"></bar>
        </v-row>
        <v-row>
            <bar  name="HTML" :size="80"></bar>
        </v-row>
        <v-row >
            <bar name="CSS" :size="75"></bar>
        </v-row>
        <v-row>
            <bar name="MySQL" :size="70"></bar>
        </v-row>
    </v-container>
</template>


<script>
import bar from './bar.vue';
export default {
    props: {
    },
    components: {
        bar,
    },

}
</script>

<style scoped lang="scss">
.row {
    margin: 0px 0px 6px 0px;
}
</style>