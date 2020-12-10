<template functional>
  <transition
    enter-active-class="animated slideInLeft"
    leave-active-class="animated slideOutRight"
  >
    <slot />
  </transition>
</template>