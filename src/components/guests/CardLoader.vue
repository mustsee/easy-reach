<template>
  <div class="pb-6">
    <div class="animate-pulse shadow-md lg:flex border border-slate-300">
      <div class="flex-1 px-6 py-8 bg-white lg:p-12">
        <div class="w-80 h-2 bg-slate-200 rounded" />
        <div class="w-32 mt-6 h-2 bg-slate-200 rounded" />
        <div class="w-40 mt-6 h-2 bg-slate-200 rounded " />
      </div>
      <div class="status-card">
        <div class="h-10"></div>
      </div>
    </div>
  </div>
</template>

<style>
.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;

  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }
}
</style>
