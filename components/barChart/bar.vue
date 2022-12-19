<template>
    <v-row class="bar">
        <v-col cols="2" class="name-col">
            {{name}}
        </v-col>
        <v-col class="bar-col" :style="`max-width: ${width}%`">
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
        noCreateAnimation: {
            type: Boolean,
            default: true,
        },
    },
    data: {
        width: 0,
    },
    created() {

        this.width = this.noCreateAnimation;
        if (this.noCreateAnimation) {
            this.width = this.size / this.maxSize * 100;
        } else {
            setTimeout(() => {
                this.width = this.size / this.maxSize * 100;
            }, 1000);
        }
    },
    computed: {
    },
    methods: {
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
    text-align: center;
    line-height: 1.5rem;
    //background-image: linear-gradient(to right, $cyberpurple, $cyberpurple, $cyberblue, );
}
.bar-col {
    clip-path: polygon($maxLength 0%, $maxLength calc(100% - #{$corner}), calc(#{$maxLength} - #{$corner}) 100%, 0% 100%, 0% 0%);
    .inner {

        width: calc(100% - #{$border});
        height: calc(100% - #{$border});
        background: $background-page;
        clip-path: polygon(100% $border, 100% calc(100% - #{$corner}), calc(100% - #{$corner}) 100%, 0px 100%, 0px $border);
        .hover {
        width: 0%;
        height: 100%;
        background: $cyberblue;
    }
    }
}
.bar:hover .bar-col .inner .hover {
    animation: lefttorightAppear 400ms alternate ease-out;
    width: 100%
}


@keyframes lefttorightAppear {
    0%{
        width: 0%;
    }
    100%{
        width: 100%;
    }
}
</style>