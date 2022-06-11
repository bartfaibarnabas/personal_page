<template>
<div>
  <!--<v-btn v-if="!user" depressed @click="openLoginDialog">
      <v-icon>mdi-account</v-icon>
      <span>Login</span>
    </v-btn>
    <v-btn v-else depressed @click="logout">
      <v-icon>mdi-account</v-icon>
      <span>Logout</span>
  </v-btn>-->
  <div class="navigation">
    <ul>
      <li class="list active">
        <v-btn :ripple="false" depressed @click="navigateToHome">
          <v-icon class="icon">mdi-home</v-icon>
          <span class="text">Home</span>
        </v-btn>
      </li>
      <li class="list">
        <v-btn :ripple="false" v-if="!user" depressed @click="openLoginDialog">
          <v-icon class="icon">mdi-account</v-icon>
          <span class="text">Login</span>
        </v-btn>
        <v-btn :ripple="false" v-else depressed @click="logout">
          <v-icon class="icon">mdi-logout</v-icon>
          <span class="text">Logout</span>
        </v-btn>
      </li>
      <li class="list">
        <v-btn :ripple="false" depressed>
          <v-icon class="icon">mdi-information</v-icon>
          <span class="text">Info</span>
        </v-btn>
      </li>
      <li class="list">
        <v-btn :ripple="false" depressed >
          <v-icon class="icon">mdi-dots-horizontal-circle</v-icon>
          <span class="text">More</span>
        </v-btn>
      </li>
      <li class="list">
        <v-btn :ripple="false" depressed @click="navigateToTest">
          <v-icon class="icon">mdi-fencing</v-icon>
          <span class="text">Fight</span>
        </v-btn>
      </li>
      <div class="indicator"></div>
    </ul>

  </div>
  <login v-model="loginDailog" :close="closeDialog"/>
</div>
</template>

<script>
console.log(process.client);
if (process.client) {
    const list = document.querySelectorAll('.list');
    function activeLink() {
      list.forEach((item) => {
        item.classList.remove('active');
        this.classList.add('active');
      })
    }
    list.forEach(item => {
      console.log(item);
      item.addEventListener('click', activeLink);
    });
}


import login from '../components/login.vue'
export default {
  name: 'DefaultLayout',
  components: {
    login,
  },
  data () {
    return {
      loginDailog: false,
    }
  },
  methods: {
    openLoginDialog() {
      console.log('login');
      this.loginDailog = true;
    },
    closeDialog() {
      this.loginDailog = false;
    },
    logout() {
       this.$store.commit('setUser', null);
    },
    navigateToTest() {
      this.$router.push({
        path: '/test',
      })
    },
    navigateToHome() {
      this.$router.push({
        path: '/',
      })
    }
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
}
</script>
<style scoped lang="scss">
.navigation ::v-deep.v-btn:before {
  background: unset !important;
}
.navigation {
  width: 400px;
  height: 70px;
  background: $background-color;
  position: relative;
  display:flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  ul {
    display: flex;
    width: 350px;
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
.navigation ul li button ::v-deep.v-btn__content {
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
.navigation ul li:hover ::v-deep.v-btn__content{
  .icon {
    transform: translateY(15px);
  }
  .text {
    opacity: 1;
    transform: translateY(-10px);
  }
}
.navigation ul li.active ::v-deep.v-btn__content{
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
@keyframes changeColor {
  0% {background-color: #29fd53;}
  50% {background-color: red;}
  100% {background-color: #29fd53;}
}
</style> 