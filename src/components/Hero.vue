<template>
  <section class="hero">
    <div class="hero-content">
      <h1 class="title">
        <span class="title-line">Свободный</span>
        <span class="title-line highlight">интернет</span>
        <span class="title-line">начинается</span>
        <span class="title-line">здесь</span>
      </h1>
      
      <p class="subtitle">
        Быстрый и безопасный VPN на базе 
        <span class="tech-highlight">Vless + Reality</span>
      </p>

      <div class="cta-section">
        <a :href="telegramLink" target="_blank" class="cta-button">
          <svg class="telegram-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.054 5.56-5.022c.242-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
          </svg>
          <span>Запустить в Telegram</span>
        </a>
        <p class="cta-note">Бесплатный тестовый период</p>
      </div>
    </div>

    <div class="hero-visual">
      <div class="shield-container">
        <div class="shield">
          <div class="shield-inner"></div>
          <div class="checkmark">✓</div>
        </div>
        <div class="floating-elements">
          <div class="float-item float-1">🔒</div>
          <div class="float-item float-2">⚡</div>
          <div class="float-item float-3">🛡️</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const telegramLink = 'https://t.me/CortelVPNBot'
</script>

<style scoped>
.hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  min-height: 80vh;
  padding: 60px 0;
}

.hero-content {
  animation: fadeInLeft 1s ease-out;
}

.title {
  font-size: 4rem;
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 24px;
}

.title-line {
  display: block;
  color: #ffffff;
  opacity: 0;
  animation: slideUp 0.8s ease-out forwards;
}

.title-line:nth-child(1) { animation-delay: 0.2s; }
.title-line:nth-child(2) { animation-delay: 0.4s; }
.title-line:nth-child(3) { animation-delay: 0.6s; }
.title-line:nth-child(4) { animation-delay: 0.8s; }

.title-line.highlight {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.subtitle {
  font-size: 1.25rem;
  color: #a0a0b0;
  margin-bottom: 40px;
}

.tech-highlight {
  color: #667eea;
  font-weight: 600;
}

.cta-section {
  animation: fadeIn 1s ease-out 1.2s forwards;
  opacity: 0;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 18px 36px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-decoration: none;
  border-radius: 16px;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: 0 10px 40px rgba(102, 126, 234, 0.4);
  position: relative;
  overflow: hidden;
}

.cta-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
  transition: left 0.5s ease;
}

.cta-button:hover::before {
  left: 100%;
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 50px rgba(102, 126, 234, 0.6);
}

.telegram-icon {
  width: 24px;
  height: 24px;
}

.cta-note {
  margin-top: 16px;
  color: #6a6a7a;
  font-size: 0.9rem;
}

.hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
  animation: fadeInRight 1s ease-out;
}

.shield-container {
  position: relative;
  width: 400px;
  height: 400px;
}

.shield {
  width: 200px;
  height: 240px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 100px 100px 20px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 20px 60px rgba(102, 126, 234, 0.5);
  animation: pulse 3s ease-in-out infinite;
}

.shield-inner {
  width: 160px;
  height: 200px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 80px 80px 15px 15px;
  border: 2px solid rgba(255, 255, 255, 0.2);
}

.checkmark {
  position: absolute;
  font-size: 80px;
  color: white;
  text-shadow: 0 0 30px rgba(255, 255, 255, 0.5);
}

.floating-elements {
  position: absolute;
  width: 100%;
  height: 100%;
}

.float-item {
  position: absolute;
  font-size: 3rem;
  animation: floatItem 4s ease-in-out infinite;
}

.float-1 {
  top: 10%;
  left: 20%;
  animation-delay: 0s;
}

.float-2 {
  top: 20%;
  right: 20%;
  animation-delay: -1.5s;
}

.float-3 {
  bottom: 20%;
  left: 30%;
  animation-delay: -3s;
}

@keyframes floatItem {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
    opacity: 0.8;
  }
  50% {
    transform: translateY(-20px) rotate(10deg);
    opacity: 1;
  }
}

@keyframes pulse {
  0%, 100% {
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    transform: translate(-50%, -50%) scale(1.05);
  }
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 968px) {
  .hero {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 40px;
  }

  .hero-content {
    order: 2;
  }

  .hero-visual {
    order: 1;
  }

  .title {
    font-size: 2.5rem;
  }

  .shield-container {
    width: 300px;
    height: 300px;
  }

  .shield {
    width: 150px;
    height: 180px;
  }

  .shield-inner {
    width: 120px;
    height: 150px;
  }

  .checkmark {
    font-size: 60px;
  }
}

@media (max-width: 480px) {
  .title {
    font-size: 2rem;
  }

  .subtitle {
    font-size: 1rem;
  }

  .cta-button {
    padding: 14px 28px;
    font-size: 1rem;
  }
}
</style>
