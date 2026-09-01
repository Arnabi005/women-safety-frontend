// Web Audio API Emergency Siren Synthesizer

class EmergencySiren {
  constructor() {
    this.audioCtx = null;
    this.oscillator = null;
    this.gainNode = null;
    this.intervalId = null;
    this.isPlaying = false;
  }

  initContext() {
    if (!this.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.audioCtx = new AudioContext();
    }
    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  start() {
    if (this.isPlaying) return;

    try {
      this.initContext();

      // Create oscillator and gain
      this.oscillator = this.audioCtx.createOscillator();
      this.gainNode = this.audioCtx.createGain();

      this.oscillator.type = 'sawtooth'; // piercing siren wave
      this.gainNode.gain.setValueAtTime(0.4, this.audioCtx.currentTime);

      this.oscillator.connect(this.gainNode);
      this.gainNode.connect(this.audioCtx.destination);

      let isHigh = false;
      const baseFreq = 650;
      const highFreq = 980;

      this.oscillator.frequency.setValueAtTime(baseFreq, this.audioCtx.currentTime);
      this.oscillator.start();
      this.isPlaying = true;

      // Modulate frequency to simulate classic safety alarm siren
      this.intervalId = setInterval(() => {
        if (!this.audioCtx || !this.oscillator) return;
        const targetFreq = isHigh ? baseFreq : highFreq;
        this.oscillator.frequency.exponentialRampToValueAtTime(
          targetFreq,
          this.audioCtx.currentTime + 0.35
        );
        isHigh = !isHigh;
      }, 400);
    } catch (e) {
      console.error('[EmergencySiren] Audio playback error:', e);
    }
  }

  stop() {
    if (!this.isPlaying) return;

    try {
      if (this.intervalId) {
        clearInterval(this.intervalId);
        this.intervalId = null;
      }
      if (this.oscillator) {
        this.oscillator.stop();
        this.oscillator.disconnect();
        this.oscillator = null;
      }
      if (this.gainNode) {
        this.gainNode.disconnect();
        this.gainNode = null;
      }
    } catch (e) {
      console.warn('[EmergencySiren] Error stopping audio:', e);
    } finally {
      this.isPlaying = false;
    }
  }

  toggle() {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  getStatus() {
    return this.isPlaying;
  }
}

export const sirenPlayer = new EmergencySiren();
