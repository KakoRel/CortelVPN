<template>
  <header class="header" :class="{ 'scrolled': isScrolled }">
    <div class="header-inner">
      <div class="logo-container" @mousemove="handleHover" @mouseleave="resetHover" ref="logoContainer">
        <div class="logo-glow"></div>
        <img src="/logo.png" alt="CortelVPN" class="logo" />
        <span class="logo-text">CortelVPN</span>
      </div>
      
      <nav class="nav-links">
        <a href="#features" class="nav-link">Преимущества</a>
        <a href="#tech" class="nav-link">Технология</a>
      </nav>

      <a :href="telegramLink" target="_blank" class="nav-cta">
        Подключить
      </a>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const telegramLink = 'https://t.me/CortelVPNBot'
const isScrolled = ref(false)
const logoContainer = ref(null)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

const handleHover = (e) => {
  if (!logoContainer.value) return
  const rect = logoContainer.value.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  logoContainer.value.style.setProperty('--x', `${x}px`)
  logoContainer.value.style.setProperty('--y', `${y}px`)
}

const resetHover = () => {
  if (!logoContainer.value) return
  logoContainer.value.style.setProperty('--x', `50%`)
  logoContainer.value.style.setProperty('--y', `50%`)
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 24px 0;
  z-index: 100;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.header.scrolled {
  padding: 16px 0;
  background: rgba(10, 10, 15, 0.6);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.header-inner {
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 16px;
  position: relative;
  padding: 8px 16px;
  margin-left: -16px;
  border-radius: 16px;
  cursor: pointer;
  transition: transform 0.3s ease;
  overflow: hidden;
  --x: 50%;
  --y: 50%;
}

.logo-container::before {
  content: '';
  position: absolute;
  top: var(--y);
  left: var(--x);
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
  background: radial-gradient(circle, rgba(0, 242, 254, 0.2), transparent 70%);
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.logo-container:hover::before {
  opacity: 1;
}

.logo-container:hover {
  transform: scale(1.02);
}

.logo {
  width: 48px;
  height: 48px;
  object-fit: contain;
  filter: drop-shadow(0 0 10px rgba(0, 242, 254, 0.5));
  position: relative;
  z-index: 2;
  transition: filter 0.3s;
}

.logo-container:hover .logo {
  filter: drop-shadow(0 0 20px rgba(0, 242, 254, 0.8));
}

.logo-text {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.75rem;
  font-weight: 700;
  color: #fff;
  letter-spacing: -0.5px;
  position: relative;
  z-index: 2;
}

.nav-links {
  display: flex;
  gap: 32px;
}

.nav-link {
  color: #a0a0b0;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  transition: color 0.3s;
  position: relative;
}

.nav-link:hover {
  color: #fff;
}

.nav-link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -4px;
  width: 0%;
  height: 2px;
  background: linear-gradient(90deg, #00f2fe, #4facfe);
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

.nav-cta {
  padding: 10px 24px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 30px;
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.nav-cta:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(0, 242, 254, 0.5);
  box-shadow: 0 0 20px rgba(0, 242, 254, 0.2);
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
  }
  .logo-text {
    font-size: 1.5rem;
  }
}
</style>
