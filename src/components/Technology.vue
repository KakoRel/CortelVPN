<template>
  <section id="tech" class="tech-section" ref="sectionRef">
    <div class="tech-container" :class="{'visible': isVisible}">
      <div class="tech-visual">
        <div class="terminal-mock">
          <div class="terminal-header">
            <span class="dot red"></span>
            <span class="dot yellow"></span>
            <span class="dot green"></span>
            <span class="terminal-title">vless_reality_prot.sh</span>
          </div>
          <div class="terminal-body">
            <p class="code-line"><span class="cmd">></span> > Initiating secure handshake...</p>
            <p class="code-line delay-1"><span class="cmd">></span> > Camouflaging traffic as SNI: amazon.com</p>
            <p class="code-line delay-2"><span class="cmd">></span> > Establishing TLS 1.3 tunnel</p>
            <p class="code-line delay-3 success"><span class="cmd">></span> > Connection SECURED & UNDETECTABLE.</p>
          </div>
        </div>
        
        <div class="hologram-effect"></div>
      </div>

      <div class="tech-info">
        <div class="badge">Под капотом</div>
        <h2 class="title">Архитектура <br/><span class="gradient-text">VLESS + Reality</span></h2>
        
        <p class="description">
          Забудьте об устаревших OpenVPN или WireGuard, которые легко блокируются провайдерами (DPI). 
          Наш протокол маскирует ваш трафик под обычные посещения крупных мировых сайтов.
        </p>

        <ul class="tech-list">
          <li v-for="(item, i) in techItems" :key="i" class="tech-list-item" :style="`transition-delay: ${0.4 + i * 0.1}s`">
            <div class="check-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span>{{ item }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useScrollReveal } from '../composables/useScrollReveal'

const { isVisible, elementRef: sectionRef } = useScrollReveal()

const techItems = [
  'Устойчивость к Deep Packet Inspection (DPI)',
  'Идеальная маскировка (Stealth proxying)',
  'Отсутствие overhead-трафика (быстрее WireGuard)',
  'Автоматическая ротация SNI'
]
</script>

<style scoped>
.tech-section {
  padding: 120px 0;
  overflow: hidden;
}

.tech-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
  opacity: 0;
  transform: translateY(50px);
  transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
}

.tech-container.visible {
  opacity: 1;
  transform: translateY(0);
}

@media (max-width: 1024px) {
  .tech-container {
    grid-template-columns: 1fr;
    gap: 60px;
  }
}

/* Visual Side */
.tech-visual {
  position: relative;
  perspective: 1000px;
}

.terminal-mock {
  background: #0a0a0f;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.6), 0 0 40px rgba(0, 242, 254, 0.1);
  transform: rotateY(15deg) rotateX(10deg);
  transition: transform 0.5s ease;
}

.terminal-mock:hover {
  transform: rotateY(5deg) rotateX(5deg);
}

.terminal-header {
  background: #15151a;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  border-bottom: 1px solid rgba(255,255,255,0.05);
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}
.red { background: #ff5f56; }
.yellow { background: #ffbd2e; }
.green { background: #27c93f; }

.terminal-title {
  margin-left: 16px;
  font-family: monospace;
  color: #6a6a7a;
  font-size: 0.9rem;
}

.terminal-body {
  padding: 24px;
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.95rem;
  line-height: 1.8;
  min-height: 250px;
}

.code-line {
  color: #a0a0b0;
  opacity: 0;
}

.tech-container.visible .code-line {
  animation: typeLine 0.1s forwards;
}

.tech-container.visible .delay-1 { animation-delay: 1s; }
.tech-container.visible .delay-2 { animation-delay: 2s; }
.tech-container.visible .delay-3 { animation-delay: 3s; }

.cmd {
  color: #4facfe;
  margin-right: 8px;
}

.success {
  color: #27c93f;
  font-weight: bold;
}

@keyframes typeLine {
  from { opacity: 0; }
  to { opacity: 1; }
}

.hologram-effect {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    rgba(0, 242, 254, 0.05) 3px,
    transparent 4px
  );
  pointer-events: none;
  animation: scanline 8s linear infinite;
  border-radius: 12px;
  transform: rotateY(15deg) rotateX(10deg);
}

@keyframes scanline {
  from { transform: rotateY(15deg) rotateX(10deg) translateY(-100%); }
  to { transform: rotateY(15deg) rotateX(10deg) translateY(100%); }
}

/* Info Side */
.badge {
  display: inline-block;
  padding: 6px 14px;
  background: rgba(118, 75, 162, 0.2);
  border: 1px solid rgba(118, 75, 162, 0.4);
  color: #d8b4fe;
  border-radius: 100px;
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 24px;
}

.title {
  font-size: clamp(2.5rem, 4vw, 3.5rem);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 24px;
}

.gradient-text {
  background: linear-gradient(135deg, #00f2fe 0%, #4facfe 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.description {
  font-size: 1.15rem;
  color: #a0a0b0;
  line-height: 1.6;
  margin-bottom: 40px;
}

.tech-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.tech-list-item {
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 1.1rem;
  color: #fff;
  opacity: 0;
  transform: translateX(-20px);
}

.tech-container.visible .tech-list-item {
  opacity: 1;
  transform: translateX(0);
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.check-icon {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: rgba(0, 242, 254, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #00f2fe;
}

.check-icon svg {
  width: 16px;
  height: 16px;
}
</style>
