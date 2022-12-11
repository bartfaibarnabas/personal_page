<template>
<div>
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
          icon: 'mdi-account-box',
          clickEvent: this.navigate,
          text: 'About me',
          path: 'home',
        },
        {
          icon: 'mdi-laptop',
          clickEvent: this.navigate,
          text: 'Experience',
          path: 'experience',
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
    li {
      position: relative;
      list-style: none;
      width: 70px;
      height: 70px;
      z-index: 1;
      align-items: center;
      button {
        padding: unset !important;
        min-width: unset !important;
        height: unset !important;
        background: unset !important;
        width: 70px;
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
    color: #121212
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
  width: 70px;
  height: 70px;
  background: #29fd53;
  border-radius: 50%;
  border: 6px solid #121212;
  transition: 0.5s;
}
.indicator::before {
  content: '';
  position: absolute;
  bottom: 50%;
  left: -22px;
  width: 20px;
  height: 20px;
  border-bottom-right-radius: 20px;
  box-shadow:1px 10px 0 0 #121212
}
.indicator::after {
  content: '';
  position: absolute;
  bottom: 50%;
  right: -22px;
  width: 20px;
  height: 20px;
  border-bottom-left-radius: 20px;
  box-shadow:-1px 10px 0 0 #121212
}
.navigation ul li:nth-child(1).active ~ .indicator {
  transform: translateX(calc(70px * 0))
}
.navigation ul li:nth-child(2).active ~ .indicator {
  transform: translateX(calc(70px * 1))
}
.navigation ul li:nth-child(3).active ~ .indicator {
  transform: translateX(calc(70px * 2))
}
.navigation ul li:nth-child(4).active ~ .indicator {
  transform: translateX(calc(70px * 3))
}
.navigation ul li:nth-child(5).active ~ .indicator {
  animation: changeColor 10s linear infinite;
  transform: translateX(calc(70px * 4))
}
.navigation ul li:nth-child(6).active ~ .indicator {
  transform: translateX(calc(70px * 5))
}
@keyframes changeColor {
  0% {background-color: #5729fd;}
  50% {background-color: red;}
  100% {background-color: #29fd53;}
}
</style> 