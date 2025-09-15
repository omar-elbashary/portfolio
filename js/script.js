     const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("fade-in");
            }
          });
        },
        { threshold: 0.1 }
      );

      document
        .querySelectorAll(".section-title, .card, .fade-target")
        .forEach((el) => {
          observer.observe(el);
        });