<template>
    <div class="bg-custom-bg h-auto mx-auto p-8">
        <div class="max-w-custom mx-auto">
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
            <div class="text-center">
                <div class="mt-10 mb-[16.8px] text-txtGr text-xs text-center lg:text-start">
                    ALL POST
                </div>
            </div>
    
            <div v-if="posts.length" class="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-10 justify-center mx-auto lg:mx-0">
                <div v-for="(post, index) in posts" :key="index" class="flex flex-col items-center lg:block lg:mx-0 mx-auto">
                    <router-link :to="`/posts/${post.id}`">
                        <img 
                            :src="`https://sucodev-seven.vercel.app/images/${post.image}`" 
                            alt="Post Image" 
                            class="w-full max-w-[90%] sm:w-[400px] md:w-[480px] lg:w-[537px] 
                                h-auto max-h-[90%] sm:max-h-[300px] md:max-h-[320px] lg:max-h-[358px]
                                transform transition-transform duration-300 hover:scale-105 rounded-lg cursor-pointer"
                        />
                    </router-link>

                    <div @click="viewPost(post.id)" class="cursor-pointer">
                        <div class="mt-5 text-center lg:text-start">
                            <span class="text-txtGr">BY</span>&nbsp;&nbsp;{{ post.author }}&nbsp;&nbsp;<span class="text-txtGr">IN</span>&nbsp;&nbsp;{{ post.category }}
                        </div>
                        <div class="text-[28px] font-semibold mt-5 lg:mr-[37px] max-w-[536px] text-center mx-auto lg:text-start">{{ post.title }}</div>
                        <div class="text-txtGr text-base mt-[21px] text-center lg:text-start">{{ post.excerpt }}</div>
                    </div>
                </div>
            </div>

            <div v-else class="text-center mt-10">
                <p>Loading posts...</p>
            </div>
    
            <div class="mt-[182px] flex justify-center">
                <button 
                    @click="loadMorePosts" 
                    class="mb-[155px] w-[204px] h-[70px] rounded-[40px] text-[#FF5480] border-2 border-[#FF5480] font-semibold hover:bg-opacity-90 text-2xl hover:bg-[#FF5480] hover:text-white transform transition-transform duration-300 hover:scale-105">
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
                allPosts: [],
                currentPage: 1,
                type: "",
                pageSize: 4,
            };
        },
        created() {
            this.fetchPosts();
        },
        methods: {
            async fetchPosts() {
                try {
                    const response = await axios.get(`https://sucodev-seven.vercel.app/posts`);
                    this.allPosts = response.data;
                    this.loadPosts();
                } catch (error) {
                    console.error("Error fetching posts:", error);
                }
            },
            loadPosts() {
                const start = (this.currentPage - 1) * this.pageSize;
                const end = this.currentPage * this.pageSize;
                const newPosts = this.allPosts.slice(start, end);
        
                this.posts = [...this.posts, ...newPosts];
            },
            loadMorePosts() {
                this.currentPage++;
                this.loadPosts();
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
            viewPost(postId) {
                this.$router.push(`/posts/${postId}`);
            },
        },
    };
</script>
  