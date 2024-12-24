<template>
    <header class="max-w-custom max-h-[50px] my-[50px] mx-auto">
        <nav>
            <div class="flex justify-between items-center">
                <!-- Logo -->
                <router-link to="/">
                    <img src="@/components/icons/Group 13.svg" alt="Home" class="w-[99px]" />
                </router-link>
    
                <!-- Hamburger Menu  -->
                <div class="lg:hidden relative">
                    <button @click="toggleMenu" class="text-xl mr-8">
                        <span class="material-icons font-semibold">menu</span>
                    </button>
                </div>
    
                <!-- Menu Navbar -->
                <ul class="hidden lg:flex text-lg justify-between items-center space-x-4">
                    <li class="hover:text-pink-500 cursor-pointer my-auto">
                        <router-link to="/new" class="pl-[138px] font-semibold">New</router-link>
                    </li>
                    <li class="hover:text-pink-500 cursor-pointer my-auto">
                        <router-link to="/reading-list" class="pl-[75px] font-semibold whitespace-nowrap">Reading list</router-link>
                    </li>
                    <li class="hover:text-pink-500 cursor-pointer my-auto">
                        <router-link to="/topics" class="pl-[76px] font-semibold">Topics</router-link>
                    </li>
                    <li class="hover:text-pink-500 cursor-pointer my-auto">
                        <router-link to="/create">
                            <button class="ml-[76px] w-[120px] h-[50px] bg-[#9283E0] text-white font-semibold rounded-md hover:bg-opacity-90 text-lg">
                                Create
                            </button>
                        </router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
  
    <!-- Menu Mobile -->
    <div v-if="isMenuOpen" class="lg:hidden fixed inset-0 z-50 bg-opacity-75 bg-black">
        <button @click="toggleMenu" class="absolute top-4 right-4 text-2xl">
            <span class="flex flex-col material-icons font-semibold">close</span>
        </button>
        <div class="flex flex-col items-center h-full bg-white w-2/6 ml-auto">
            <router-link to="/new" @click="toggleMenu" class="text-lg font-semibold p-4 mt-12">New</router-link>
            <router-link to="reading-list" @click="toggleMenu" class="text-lg font-semibold p-4">Reading list</router-link>
            <router-link to="topics" @click="toggleMenu" class="text-lg font-semibold p-4">Topics</router-link>
            <router-link to="create" @click="toggleMenu" class="text-lg font-semibold p-4">
                <button class="w-[120px] h-[50px] bg-[#9283E0] text-white font-semibold rounded-md hover:bg-opacity-90 text-lg">
                    Create
                </button>
            </router-link>
        </div>

    </div>
  </template>
  
  <script>
  export default {
    name: "NavBar",
    data() {
      return {
        isMenuOpen: false,
      };
    },
    methods: {
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
      },
    },
  };
  </script>
  
  <style scoped>
  nav {
    position: relative;
  }
  </style>
  