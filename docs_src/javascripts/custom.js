window.addEventListener("DOMContentLoaded", function () {
    const docsTab = document.querySelector("nav.md-tabs .md-tabs__item");
    const logo = document.querySelector(".md-header__button.md-logo");
    const title = document.querySelector(".md-header__title");
    const search = document.querySelector(".md-search");
    const moonIcon = document.querySelector(".md-header__option");

    if (docsTab && logo && title && search && moonIcon) {
        const docsLink = docsTab.querySelector("a.md-tabs__link");

        // Create Home & Docs buttons
        const homeButton = document.createElement("a");
        homeButton.classList.add("custom-home-tab");
        homeButton.textContent = "Home";

        homeButton.href = "https://github01.hclpnp.com/pages/SPARC-Development-Lab/Guard-Secret_Manager_Dev/";

        const docsButton = document.createElement("a");
        docsButton.classList.add("custom-docs-tab");
        docsButton.textContent = "Docs";
        docsButton.href = docsLink.href;

        // Wrap Home and Docs in a wrapper for spacing control
        const tabWrapper = document.createElement("div");
        tabWrapper.classList.add("custom-tab-wrapper");
        tabWrapper.appendChild(homeButton);
        tabWrapper.appendChild(docsButton);

        // Insert wrapper right after title
        title.insertAdjacentElement("afterend", tabWrapper);

        // GitHub button with symbol 🐙
        const githubButton = document.createElement("a");
        githubButton.classList.add("custom-github-tab");
        githubButton.innerHTML = "GitHub Docs";
        githubButton.href = "https://github01.hclpnp.com/SPARC-Development-Lab/Guard-Secret_Manager_Dev";
        githubButton.target = "_blank";

        // Insert GitHub before the moon icon
        moonIcon.insertAdjacentElement("beforebegin", githubButton);

        // Hide the original Docs tab
        docsTab.style.display = "none";
    }
});

