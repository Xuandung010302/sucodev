<template>
  <div class="max-w-custom max-h-[50px] my-[50px] mx-auto">
    <div class="flex justify-between items-center">
      <!-- Logo -->
      <router-link to="/">
        <img src="@/components/icons/Logo-Footer.svg" alt="Home" class="w-[99px]" />
      </router-link>
      <div class="flex ml-[399px] mr-[289px]">
        <a href="https://Vk.com/Braham" target="_blank">
          <img src="@/components/icons/Vk.svg" alt="Vk" class="size-5" />
        </a>
        <a href="https://Pinterest.com/Braham" target="_blank">
          <img src="@/components/icons/Pinterest.svg" alt="Pinterest" class="ml-[10px] size-5" />
        </a>
        <a href="https://Instagram.com/Braham" target="_blank">
          <img src="@/components/icons/Instagram.svg" alt="Instagram" class="ml-[10px] size-5" />
        </a>
        <a href="https://x.com/Braham" target="_blank">
          <img src="@/components/icons/Twitter.svg" alt="Twitter" class="ml-[10px] size-5" />
        </a>
        <a href="https://Facebook.com/Braham" target="_blank">
          <img src="@/components/icons/Facebook.svg" alt="Facebook" class="ml-[10px] size-5" />
        </a>
      </div>
      <!-- Cập nhật năm tự động -->
      <div class="text-txtGr">
        All Rights Reserved {{ currentYear }} 3layers
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>
