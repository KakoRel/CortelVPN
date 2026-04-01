<template>
  <header class="header">
    <div class="logo-container">
      <img src="/logo.png" alt="CortelVPN" class="logo" />
      <span class="logo-text">CortelVPN</span>
    </div>
  </header>
</template>

<style scoped>
.header {
  padding: 20px 0;
  animation: fadeInDown 1s ease-out;
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo {
  width: 50px;
  height: 50px;
  object-fit: contain;
  filter: drop-shadow(0 0 20px rgba(102, 126, 234, 0.5));
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
