<template>
    <div class="mt-[75px]">
        <div v-if="post">
            <div class="max-w-custom mx-auto">
                <div class="text-4xl leading-[58px] font-bold">{{ post.title }}</div>
                <p class="mt-[29px] text-lg font-semibold leading-8">{{ post.content }}</p>
            </div>
            <div class="mt-[117px] bg-custom-bg">
                <div class="max-w-custom mx-auto">
                    <div class="flex pt-[51px]">
                        <router-link :to="`/`">
                            <p class="text-xs text-txtGr leading-[58px] "> Home --&nbsp;</p>
                        </router-link>
                        <div class="text-xs text-txtGr leading-[58px]">{{ post.title }}</div>
                    </div>
                    <div class="flex mt-5 mx-auto px-6">
                        <div class="lg:display mr-[43px] ">
                            <img src="/src/components/icons/Facebook.svg" alt="Facebook" class="">
                            <img src="/src/components/icons/Twitter.svg" alt="Twitter" class="mt-[33px]">
                            <img src="/src/components/icons/Instagram.svg" alt="Instagram" class="mt-[33px]">
                            <img src="/src/components/icons/Pinterest.svg" alt="Pinterest" class="mt-[33px]">
                        </div>
                        <div class="display">
                            <img :src="`https://sucodev-2.onrender.com/backend/images/${post.image}`" alt="Post Image" class="w-full sm:w-[500px] md:w-[600px] lg:w-[900px] xl:w-[972px] h-auto sm:max-h-[500px] md:max-h-[520px] lg:max-h-[574px] rounded-lg"/>
                            <span class="text-txtGr">BY</span>&nbsp;&nbsp;{{ post.author }}&nbsp;&nbsp;<span class="text-txtGr">IN</span>&nbsp;&nbsp;{{ post.category }}
                            <p class="mt-[45px] sm:w-[500px] md:w-[600px] lg:w-[900px] xl:w-[972px]">{{ post.excerpt }}</p>
                        </div>
                        <div class="display ml-11">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                :fill="isLiked ? '#FF69B4' : 'none'" 
                                viewBox="0 0 24 24" 
                                stroke-width="1.5" 
                                :stroke="isLiked ? '#FF69B4' : 'currentColor'" 
                                class="w-8 h-8 cursor-pointer"
                                @click="toggleLike"
                            >
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21.435 5.25c-.892-.892-2.28-1.148-3.27-.62-1.51.804-3.075 2.45-4.165 4.277-1.09-1.827-2.655-3.473-4.165-4.277-.99-.528-2.378-.272-3.27.62-1.04 1.04-1.16 2.676-.32 4.14 1.095 1.8 3.445 4.473 7.755 8.118 4.31-3.645 6.66-6.318 7.755-8.118.84-1.464.72-3.1-.32-4.14z" />
                            </svg>
                            <p class="text-lg font-semibold whitespace-nowrap">12 K</p>
                            <img src="/src/components/icons/eye.png" alt="eye" class="mt-9">
                            <p class="text-lg font-semibold whitespace-nowrap">12 K</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else>    
            <p>Loading post...</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            post: null,
            isLiked: false,
        };
    },
    created() {
        this.fetchPost();
    },
    methods: {
        async fetchPost() {
            try {
                const postId = this.$route.params.id;
                const response = await axios.get(`http://localhost:3000/posts/${postId}`);
                this.post = response.data;
            } catch (error) {
                console.error("Error fetching post:", error);
            }
        },
        toggleLike() {
            this.isLiked = !this.isLiked;
        },
    },
};
</script>
