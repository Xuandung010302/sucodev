<template>
    <div class="bg-custom-bg h-100vh mx-auto">
        <div class="max-w-custom mx-auto pt-[37px]">
            <div class="max-w-custom bg-white mx-auto h-[83px] flex items-center justify-start">
                <input 
                v-model="type" 
                @input="searchPosts"
                type="text" 
                class="pl-11 w-full border-gray-300 rounded-lg h-[83px]"
                placeholder="Type Something..."
                />
                <img src="@/components/icons/Icon.svg" alt="Search" class="h-6 w-auto ml-auto mr-6" />
            </div>
            <div class="mt-10 mb-[16.8px] text-txtGr text-xs text-center lg:text-start">
                ALL POST
            </div>

            <div v-if="posts.length" class="lg:flex-none grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-10 justify-center mx-auto lg:mx-0 ">
                <div v-for="(post, index) in posts" :key="index" class="flex flex-col items-center lg:block lg:mx-0 mx-auto">
                    <img :src="`http://localhost:3000/backend/images/${post.image}`" alt="Post Image" class="lg:mr-6 lg:mx-0 w-[537px] h-[358px] transform transition-transform duration-300 hover:scale-105 rounded-lg cursor-pointer mx-auto">
                    <div class="flex mt-5">
                        <span class="text-txtGr">BY</span>&nbsp;&nbsp;{{ post.author }}&nbsp;&nbsp;<span class="text-txtGr">IN</span>&nbsp;&nbsp;{{ post.category }}
                    </div>
                    <div class="text-[28px] font-semibold mt-5 h-[133px] mr-[37px] max-w-[536px] text-center lg:text-start">
                        {{ post.title }}
                    </div>
                    <div class="text-txtGr text-base mt-[-13px] text-center lg:text-start">
                        {{ post.description }}
                    </div>
                    <div class="text-txtGr text-base mt-[-13px] text-center lg:text-start">
                        {{ post.excerpt }}
                    </div>
                </div>
            </div>

            <div v-else class="text-center mt-10">
                <p>Loading posts...</p>
            </div>

            <div class="mt-[182px] flex justify-center">
                <button @click="loadMorePosts" class="mb-[155px] w-[204px] h-[70px] rounded-[40px] text-[#FF5480] border-2 border-[#FF5480] font-semibold hover:bg-opacity-90 text-2xl hover:bg-[#FF5480] hover:text-white transform transition-transform duration-300 hover:scale-105">
                    Load More
                </button>
            </div>
        </div>
    </div>
</template>
  
<script>
    import axios from "axios";
  
    export default {
        name: "HomePage",
        data() {
            return {
                posts: [],
                currentPage: 1,
                type: "",
                allPosts: [],
            };
        },
        created() {
            this.fetchPosts();
        },
        methods: {
        async fetchPosts() {
            try {
            const response = await axios.get(`http://localhost:3000/posts?page=${this.currentPage}`);
            this.posts = [...this.posts, ...response.data];
            this.allPosts = [...this.allPosts, ...response.data];
            } catch (error) {
            console.error("Error fetching posts:", error);
            }
        },
        loadMorePosts() {
            this.currentPage++;
            this.fetchPosts();
        },
        searchPosts() {
            if (this.type.trim() === "") {
                this.posts = [...this.allPosts];
            } else {
                this.posts = this.allPosts.filter(post => 
                post.title.toLowerCase().includes(this.type.toLowerCase())
                );
            }
        },
    }
};
</script>
  