<template>
    <h1 :class="{'bouncing': bounce}" @mouseover="bouncing">
        <span class="shadow-helper left" :class="{'inactive': !hover}">{{char}}</span>
        <span class="shadow-helper right" :class="{'inactive': !hover}">{{char}}</span>
        <span :id="'title-char'" class="title-char"
          @mouseover="hover = true"
          @mouseleave="hover = false"
        >{{char}}</span>
    </h1>
</template>

<script>
export default {
    props: {
        char: {
            type: String,
            default: '',
        },
    },
    data() {
      return  {
        hover: false,
        bounce: false,
      };
    },
    created() {
    },
    methods: {
      bouncing() {
        this.bounce = true;
        setTimeout(() => {
          this.bounce = false;
        }, 1000); // nexttick does not work here

      }
    },
}
</script>

<style lang="scss" scoped>
$font-size: 2.5rem;
$font-size-xl: 5rem;

.title-char {
  font-size: $font-size;
  color: $primary-color;
  position: relative;
  cursor: default;  
  min-width: 0.7rem;
  transition: color 400ms ease-out;
  &:hover {
    color:black;
  }
}
.shadow-helper {
  font-size: $font-size;
  position: absolute;
  z-index: 0;
  transition: margin 800ms ease-out;
  &.right {
    margin-left: -0.3rem;
    margin-top: -0.3rem;
    color:  $cyberblue;
  }
  &.left {
    margin-left: 0.3rem;
    margin-top: 0.3rem;
    color:  $cyberyellow;
  }
  &.inactive {
    margin-left: 0px;
    margin-top: 0px;
  }
}

@keyframes rubberband {
    0%{
        transform: scaleX(1);
    }
    40%{
        transform: scaleX(1.12) scaleY(0.75);
    }
    55%{
        transform: scaleX(0.85) scaleY(1);
    }
    65%{
        transform: scaleX(1.09) scaleY(0.85);
    }
    75%{
        transform: scaleX(0.9)  scaleY(1);
    }
    90%{
        transform: scaleX(1.05) scaleY(0.95);
    }
    100%{
        transform: scaleX(1) scaleY(1);
    }
}

.bouncing {
  animation : rubberband 800ms alternate ease-out;
}
@media (min-width: 960px) {
 .title-char {
  font-size: $font-size-xl;
 }
 .shadow-helper {
  font-size: $font-size-xl;
 }
}

</style>