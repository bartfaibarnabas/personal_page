<template>
  <div class="navigation">
    <ul>
      <li class="list" v-for="menu in menuList" :key="menu.id" :class="{'active': selected === menu.id}">
        <v-btn :ripple="false" depressed @click="menu.clickEvent(menu.id, menu.path)">
          <v-icon class="icon">{{menu.icon}}</v-icon>
          <span class="text">{{menu.text}}</span>
        </v-btn>
      </li>
      <div class="indicator"></div>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
  components: {
  },
  data () {
    return {
      selected: 0,
    }
  },
  created() {
    this.selectByRoute();
  },
  methods: {
    selectByRoute() {
      const routeMenu = this.menuList.find((menuItem) => ( menuItem.path === this.$route.name.toLowerCase() ));
      if (routeMenu) {
        this.select(routeMenu.id);
      }
    },
    navigate(id, path) {
      this.select(id);
      this.$router.push({
        path: `/${path}`,
      })
    },
    select(id) {
      this.selected = id;
    },
    liClicked(item) {
      console.log(item.text);
    }
  },
  computed: {
    menuList() {
      const menu = [
        {
          icon: 'mdi-monitor-star',
          clickEvent: this.navigate,
          text: 'Experience',
          path: 'experience',
        },
        {
          icon: 'mdi-account-box',
          clickEvent: this.navigate,
          text: 'About me',
          path: 'home',
        },
        {
          icon: 'mdi-information',
          clickEvent: this.navigate,
          text: 'Contact',
          path: 'contact',
        },
      ];
      return menu.map((item, index) => ({ ...item, id: index }));
      },
    route() {
      return this.$route.name;
    },
  },
  watch: {
    route() {
      this.selectByRoute();
    },
    menuList() {
      this.selectByRoute();
    }
  },
}
</script>
<style scoped lang="scss">
$size-between-menu: 5rem;
$size-between-menu-xl: 10rem;
.navigation .v-btn:before {
  background: unset !important;
}
.navigation {
  height: 70px;
  background: $background-color;
  position: relative;
  display:flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  ul {
    display: flex;
    padding: unset;
    li {
      position: relative;
      list-style: none;
      width: $size-between-menu;
      height: 70px;
      z-index: 1;
      align-items: center;
      button {
        padding: unset !important;
        min-width: unset !important;
        height: unset !important;
        background: unset !important;
        width: $size-between-menu;
      }
    }
  }
}
.navigation ul li button .v-btn__content {
          position:relative;
          display:flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          width: 100%;
          font-weight: 500;
          .icon {
            position: relative;
            display: block;
            line-height: 65px;
            font-size: 2.5em;
            text-align: center;
            transition: 0.5s;
            color: #fff;
          }
          .text {
            position:absolute;
            color: #fff;
            font-weight: 400;
            font-size: 0.75em;
            letter-spacing: 0.05em;
            transition: 0.5s;
            opacity: 0;
            transform: translateY(-20px);
          }
}
.navigation ul li:hover  .v-btn__content{
  .icon {
    transform: translateY(15px);
  }
  .text {
    opacity: 1;
    transform: translateY(-10px);
  }
}
.navigation ul li.active  .v-btn__content{
  .icon {
    transform: translateY(35px);
    color: $background-page
  }
  .text {
    opacity: 1;
    transform: translateY(-10px);
  }
}
.navigation ul li ~ .indicator {
  opacity: 0;
}
.navigation ul li.active ~ .indicator {
  opacity: 1;
}
.indicator {
  bottom: -50%;
  position: absolute;
  margin-left:calc(#{$size-between-menu} / 2  - 70px / 2);
  width: 70px;
  height: 70px;
  background: $cyberblue;//#29fd53;
  border-radius: 50%;
  border: 6px solid $background-page;
  transition: 0.5s;
  &:hover {
    box-shadow: inset 0px 0px 15px -2px $cyberpurple;
  }
}
.indicator::before {
  content: '';
  position: absolute;
  bottom: 50%;
  left: -22px;
  width: 20px;
  height: 20px;
  border-bottom-right-radius: 20px;
  box-shadow:1px 10px 0 0 $background-page
}
.indicator::after {
  content: '';
  position: absolute;
  bottom: 50%;
  right: -22px;
  width: 20px;
  height: 20px;
  border-bottom-left-radius: 20px;
  box-shadow:-1px 10px 0 0 $background-page
}

.navigation ul li:nth-child(1).active ~ .indicator {
    transform: translateX(calc(#{$size-between-menu} * 0))
  }
  .navigation ul li:nth-child(2).active ~ .indicator {
    transform: translateX(calc(#{$size-between-menu} * 1))
  }
  .navigation ul li:nth-child(3).active ~ .indicator {
    transform: translateX(calc(#{$size-between-menu} * 2))
  }
  .navigation ul li:nth-child(4).active ~ .indicator {
    transform: translateX(calc(#{$size-between-menu} * 3))
  }
  .navigation ul li:nth-child(5).active ~ .indicator {
    animation: changeColor 10s linear infinite;
    transform: translateX(calc(#{$size-between-menu} * 4))
  }
  .navigation ul li:nth-child(6).active ~ .indicator {
    transform: translateX(calc(#{$size-between-menu} * 5))
  }
@media (min-width: 960px) {
  .navigation ul li {
    width: $size-between-menu-xl;
    & button {
      width: $size-between-menu-xl;
    }
  }
  .indicator {
    margin-left:calc(#{$size-between-menu-xl} / 2  - 70px / 2);
  }
  .navigation ul li:nth-child(1).active ~ .indicator {
    transform: translateX(calc(#{$size-between-menu-xl} * 0))
  }
  .navigation ul li:nth-child(2).active ~ .indicator {
    transform: translateX(calc(#{$size-between-menu-xl} * 1))
  }
  .navigation ul li:nth-child(3).active ~ .indicator {
    transform: translateX(calc(#{$size-between-menu-xl} * 2))
  }
  .navigation ul li:nth-child(4).active ~ .indicator {
    transform: translateX(calc(#{$size-between-menu-xl} * 3))
  }
  .navigation ul li:nth-child(5).active ~ .indicator {
    transform: translateX(calc(#{$size-between-menu-xl} * 4))
  }
  .navigation ul li:nth-child(6).active ~ .indicator {
    transform: translateX(calc(#{$size-between-menu-xl} * 5))
  }

}


@keyframes changeColor {
  0% {background-color: $cyberpurple;}
  50% {background-color: $cyberyellow;}
  100% {background-color: $cyberpurple;}
}
</style> 