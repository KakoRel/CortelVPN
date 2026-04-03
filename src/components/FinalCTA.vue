<template>
  <section class="final-cta" ref="sectionRef">
    <div class="cta-container" :class="{'visible': isVisible}">
      <!-- Glowing Background Elements -->
      <div class="cta-glow glow-1"></div>
      <div class="cta-glow glow-2"></div>
      
      <div class="cta-content">
        <h2 class="title">
          Готовы к <span class="gradient-text">настоящей</span> свободе?
        </h2>
        <p class="subtitle">
          Подключение занимает менее 2 минут. Пробный период бесплатен.
          Никаких кредитных карт или скрытых списаний.
        </p>
        
        <div class="cta-actions">
          <a :href="telegramLink" target="_blank" class="cyber-btn">
            <span class="btn-bg"></span>
            <span class="btn-text">
              <svg class="tg-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.054 5.56-5.022c.242-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
              </svg>
              ПЕРЕЙТИ В БОТ
            </span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useScrollReveal } from '../composables/useScrollReveal'

const { isVisible, elementRef: sectionRef } = useScrollReveal({ threshold: 0.2 })
const telegramLink = 'https://t.me/CortelVPNBot'
</script>

<style scoped>
.final-cta {
  padding: 120px 0;
  display: flex;
  justify-content: center;
}

.cta-container {
  position: relative;
  width: 100%;
  max-width: 1000px;
  background: rgba(15, 15, 20, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 40px;
  padding: 80px 40px;
  text-align: center;
  overflow: hidden;
  backdrop-filter: blur(20px);
  opacity: 0;
  transform: scale(0.95);
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.cta-container.visible {
  opacity: 1;
  transform: scale(1);
}

/* Background Glows */
.cta-glow {
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.3;
  pointer-events: none;
  z-index: 0;
}

.glow-1 {
  top: -200px;
  left: -100px;
  background: linear-gradient(135deg, #00f2fe, #4facfe);
  animation: pulseGlow 6s ease-in-out infinite alternate;
}

.glow-2 {
  bottom: -200px;
  right: -100px;
  background: linear-gradient(135deg, #764ba2, #f5576c);
  animation: pulseGlow 8s ease-in-out infinite alternate-reverse;
}

@keyframes pulseGlow {
  0% { transform: scale(1); opacity: 0.2; }
  100% { transform: scale(1.2); opacity: 0.4; }
}

.cta-content {
  position: relative;
  z-index: 10;
}

.title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  margin-bottom: 24px;
}

.gradient-text {
  background: linear-gradient(135deg, #00f2fe 0%, #4facfe 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.subtitle {
  font-size: 1.25rem;
  color: #a0a0b0;
  max-width: 600px;
  margin: 0 auto 48px;
  line-height: 1.6;
}

.cta-actions {
  display: flex;
  justify-content: center;
}

/* Cyber Button */
.cyber-btn {
  position: relative;
  display: inline-block;
  padding: 2px;
  border-radius: 100px;
  background: linear-gradient(90deg, #00f2fe, #764ba2, #00f2fe);
  background-size: 200% auto;
  text-decoration: none;
  animation: bgScroll 3s linear infinite;
  transition: transform 0.3s;
}

.cyber-btn:hover {
  transform: translateY(-4px) scale(1.05);
  box-shadow: 0 10px 40px rgba(0, 242, 254, 0.4);
}

.btn-bg {
  position: absolute;
  inset: 0;
  border-radius: 100px;
  background: inherit;
  filter: blur(10px);
  opacity: 0;
  transition: opacity 0.3s;
}

.cyber-btn:hover .btn-bg {
  opacity: 0.8;
}

.btn-text {
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;
  background: #0a0a0f;
  padding: 16px 40px;
  border-radius: 100px;
  color: #fff;
  font-weight: 700;
  font-size: 1.2rem;
  letter-spacing: 1px;
  z-index: 1;
}

.tg-icon {
  width: 24px;
  height: 24px;
  color: #00f2fe;
}

@keyframes bgScroll {
  to { background-position: 200% center; }
}

@media (max-width: 768px) {
  .cta-container {
    padding: 60px 24px;
    border-radius: 30px;
  }
}
</style>
