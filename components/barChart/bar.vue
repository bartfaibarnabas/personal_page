<template>
    <v-row class="bar">
        <v-col cols="2" class="name-col">
            {{name}}
        </v-col>
        <v-col class="bar-col" :style="`max-width: ${calculatedWidth}%`">
            <div class="inner"><div class="hover"/></div>
            length
        </v-col>
    </v-row>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            default: '',
        },
        size: {
            type: Number,
            required: true,
        },
        maxSize: {
            type: Number,
            default: 100,
        },
    },
    created() {
    },
    computed: {
        calculatedWidth() {
            return this.size / this.maxSize * 100;
        }
    },

}
</script>

<style scoped lang="scss">
$border: 2px;
$corner: 15px;
$maxLength: 100%;
.col {
    background: $cyberblue;
    font-size: 0.8rem;
    height: 1.5rem;
    padding: 0px;
}
.name-col {
    background-color: #{$cyberblue + 'CC'};
    //background-image: linear-gradient(to right, $cyberpurple, $cyberpurple, $cyberblue, );
}
.bar-col {
    clip-path: polygon($maxLength 0%, $maxLength calc(100% - #{$corner}), calc(#{$maxLength} - #{$corner}) 100%, 0% 100%, 0% 0%);
    .inner {
        border-radius: 4px;
        width: calc(100% - #{$border});
        height: calc(100% - #{$border});
        background: $background-page;
        clip-path: polygon(100% $border, 100% calc(100% - #{$corner}), calc(100% - #{$corner}) 100%, $border 100%, $border $border);
        .hover {
        border-radius: 4px;
        width: 0%;
        height: 100%;
        background: $cyberblue;
    }
    }
}

.bar:hover .bar-col .inner .hover {
    animation: lefttorightAppear 400ms alternate ease-out;
    width: 105%
}

@keyframes lefttorightAppear {
    0%{
        width: 0%;
    }
    100%{
        width: 105%;
    }
}
</style>