<template>
  <section class="final-cta">
    <div class="final-cta-content">
      <h2>Готовы начать?</h2>
      <p>Подключитесь к CortelVPN за 2 минуты прямо в Telegram</p>
      <a :href="telegramLink" target="_blank" class="cta-button large">
        <svg class="telegram-icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.054 5.56-5.022c.242-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
        </svg>
        <span>Открыть бота</span>
      </a>
    </div>
  </section>
</template>

<script setup>
const telegramLink = 'https://t.me/CortelVPNBot'
</script>

<style scoped>
.final-cta {
  padding: 100px 0;
}

.final-cta-content {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.2) 0%, rgba(118, 75, 162, 0.2) 100%);
  border: 1px solid rgba(102, 126, 234, 0.3);
  border-radius: 30px;
  padding: 60px 40px;
  text-align: center;
  backdrop-filter: blur(10px);
}

.final-cta-content h2 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 16px;
}

.final-cta-content p {
  font-size: 1.2rem;
  color: #a0a0b0;
  margin-bottom: 32px;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 22px 48px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-decoration: none;
  border-radius: 16px;
  font-weight: 600;
  font-size: 1.2rem;
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

@media (max-width: 480px) {
  .final-cta-content h2 {
    font-size: 1.8rem;
  }

  .final-cta-content p {
    font-size: 1rem;
  }

  .cta-button {
    padding: 18px 36px;
    font-size: 1.1rem;
  }
}
</style>
