<template>
  <Disclosure as="nav" class="bg-white-800" v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <!-- Left Section -->
        <div class="flex-1 flex items-center justify-start">
          <a href="tel:+18013027277" class="text-black font-medium font-sans hover:underline">
            (801) 302-7277
          </a>
        </div>

        <!-- Center Section -->
        <div class="flex-1 flex items-center justify-center">
          <a href="/" class="flex items-center space-x-2">
            <img class="h-8 w-auto" src="https://res.cloudinary.com/dl0bohozg/image/upload/v1732662221/mystic-logo_rwqmil.png" alt="Mystic Nails">
            <span class="text-xs sm:text-base md:text-xl lg:text-2xl font-bold font-heading text-black">MYSTIC NAILS & DAY SPA</span>
          </a>
        </div>

        <!-- Right Section -->
        <div class="flex-1 flex items-center justify-end hidden md:block">
          <div class="flex space-x-1">
            <a v-for="item in navigation" :key="item.name" :href="item.href"
               :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-500 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium']"
               :aria-current="item.current ? 'page' : undefined">
              {{ item.name }}
            </a>
          </div>
        </div>
      </div>
    </div>
    <hr>
  </Disclosure>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'

const navigation = [
  { name: 'Services', href: '/#services', current: false },
  { name: 'Our Hours', href: '/#hours', current: false },
  { name: 'Reviews', href: '/#reviews', current: false },
  { name: 'Contact Us', href: '/#contact', current: false },
]
</script>
