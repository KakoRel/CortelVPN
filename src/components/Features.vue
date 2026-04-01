<template>
  <section class="features">
    <h2 class="section-title">Почему CortelVPN?</h2>
    <div class="features-grid">
      <div class="feature-card" v-for="(feature, index) in features" :key="index">
        <div class="feature-icon">{{ feature.icon }}</div>
        <h3 class="feature-title">{{ feature.title }}</h3>
        <p class="feature-desc">{{ feature.description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const features = ref([
  {
    icon: '🚀',
    title: 'Высокая скорость',
    description: 'Оптимизированные серверы для максимальной скорости подключения'
  },
  {
    icon: '🔐',
    title: 'Полная приватность',
    description: 'Никаких логов. Ваша активность остаётся только вашей'
  },
  {
    icon: '🌍',
    title: 'По всему миру',
    description: 'Серверы в разных странах для обхода любых ограничений'
  },
  {
    icon: '⚡',
    title: 'Быстрая настройка',
    description: 'Подключение за 2 минуты через Telegram бот'
  },
  {
    icon: '📱',
    title: 'Все устройства',
    description: 'Работает на iOS, Android, Windows, macOS и Linux'
  },
  {
    icon: '💎',
    title: 'Vless + Reality',
    description: 'Самый современный и незаметный протокол'
  }
])
</script>

<style scoped>
.features {
  padding: 100px 0;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  color: #ffffff;
  margin-bottom: 60px;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.feature-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 30px;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.feature-card:hover {
  background: rgba(255, 255, 255, 0.06);
  border-color: rgba(102, 126, 234, 0.5);
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 16px;
}

.feature-title {
  font-size: 1.3rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 12px;
}

.feature-desc {
  color: #a0a0b0;
  line-height: 1.6;
}

@media (max-width: 968px) {
  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style>
