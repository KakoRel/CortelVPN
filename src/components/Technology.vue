<template>
  <section class="technology">
    <div class="tech-content">
      <h2 class="section-title">Технология <span class="highlight">Vless + Reality</span></h2>
      <p class="tech-description">
        Современный протокол, который невозможно обнаружить. 
        Ваш трафик выглядит как обычное HTTPS-соединение, 
        обеспечивая максимальную скрытность и безопасность.
      </p>
      <div class="tech-features">
        <div class="tech-item">
          <span class="tech-dot"></span>
          <span>Невидимость для систем обнаружения</span>
        </div>
        <div class="tech-item">
          <span class="tech-dot"></span>
          <span>Максимальная скорость соединения</span>
        </div>
        <div class="tech-item">
          <span class="tech-dot"></span>
          <span>Отсутствие логов и полная приватность</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.technology {
  padding: 100px 0;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  color: #ffffff;
  margin-bottom: 60px;
}

.section-title .highlight {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.tech-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.tech-description {
  font-size: 1.2rem;
  color: #a0a0b0;
  line-height: 1.8;
  margin-bottom: 40px;
}

.tech-features {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
}

.tech-item {
  display: flex;
  align-items: center;
  gap: 12px;
  color: #ffffff;
  font-size: 1.1rem;
}

.tech-dot {
  width: 12px;
  height: 12px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
}
</style>
