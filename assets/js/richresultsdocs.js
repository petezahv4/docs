document.addEventListener("DOMContentLoaded", function () {
    // Breadcrumb Structured Data
    const breadcrumbData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://docs.petezahgames.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Documentation",
            "item": "https://docs.petezahgames.com/docs-page.html"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Introduction",
            "item": "https://docs.petezahgames.com/docs-page.html#section-1"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "About",
            "item": "https://docs.petezahgames.com/docs-page.html#item-1-1"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "Websites",
            "item": "https://docs.petezahgames.com/docs-page.html#item-1-2"
          },
          {
            "@type": "ListItem",
            "position": 6,
            "name": "Services",
            "item": "https://docs.petezahgames.com/docs-page.html#item-1-3"
          },
          {
            "@type": "ListItem",
            "position": 7,
            "name": "Proxy",
            "item": "https://docs.petezahgames.com/docs-page.html#section-2"
          },
          {
            "@type": "ListItem",
            "position": 8,
            "name": "UV Static",
            "item": "https://docs.petezahgames.com/docs-page.html#item-2-1"
          },
          {
            "@type": "ListItem",
            "position": 9,
            "name": "How to make your own proxy",
            "item": "https://docs.petezahgames.com/docs-page.html#item-2-2"
          },
          {
            "@type": "ListItem",
            "position": 10,
            "name": "Titanium Network",
            "item": "https://docs.petezahgames.com/docs-page.html#item-2-3"
          },
          {
            "@type": "ListItem",
            "position": 11,
            "name": "Deployment",
            "item": "https://docs.petezahgames.com/docs-page.html#section-3"
          },
          {
            "@type": "ListItem",
            "position": 12,
            "name": "Custom Domain",
            "item": "https://docs.petezahgames.com/docs-page.html#item-3-1"
          },
          {
            "@type": "ListItem",
            "position": 13,
            "name": "Fastly",
            "item": "https://docs.petezahgames.com/docs-page.html#item-3-2"
          },
          {
            "@type": "ListItem",
            "position": 14,
            "name": "Firebase (web.app)",
            "item": "https://docs.petezahgames.com/docs-page.html#item-3-3"
          },
          {
            "@type": "ListItem",
            "position": 15,
            "name": "Cloudflare (pages.dev)",
            "item": "https://docs.petezahgames.com/docs-page.html#item-3-4"
          },
          {
            "@type": "ListItem",
            "position": 16,
            "name": "How to make your own website",
            "item": "https://docs.petezahgames.com/docs-page.html#section-4"
          },
          {
            "@type": "ListItem",
            "position": 17,
            "name": "How to obtain games",
            "item": "https://docs.petezahgames.com/docs-page.html#item-4-1"
          },
          {
            "@type": "ListItem",
            "position": 18,
            "name": "What to learn",
            "item": "https://docs.petezahgames.com/docs-page.html#item-4-2"
          },
          {
            "@type": "ListItem",
            "position": 19,
            "name": "How to deploy your app",
            "item": "https://docs.petezahgames.com/docs-page.html#item-4-3"
          },
          {
            "@type": "ListItem",
            "position": 20,
            "name": "Legal",
            "item": "https://docs.petezahgames.com/docs-page.html#item-4-4"
          },
          {
            "@type": "ListItem",
            "position": 21,
            "name": "Potential Monetization",
            "item": "https://docs.petezahgames.com/docs-page.html#item-4-5"
          },
          {
            "@type": "ListItem",
            "position": 22,
            "name": "FAQs",
            "item": "https://docs.petezahgames.com/docs-page.html#section-9"
          }
        ]
      };
  
    // How-To Structured Data
    const howToData = {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "How to Make Your Own Website",
      "description": "A comprehensive guide to making your own website, including obtaining games, learning skills, deployment, legal considerations, and monetization.",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://docs.petezahgames.com/docs-page.html#section-4"
      },
      "step": [
        {
          "@type": "HowToStep",
          "name": "How to Obtain Games",
          "text": "Learn how to find and acquire games for your website.",
          "url": "https://docs.petezahgames.com/docs-page.html#item-4-1"
        },
        {
          "@type": "HowToStep",
          "name": "What to Learn",
          "text": "Understand the skills and technologies necessary to create a website.",
          "url": "https://docs.petezahgames.com/docs-page.html#item-4-2"
        },
        {
          "@type": "HowToStep",
          "name": "How to Deploy Your App",
          "text": "Follow detailed steps to deploy your app, including hosting and configuration.",
          "url": "https://docs.petezahgames.com/docs-page.html#item-4-3"
        },
        {
          "@type": "HowToStep",
          "name": "Legal Considerations",
          "text": "Learn about the legal aspects of creating a website, such as copyrights and licensing.",
          "url": "https://docs.petezahgames.com/docs-page.html#item-4-4"
        },
        {
          "@type": "HowToStep",
          "name": "Potential Monetization",
          "text": "Explore options for monetizing your website, including ads and subscriptions.",
          "url": "https://docs.petezahgames.com/docs-page.html#item-4-5"
        }
      ]
    };
  
    // Function to Inject Structured Data
    function injectStructuredData(data) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(data);
      document.head.appendChild(script);
    }
  
    // Inject Breadcrumb and How-To Data
    injectStructuredData(breadcrumbData);
    injectStructuredData(howToData);
  });
  