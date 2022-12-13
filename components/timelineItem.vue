<template>
    <v-timeline-item
    :color="`${color}-bg`"
    fill-dot
    :left="left"
    :icon="$device.Mobile ? item.icon : null"
    >
    <div class="hover-polygon">
        <div class="inner"></div>

    </div>
    <v-card class="time-line-card">
        <v-card-title :class="[{'justify-end': left}, `${color}-bg`, 'title'] ">
            <v-container class="title-container">
                <v-row>
                    <v-icon
                        size="42"
                        class="title-icon mr-4"
                        v-if="!left && !$device.Mobile"
                    >
                        {{icon}}
                    </v-icon>
                    <span>
                        <h2 class="text-h4 font-weight-light">
                            {{title}}
                        </h2>
                        <span class="date">
                            {{date}}
                        </span>
                    </span>
                    <v-icon
                        size="42"
                        class="ml-4"
                        v-if="left && !$device.Mobile"
                    >
                        {{icon}}
                    </v-icon>
                </v-row>
            </v-container>
        </v-card-title>
        <v-container>
        <v-row>
            <slot></slot>
        </v-row>
        </v-container>
    </v-card>
    </v-timeline-item>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
        },
        color: {
            type: String,
            required: true,
        },
        left: {
            type: Boolean,         
        },
        icon: {
            type: String,
            required: true,
        },
        date: {
            type: String,
        }
    },

}
</script>

<style scoped lang="scss">
$border: 2px;
$corner: 50px;

.title-container {
    padding: 8px 8px 8px 8px;
}
.time-line-card {
    clip-path: polygon(100% 0%, 100% calc(100% - #{$corner}), calc(100% - #{$corner}) 100%, 0% 100%, 0% 0%);
    .title{
        color: black;
        i {
            color: black;
        }
    }
    &:hover {
        margin-top: -5px;
        margin-bottom: 5px;
        margin-right: 5px;
        margin-lefT: -5px;
    }
    transition: margin 200ms ease-out;
}
.hover-polygon {
    clip-path: polygon(100% 0%, 100% calc(100% - #{$corner}), calc(100% - #{$corner}) 100%, 0% 100%, 0% 0%);
    background-image: linear-gradient(to bottom right, $cyberblue, $cyberblue, $cyberyellow);
    animation: rotateColor 5s linear infinite;
    width: 100%;
    height: 100%;
    position: absolute;
    margin-left: 7px;
    margin-top: 7px;
    border-radius: 4px;

    .inner {
        border-radius: 4px;
        width: calc(100% - #{$border});
        height: calc(100% - #{$border});
        background: $background-page;
        clip-path: polygon(100% $border, 100% calc(100% - #{$corner}), calc(100% - #{$corner}) 100%, $border 100%, $border $border);
    }
}
</style>