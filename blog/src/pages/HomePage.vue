<template>
    <div class="bg-custom-bg h-auto mx-auto p-8">
        <div class="max-w-custom mx-auto">
            <div class="text-center">
                <div class="mt-10 mb-[16.8px] text-txtGr text-xs text-center lg:text-start">
                    ALL POST
                </div>
            </div>
    
            <div v-if="posts.length" class="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-10 justify-center mx-auto lg:mx-0">
                <div v-for="(post, index) in posts":key="index" class="flex flex-col items-center lg:block lg:mx-0 mx-auto">
                    <img :src="`http://localhost:3000/backend/images/${post.image}`" alt="Post Image" class="lg:mr-6 lg:mx-0 w-[537px] h-[358px] transform transition-transform duration-300 hover:scale-105 rounded-lg cursor-pointer mx-auto"/>
                    <div class="flex mt-5">
                        <span class="text-txtGr">BY</span>&nbsp;&nbsp;{{ post.author }}&nbsp;&nbsp;<span class="text-txtGr">IN</span>&nbsp;&nbsp;{{ post.category }}
                    </div>
                    <div class="text-[28px] font-semibold mt-5 h-[133px] mr-[37px] max-w-[536px] text-center lg:text-start">{{ post.title }}</div>
                    <div class="text-txtGr text-base mt-[-13px] text-center lg:text-start">{{ post.description }}</div>
                    <div class="text-txtGr text-base mt-[-13px] text-center lg:text-start">{{ post.excerpt }}</div>
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
                pageSize: 4,
            };
        },
        created() {
            this.fetchPosts();
        },
        methods: {
            async fetchPosts() {
                try {
                const response = await axios.get(`http://localhost:3000/posts`);
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
        },
    };
</script>
  