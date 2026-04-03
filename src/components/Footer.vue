<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-brand">
        <div class="logo">
          <img src="/logo.png" alt="CortelVPN" />
          <span>CortelVPN</span>
        </div>
        <p class="brand-desc">
          VPN нового поколения для свободного интернета без границ.
        </p>
      </div>

      <div class="footer-links">
        <div class="link-group">
          <a href="#features">Преимущества</a>
          <a href="#tech">Технология</a>
          <a href="https://t.me/CortelVPNBot" target="_blank">Telegram Бот</a>
        </div>
      </div>
    </div>
    
    <div class="footer-bottom">
      <p>&copy; {{ new Date().getFullYear() }} CortelVPN. Все права защищены.</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  background: rgba(10, 10, 15, 0.8);
  padding: 80px 0 0;
  border-radius: 40px 40px 0 0;
  margin-top: 40px;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 40px;
  padding-bottom: 60px;
}

.footer-brand {
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-bottom: 20px;
}

.logo img {
  width: 48px;
  height: 48px;
  object-fit: contain;
}

.logo span {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.8rem;
  font-weight: 700;
  background: linear-gradient(135deg, #00f2fe 0%, #4facfe 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.brand-desc {
  color: #a0a0b0;
  line-height: 1.6;
  font-size: 1.1rem;
}

.footer-links {
  display: flex;
  justify-content: center;
}

.link-group {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 32px;
}

.link-group a {
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.1rem;
  transition: all 0.3s;
  opacity: 0.8;
}

.link-group a:hover {
  color: #00f2fe;
  opacity: 1;
  transform: translateY(-2px);
}

.footer-bottom {
  text-align: center;
  padding: 32px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  color: #6a6a7a;
  font-size: 0.95rem;
}
</style>
