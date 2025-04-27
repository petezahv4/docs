document.addEventListener("DOMContentLoaded", function () {
    // Define Article Rich Results Structured Data
    const articleRichResults = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "PeteZah Games Documentation",
      "description": "Everything you need to understand PeteZah Games. Includes sections on Proxy setup, Deployment, Website creation, and FAQs.",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://docs.petezahgames.com/"
      },
      "author": {
        "@type": "Person",
        "name": "PeteZah",
        "url": "https://petezahgames.com"
      },
      "publisher": {
        "@type": "Organization",
        "name": "PeteZah Games",
        "logo": {
          "@type": "ImageObject",
          "url": "https://docs.petezahgames.com/assets/logo.png"
        }
      },
      "datePublished": "2025-04-27",
      "dateModified": "2025-04-27",
      "articleSection": [
        {
          "@type": "ArticleSection",
          "name": "FAQs",
          "description": "Frequently asked questions and answers about PeteZah Games and Docs.",
          "url": "https://docs.petezahgames.com/docs-page.html#section-9"
        }
      ]
    };
  
    // Define FAQ Rich Results Structured Data
    const faqRichResults = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "I see 'TypeError: Failed to fetch' what does that mean?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "This error message typically indicates that the proxy server is unable to connect to the requested website. This can happen for a variety of reasons, such as the website being down, the proxy server being overloaded, network issues, or the proxy server being banned by whatever blocker you have. If you encounter this error, try refreshing the page or waiting a few minutes before attempting to access the website again. If that fails, contact us to have it fixed."
          }
        },
        {
          "@type": "Question",
          "name": "Why do I see a 404 page when I loaded the proxy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "This is just a weird quirk of Ultraviolet. You just need to try again. PeteZah has fixed this by making his 404 pages a loading screen that refreshes."
          }
        },
        {
          "@type": "Question",
          "name": "How do I request for support?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For PeteZah you will want to join his Discord server for support: https://discord.gg/petezah"
          }
        },
        {
          "@type": "Question",
          "name": "How do I request for new games?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For PeteZah, you fill out the Google Form next to his game library: https://docs.google.com/forms/d/e/1FAIpQLSdFcrjRodnn92yuBUtw2czQyoN4L8UpnUsJVDnVO5QT5xZNcQ/viewform"
          }
        },
        {
          "@type": "Question",
          "name": "Aren't you two rivals?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Technically yes, but we are chill."
          }
        },
        {
          "@type": "Question",
          "name": "What are the other games?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "They are just links that one of the authors made. The person I originally got the source code from for the websites has wished I don't list their names."
          }
        },
        {
          "@type": "Question",
          "name": "What is bandwidth quota exceeded?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "This error is unique to Firebase as they have a 10 gigabyte bandwidth limit for websites. You will just need to wait for next month for the website to restore."
          }
        }
      ]
    };
  
    // Create a <script> element for Article Rich Results
    const articleScript = document.createElement("script");
    articleScript.type = "application/ld+json";
    articleScript.textContent = JSON.stringify(articleRichResults);
  
    // Create a <script> element for FAQ Rich Results
    const faqScript = document.createElement("script");
    faqScript.type = "application/ld+json";
    faqScript.textContent = JSON.stringify(faqRichResults);
  
    // Inject the <script> elements into the <head> of the page
    document.head.appendChild(articleScript);
    document.head.appendChild(faqScript);
  });
  