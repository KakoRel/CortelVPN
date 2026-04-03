<template>
  <section class="hero">
    <div class="hero-container">
      <div class="hero-content">
        <div class="badge">
          <span class="pulse-dot"></span>
          <span>Vless + Reality Protocol</span>
        </div>

        <h1 class="title">
          <div class="title-line">
            <span class="text-glow">Свободный</span>
            <span>интернет</span>
          </div>
          <div class="title-line">
            <span class="text-gradient">начинается здесь</span>
          </div>
        </h1>
        
        <p class="subtitle">
          Современный VPN-сервис нового поколения. 
          Абсолютная анонимность, непревзойденная скорость 
          и мгновенное подключение в Telegram.
        </p>

        <div class="actions">
          <a :href="telegramLink" target="_blank" class="primary-btn group">
            <div class="btn-glow"></div>
            <span class="btn-text">
              <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.054 5.56-5.022c.242-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
              </svg>
              Запустить в Telegram
            </span>
            <div class="arrow-icon">→</div>
          </a>
          
          <div class="stats-row">
            <div class="stat">
              <div class="stat-val">> 1 Gbps</div>
              <div class="stat-label">Скорость</div>
            </div>
            <div class="stat-divider"></div>
            <div class="stat">
              <div class="stat-val">0 Логов</div>
              <div class="stat-label">Приватность</div>
            </div>
          </div>
        </div>
      </div>

      <div class="hero-visual">
        <div class="visual-wrapper">
          <!-- Central Shield/Sphere -->
          <div class="core-sphere">
            <div class="sphere-inner"></div>
            <div class="sphere-glow"></div>
            <svg class="shield-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4"/>
            </svg>
          </div>
          
          <!-- Orbiting Rings -->
          <div class="orbit-ring ring-1"></div>
          <div class="orbit-ring ring-2"></div>
          
          <!-- Floating Nodes -->
          <div class="node node-1">
            <div class="node-icon">📱</div>
          </div>
          <div class="node node-2">
            <div class="node-icon">🌍</div>
          </div>
          <div class="node node-3">
            <div class="node-icon">⚡</div>
          </div>
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
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 80px; /* Offset for header */
}

.hero-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
  width: 100%;
}

@media (max-width: 1024px) {
  .hero-container {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 60px;
    padding: 40px 0;
  }
}

/* Badge */
.badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 8px 16px;
  background: rgba(0, 242, 254, 0.05);
  border: 1px solid rgba(0, 242, 254, 0.2);
  border-radius: 100px;
  color: #00f2fe;
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: 32px;
  animation: fadeUp 0.8s forwards;
  opacity: 0;
  transform: translateY(20px);
}

.pulse-dot {
  width: 8px;
  height: 8px;
  background: #00f2fe;
  border-radius: 50%;
  box-shadow: 0 0 10px #00f2fe;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { box-shadow: 0 0 0 0 rgba(0, 242, 254, 0.4); }
  70% { box-shadow: 0 0 0 10px rgba(0, 242, 254, 0); }
  100% { box-shadow: 0 0 0 0 rgba(0, 242, 254, 0); }
}

/* Typography */
.title {
  font-size: clamp(3rem, 5vw, 5rem);
  line-height: 1.1;
  font-weight: 800;
  letter-spacing: -1px;
  margin-bottom: 24px;
}

.title-line {
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

@media (max-width: 1024px) {
  .title-line { justify-content: center; }
  .badge { margin: 0 auto 32px; }
}

.title-line:nth-child(1) { animation: splitReveal 1s 0.2s cubic-bezier(0.2, 1, 0.2, 1) forwards; opacity: 0; transform: translateY(40px); }
.title-line:nth-child(2) { animation: splitReveal 1s 0.4s cubic-bezier(0.2, 1, 0.2, 1) forwards; opacity: 0; transform: translateY(40px); }

.text-glow {
  color: #fff;
  text-shadow: 0 0 30px rgba(255, 255, 255, 0.3);
}

.text-gradient {
  background: linear-gradient(135deg, #00f2fe 0%, #4facfe 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.subtitle {
  font-size: 1.25rem;
  color: #a0a0b0;
  line-height: 1.6;
  max-width: 500px;
  margin-bottom: 40px;
  animation: fadeUp 1s 0.6s forwards;
  opacity: 0;
  transform: translateY(20px);
}

@media (max-width: 1024px) {
  .subtitle { margin: 0 auto 40px; }
}

/* Button & Stats */
.actions {
  animation: fadeUp 1s 0.8s forwards;
  opacity: 0;
  transform: translateY(20px);
}

.primary-btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 380px;
  padding: 2px;
  background: linear-gradient(135deg, rgba(0, 242, 254, 0.4), rgba(74, 191, 238, 0.1));
  border-radius: 24px;
  text-decoration: none;
  overflow: hidden;
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.primary-btn:hover {
  transform: translateY(-4px) scale(1.02);
}

.btn-glow {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
  transition: left 0.5s;
}

.primary-btn:hover .btn-glow {
  left: 100%;
}

.btn-text {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  background: #0a0a0f;
  border-radius: 22px;
  padding: 18px 24px;
  color: #fff;
  font-weight: 600;
  font-size: 1.2rem;
  z-index: 1;
  transition: background 0.3s;
}

.primary-btn:hover .btn-text {
  background: rgba(10, 10, 15, 0.8);
}

.primary-btn svg {
  width: 28px;
  height: 28px;
  color: #00f2fe;
}

.arrow-icon {
  position: absolute;
  right: 24px;
  z-index: 2;
  color: #fff;
  font-size: 1.2rem;
  transition: transform 0.3s;
  opacity: 0.7;
}

.primary-btn:hover .arrow-icon {
  transform: translateX(4px);
  opacity: 1;
}

.stats-row {
  display: flex;
  align-items: center;
  gap: 24px;
  margin-top: 32px;
  padding-left: 16px;
}

@media (max-width: 1024px) {
  .stats-row { justify-content: center; padding-left: 0; }
  .primary-btn { max-width: 100%; }
}

.stat-val {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
}

.stat-label {
  font-size: 0.9rem;
  color: #6a6a7a;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.stat-divider {
  width: 1px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
}

/* Visual Side */
.hero-visual {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: fadeIn 2s 1s forwards;
  opacity: 0;
}

.visual-wrapper {
  position: relative;
  width: 500px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 640px) {
  .visual-wrapper { width: 350px; height: 350px; transform: scale(0.8); }
}

.core-sphere {
  position: relative;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(0, 242, 254, 0.2), rgba(118, 75, 162, 0.2));
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 242, 254, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  box-shadow: 0 0 60px rgba(0, 242, 254, 0.2), inset 0 0 20px rgba(0, 242, 254, 0.2);
  animation: pulseSphere 4s ease-in-out infinite alternate;
}

.sphere-inner {
  position: absolute;
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0, 242, 254, 0.1), transparent 70%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  animation: spin 10s linear infinite;
}

.shield-icon {
  width: 80px;
  height: 80px;
  color: #00f2fe;
  z-index: 2;
  filter: drop-shadow(0 0 15px rgba(0, 242, 254, 0.5));
}

.orbit-ring {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: inset 0 0 20px rgba(0, 242, 254, 0.02);
}

.ring-1 {
  width: 350px;
  height: 350px;
  animation: orbit 20s linear infinite;
  border-left-color: rgba(0, 242, 254, 0.3);
  border-right-color: rgba(118, 75, 162, 0.2);
}

.ring-2 {
  width: 480px;
  height: 480px;
  animation: orbitReverse 30s linear infinite;
  border-top-color: rgba(255, 255, 255, 0.1);
  border-bottom-color: rgba(0, 242, 254, 0.1);
}

.node {
  position: absolute;
  width: 60px;
  height: 60px;
  background: rgba(10, 10, 15, 0.8);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(0, 242, 254, 0.2);
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  z-index: 20;
}

.node-1 { top: 10%; right: 20%; animation: floatNode 5s ease-in-out infinite; }
.node-2 { bottom: 15%; left: 10%; animation: floatNode 6s ease-in-out infinite 1s; }
.node-3 { top: 40%; left: 5%; animation: floatNode 7s ease-in-out infinite 2s; }

/* Animations */
@keyframes splitReveal {
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeUp {
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeIn {
  to { opacity: 1; }
}

@keyframes pulseSphere {
  0% { transform: scale(1); box-shadow: 0 0 60px rgba(0, 242, 254, 0.2); }
  100% { transform: scale(1.05); box-shadow: 0 0 100px rgba(0, 242, 254, 0.4); }
}

@keyframes spin {
  100% { transform: rotate(360deg); }
}

@keyframes orbit {
  0% { transform: translate(-50%, -50%) rotate(0deg); }
  100% { transform: translate(-50%, -50%) rotate(360deg); }
}

@keyframes orbitReverse {
  0% { transform: translate(-50%, -50%) rotate(360deg); }
  100% { transform: translate(-50%, -50%) rotate(0deg); }
}

@keyframes floatNode {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}
</style>
