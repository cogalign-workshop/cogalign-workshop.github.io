(function () {
  const navTargets = new Map([
    ["/", "#overview"],
    ["/cfp/", "#cfp"],
    ["/dates/", "#dates"],
    ["/speakers/", "#speakers"],
    ["/schedule/", "#schedule"],
    ["/organizers/", "#organizers"],
    ["/diversity/", "#diversity"],
    ["/logistics/", "#logistics"],
    ["/ethics/", "#ethics"],
    ["/faq/", "#faq"],
  ]);

  const normalizePath = (href) => {
    try {
      const url = new URL(href, window.location.origin);
      if (url.origin !== window.location.origin) return null;
      return url.pathname.endsWith("/") ? url.pathname : `${url.pathname}/`;
    } catch (_error) {
      return null;
    }
  };

  document.querySelectorAll("#navbar a.nav-link, .workshop-jump-nav a").forEach((link) => {
    const rawHref = link.getAttribute("href") || "";
    const path = rawHref.startsWith("#") ? null : normalizePath(rawHref);
    const hash = rawHref.startsWith("#") ? rawHref : navTargets.get(path);

    if (!hash) return;

    link.setAttribute("href", `/${hash}`);

    link.addEventListener("click", (event) => {
      const target = document.querySelector(hash);
      if (!target) return;

      event.preventDefault();
      history.pushState(null, "", hash);
      target.scrollIntoView({ behavior: "smooth", block: "start" });

      const collapsibleNav = document.querySelector("#navbarNav.show");
      const toggler = document.querySelector(".navbar-toggler");
      if (collapsibleNav && toggler) toggler.click();
    });
  });
})();
