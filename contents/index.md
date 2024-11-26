---
layout: home
---

<script>
  async function homepageRedirect() {
    if (typeof window !== 'undefined') {
      const base_url = 'https://www.listofsha.me';
      try {
          const response = await fetch(window.location.protocol + '//pages.dev/cdn-cgi/trace');
          const responseText = await response.text();
          const countryCodeMatch = responseText.match(/loc=([A-Za-z0-9]+)/);
          if (countryCodeMatch && countryCodeMatch[1] == "VN") {
              window.location.href = base_url + '/';
          }
          else {
              window.location.href = base_url + '/en';
          }
      }
      catch (error) {
          window.location.href = base_url + '/en?error=true';
      }
    }
  }
  homepageRedirect();
</script>
