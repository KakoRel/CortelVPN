<template>
  <section id="features" class="features" ref="sectionRef">
    <div class="header-content" :class="{'visible': isVisible}">
      <h2 class="section-title">
        Почему выбирают <span class="gradient-text">CortelVPN</span>
      </h2>
      <p class="section-subtitle">
        Мы объединили передовые технологии шифрования с простым и интуитивно понятным интерфейсом.
      </p>
    </div>

    <div class="features-grid">
      <div 
        v-for="(feature, idx) in features" 
        :key="idx" 
        class="feature-card-wrapper"
        :class="{'visible': isVisible}"
        :style="`transition-delay: ${idx * 100}ms`"
      >
        <div class="feature-card" @mousemove="e => handleMouseMove(e, idx)" :ref="el => setCardRef(el, idx)">
          <div class="mouse-glow-bg"></div>
          <div class="card-glow" :style="{ background: feature.glowColor }"></div>
          
          <div class="icon-wrapper">
            <div class="icon-bg" :style="{ background: feature.glowColor }"></div>
            <span class="icon">{{ feature.icon }}</span>
          </div>
          
          <h3 class="card-title">{{ feature.title }}</h3>
          <p class="card-desc">{{ feature.description }}</p>
          
          <div class="card-border">
            <div class="mouse-glow-border"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useScrollReveal } from '../composables/useScrollReveal'

const { isVisible, elementRef: sectionRef } = useScrollReveal({ threshold: 0.1 })

const cardRefs = ref([])
const setCardRef = (el, index) => {
  if (el) {
    cardRefs.value[index] = el
  }
}

const handleMouseMove = (e, index) => {
  const card = cardRefs.value[index]
  if (!card) return
  
  const rect = card.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  
  card.style.setProperty('--mouse-x', `${x}px`)
  card.style.setProperty('--mouse-y', `${y}px`)
}

const features = ref([
  {
    icon: '🚀',
    title: 'Космическая скорость',
    description: 'Выделенные 1-Gbps каналы на серверах. Забудьте о буферизации видео и долгих загрузках.',
    glowColor: 'rgba(0, 242, 254, 0.4)'
  },
  {
    icon: '🔐',
    title: 'Нулевые логи',
    description: 'Мы физически не можем хранить ваши данные. Вся архитектура построена на принципе RAM-only серверов.',
    glowColor: 'rgba(118, 75, 162, 0.4)'
  },
  {
    icon: '🌍',
    title: 'Безграничный доступ',
    description: 'Обход DPI, файрволов и геоблокировок. Любой сервис доступен вам в 2 клика.',
    glowColor: 'rgba(245, 87, 108, 0.4)'
  },
  {
    icon: '⚡',
    title: 'Мгновенный старт',
    description: 'Никаких сложных регистраций. Ваш аккаунт привязан к защищенному ID в Telegram.',
    glowColor: 'rgba(255, 177, 153, 0.4)'
  },
  {
    icon: '💎',
    title: 'Протокол Reality',
    description: 'Трафик маскируется под обычное HTTPS соединение. Провайдер видит только то, что вы разрешаете.',
    glowColor: 'rgba(79, 172, 254, 0.4)'
  },
  {
    icon: '📱',
    title: 'Кроссплатформенность',
    description: 'Один профиль для всех устройств. Инструкции для iOS, Android, PC и Mac внутри бота.',
    glowColor: 'rgba(128, 208, 199, 0.4)'
  }
])
</script>

<style scoped>
.features {
  padding: 120px 0;
  position: relative;
}

.header-content {
  text-align: center;
  max-width: 700px;
  margin: 0 auto 80px;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.header-content.visible {
  opacity: 1;
  transform: translateY(0);
}

.section-title {
  font-size: clamp(2.5rem, 4vw, 3.5rem);
  font-weight: 800;
  letter-spacing: -1px;
  margin-bottom: 24px;
}

.gradient-text {
  background: linear-gradient(135deg, #00f2fe 0%, #4facfe 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-subtitle {
  font-size: 1.2rem;
  color: #a0a0b0;
  line-height: 1.6;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 24px;
}

.feature-card-wrapper {
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.feature-card-wrapper.visible {
  opacity: 1;
  transform: translateY(0);
}

.feature-card {
  position: relative;
  height: 100%;
  background: rgba(15, 15, 20, 0.6);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  padding: 40px 32px;
  overflow: hidden;
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  display: flex;
  flex-direction: column;
}

.feature-card:hover {
  transform: translateY(-8px);
}

.card-glow {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  opacity: 0;
  filter: blur(60px);
  transition: opacity 0.4s;
  pointer-events: none;
  z-index: 0;
}

.mouse-glow-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    800px circle at var(--mouse-x, 0) var(--mouse-y, 0),
    rgba(255, 255, 255, 0.04),
    transparent 40%
  );
  z-index: 0;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.3s;
}

.feature-card:hover .mouse-glow-bg {
  opacity: 1;
}

.feature-card:hover .card-glow {
  opacity: 0.15;
}

.icon-wrapper {
  position: relative;
  width: 64px;
  height: 64px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  z-index: 1;
}

.icon-bg {
  position: absolute;
  inset: 0;
  border-radius: 20px;
  opacity: 0.2;
  transition: opacity 0.3s;
}

.feature-card:hover .icon-bg {
  opacity: 0.4;
}

.icon {
  font-size: 2rem;
  z-index: 2;
  filter: drop-shadow(0 4px 6px rgba(0,0,0,0.3));
  transition: transform 0.3s;
}

.feature-card:hover .icon {
  transform: scale(1.1) rotate(5deg);
}

.card-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 16px;
  color: #fff;
  z-index: 1;
}

.card-desc {
  font-size: 1.05rem;
  color: #a0a0b0;
  line-height: 1.6;
  z-index: 1;
}

.card-border {
  position: absolute;
  inset: 0;
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  pointer-events: none;
  transition: border-color 0.4s;
  overflow: hidden;
}

.mouse-glow-border {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    400px circle at var(--mouse-x, 0) var(--mouse-y, 0),
    rgba(0, 242, 254, 0.4),
    transparent 40%
  );
  opacity: 0;
  transition: opacity 0.3s;
  mix-blend-mode: overlay;
}

.feature-card:hover .mouse-glow-border {
  opacity: 1;
}

.feature-card:hover .card-border {
  border-color: rgba(255, 255, 255, 0.1);
}
</style>
