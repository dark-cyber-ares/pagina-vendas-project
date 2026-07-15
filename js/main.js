import { animate, inView } from "https://cdn.jsdelivr.net/npm/motion@11.11.17/+esm";

document.addEventListener("DOMContentLoaded", () => {
  // Garantir que a classe js-enabled esteja ativa caso não tenha sido pelo script inline
  if (!document.documentElement.classList.contains("js-enabled")) {
    document.documentElement.classList.add("js-enabled");
  }

  // -------------------------------------------------------------
  // 1. Animações de Entrada do Hero Section (Entradas Suaves)
  // -------------------------------------------------------------
  animate(
    ".hero-badge",
    { opacity: [0, 1], y: [20, 0] },
    { duration: 0.6, ease: "easeOut" }
  );

  animate(
    ".hero-title",
    { opacity: [0, 1], y: [20, 0] },
    { duration: 0.8, delay: 0.15, ease: "easeOut" }
  );

  animate(
    ".hero-desc",
    { opacity: [0, 1], y: [20, 0] },
    { duration: 0.8, delay: 0.3, ease: "easeOut" }
  );

  animate(
    ".hero-actions",
    { opacity: [0, 1], y: [20, 0] },
    { duration: 0.8, delay: 0.45, ease: "easeOut" }
  );

  // -------------------------------------------------------------
  // 2. Animações de Revelação por Scroll (inView)
  // -------------------------------------------------------------
  inView(".animate-on-scroll", ({ target }) => {
    animate(
      target,
      { opacity: [0, 1], y: [30, 0] },
      { duration: 0.7, ease: "easeOut" }
    );
    // Retorna uma função vazia para rodar apenas uma vez quando entra na tela
    return () => {};
  });

  // -------------------------------------------------------------
  // 3. Exibição Dinâmica do Sticky CTA com Scroll
  // -------------------------------------------------------------
  const stickyCta = document.getElementById("sticky-cta");
  if (stickyCta) {
    let ticking = false;

    window.addEventListener("scroll", () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.scrollY > 600) {
            stickyCta.classList.remove("translate-y-24", "opacity-0");
            stickyCta.classList.add("translate-y-0", "opacity-100");
          } else {
            stickyCta.classList.add("translate-y-24", "opacity-0");
            stickyCta.classList.remove("translate-y-0", "opacity-100");
          }
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  // -------------------------------------------------------------
  // 4. Efeito 3D de Paralaxe nas Imagens de Relógios (Mouse Move)
  // -------------------------------------------------------------
  let lastMove = 0;
  window.addEventListener("mousemove", (e) => {
    const now = Date.now();
    // Throttle para melhorar a performance (limita execução a cada 16ms / ~60 FPS)
    if (now - lastMove < 16) return;
    lastMove = now;

    const watches = document.querySelectorAll('img[alt*="Face"], img[alt*="Watch"]');
    const x = (window.innerWidth / 2 - e.clientX) / 45;
    const y = (window.innerHeight / 2 - e.clientY) / 45;

    watches.forEach(watch => {
      watch.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${-y}deg)`;
    });
  }, { passive: true });
});
