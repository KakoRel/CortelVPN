<template>
  <div class="landing">
    <!-- Dynamic Animated Background -->
    <div class="background">
      <div class="glow-container">
        <div class="glow-orb orb-1"></div>
        <div class="glow-orb orb-2"></div>
        <div class="glow-orb orb-3"></div>
      </div>
      <div class="stars"></div>
      <div class="grid-overlay"></div>
    </div>

    <!-- Background Cursor Glow -->
    <div 
      class="mouse-glow" 
      :style="{ left: mouseX + 'px', top: mouseY + 'px' }"
    ></div>

    <!-- Main Content -->
    <main class="content">
      <Header />
      <Hero />
      <div class="glass-divider"></div>
      <Features />
      <div class="glass-divider"></div>
      <Technology />
      <div class="glass-divider"></div>
      <FinalCTA />
      <Footer />
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import Features from './components/Features.vue'
import Technology from './components/Technology.vue'
import FinalCTA from './components/FinalCTA.vue'
import Footer from './components/Footer.vue'

// Mouse glow effect
const mouseX = ref(-1000)
const mouseY = ref(-1000)

const handleMouseMove = (e) => {
  mouseX.value = e.clientX
  mouseY.value = e.clientY
}

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove)
})
</script>

<style>
/* Global Resets & Fonts */
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@500;700&display=swap');

:root {
  --neon-blue: #00f2fe;
  --neon-purple: #764ba2;
  --neon-pink: #f5576c;
  --dark-bg: #030305;
  --glass-bg: rgba(20, 20, 25, 0.4);
  --glass-border: rgba(255, 255, 255, 0.08);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  background: var(--dark-bg);
  color: #fff;
  font-family: 'Outfit', sans-serif;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
}

::selection {
  background: rgba(0, 242, 254, 0.3);
  color: #fff;
}

.landing {
  min-height: 100vh;
  position: relative;
  overflow: hidden;
}

/* Dynamic Background */
.background {
  position: fixed;
  inset: 0;
  z-index: 0;
  background: radial-gradient(circle at 50% 50%, #111 0%, var(--dark-bg) 100%);
  pointer-events: none;
}

.glow-container {
  position: absolute;
  inset: 0;
  overflow: hidden;
  filter: blur(120px);
}

.glow-orb {
  position: absolute;
  border-radius: 50%;
  animation: floatOrb 25s infinite alternate ease-in-out;
  opacity: 0.4;
  mix-blend-mode: screen;
}

.orb-1 {
  width: 800px;
  height: 800px;
  background: linear-gradient(to right, var(--neon-purple), #4facfe);
  top: -200px;
  left: -200px;
  animation-duration: 28s;
}

.orb-2 {
  width: 600px;
  height: 600px;
  background: linear-gradient(to right, #ff0844, #ffb199);
  bottom: -100px;
  right: -100px;
  animation-duration: 32s;
  animation-delay: -10s;
}

.orb-3 {
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, var(--neon-blue), transparent 70%);
  top: 40%;
  left: 60%;
  animation-duration: 40s;
  animation-delay: -5s;
}

@keyframes floatOrb {
  0% { transform: translate(0, 0) scale(1) rotate(0deg); }
  33% { transform: translate(100px, 150px) scale(1.1) rotate(120deg); }
  66% { transform: translate(-150px, 100px) scale(0.9) rotate(240deg); }
  100% { transform: translate(50px, -200px) scale(1.05) rotate(360deg); }
}

.grid-overlay {
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 80px 80px;
  mask-image: radial-gradient(ellipse at center, black 20%, transparent 80%);
  -webkit-mask-image: radial-gradient(ellipse at center, black 20%, transparent 80%);
  transform: perspective(1000px) rotateX(60deg) scale(2) translateY(-100px);
  animation: gridMove 20s linear infinite;
}

@keyframes gridMove {
  0% { transform: perspective(1000px) rotateX(60deg) scale(2) translateY(0); }
  100% { transform: perspective(1000px) rotateX(60deg) scale(2) translateY(80px); }
}

/* Mouse Glow Effect */
.mouse-glow {
  position: fixed;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(0, 242, 254, 0.15), transparent 70%);
  border-radius: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
  z-index: 1;
  transition: width 0.3s, height 0.3s;
}

/* Content Wrapper */
.content {
  position: relative;
  z-index: 10;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 24px;
}

/* Reusable Glass Divider */
.glass-divider {
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
  margin: 60px 0;
  position: relative;
}

.glass-divider::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 4px;
  background: linear-gradient(90deg, transparent, var(--neon-blue), transparent);
  filter: blur(2px);
  opacity: 0.5;
}

/* Title Helpers */
h1, h2, h3 {
  font-family: 'Space Grotesk', sans-serif;
}

/* Shared Entry Animations */
.reveal-up {
  opacity: 0;
  transform: translateY(40px);
  transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
}

.reveal-up.visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
