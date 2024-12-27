<template>
  <div class="bg-custom-bg mx-5 lg:mx-0">
    <div class="h-auto max-w-custom mx-auto lg:flex">
      <div class="mt-[43px] h-screen lg:w-2/3">
        <div class="mt-10 text-2xl font-semibold font-inter text-txtCreatePage">
          Create Post
        </div>
        <div class="mt-8 font-semibold text-txtCreatePage">
          Title
        </div>
        <input 
          v-model="title" 
          type="text" 
          class="mt-4 w-full border pl-4 border-gray-300 rounded-lg h-10"
          placeholder="Title..."
        />
        <span class="text-txtGr">{{ title.length }}/300</span>
        <div class="mt-8 font-semibold text-txtCreatePage">
          Content
        </div>
        <input 
          v-model="content" 
          type="text" 
          class="mt-2 w-full pl-4 border border-gray-300 rounded-lg h-[101px]"
          placeholder="Content..."
        />
        <div class="mt-8 font-semibold text-txtCreatePage">
          Choose Image
        </div>
        <input 
          type="file" 
          @change="onImageSelected" 
          class="mt-2 w-full border-gray-300 rounded-lg h-10"
        />
        <div class="mt-8 font-semibold text-txtCreatePage">
          Excerpt
        </div>
        <input 
          v-model="excerpt" 
          type="text" 
          class="mt-2 w-full pl-4 border border-gray-300 rounded-lg h-[101px]"
          placeholder="Excerpt..."
        />
        <div class="justify-end flex ">
          <button @click="createPost" class="mt-4 p-2 bg-[#9283E0] text-white rounded-[10px] text-sm font-semibold w-[128px] h-10 ">
            Create Post
          </button>
        </div>
      </div>
      <div class="bg-white mt-10 lg:ml-4 w-[378px] h-[519px] mx-auto">
        <div class="flex justify-center text-lg font-semibold mt-[32px]">
          RECENT POST
        </div>
        <div class="lg:w-[336px] ml-[31px] mt-[47px]">
          <div class="text-txtGr">DESIGN PROCESS</div>
          <div class="font-semibold">Our 15 favorite websites from August</div>
          <div class="text-txtGr">INSPIRATION</div>
          <div class="font-semibold text-[#FF5480] mt-10">The beginners guide to user research</div>
          <div class="text-txtGr">INSPIRATION</div>
          <div class="font-semibold mt-10">Web page layout 101: website anatomy every designer needs to learn</div>
          <div class="text-txtGr mt-10">FREELANCING</div>
          <div class="font-semibold">10 essential sections to a high landing page</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from '@/assets/router';

export default {
  name: "CreatePage",
  data() {
    return {
      title: "",
      image: "",
      author: "Tomas Laurinavicius",
      category: "Design Process",
      excerpt: "",
      content: "",
    };
  },
  methods: {
    async createPost() {
      const formData = new FormData();
      formData.append('title', this.title);
      formData.append('content', this.content);
      formData.append('excerpt', this.excerpt);
      formData.append('author', this.author);
      formData.append('category', this.category);

      if (this.image) {
        formData.append('image', this.image);
      } else {
        alert('Vui lòng chọn ảnh!');
        return;
      }

      try {
        const response = await fetch('https://sucodev-2.onrender.com/posts', {
          method: 'POST',
          body: formData,
        });

        const data = await response.json();
        if (response.ok) {
          alert('Tạo thành công bài đăng!');
          router.push('/');
        } else {
          alert(data.message || 'Có lỗi xảy ra!');
        }
      } catch (error) {
        console.error("Error:", error);
        alert('Tạo bài đăng thất bại!');
      }
    },

    onImageSelected(event) {
      const file = event.target.files[0];
      if (file) {
        this.image = file;
      }
    }
  }
};
</script>