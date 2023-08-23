module.exports = function (context, options) {
  const fbScript = `
    <!-- Messenger Chat Plugin Code -->
    <div id="fb-root"></div>

    <!-- Your Chat Plugin code -->
    <div id="fb-customer-chat" class="fb-customerchat">
    </div>

    <script>
      var chatbox = document.getElementById('fb-customer-chat');
      chatbox.setAttribute("page_id", "102680188078240");
      chatbox.setAttribute("attribution", "biz_inbox");
    </script>

    <!-- Your SDK code -->
    <script>
      function init() {
        window.fbAsyncInit = function() {
          FB.init({
            xfbml            : true,
            version          : 'v17.0'
          });
        };

        (function(d, s, id) {
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) return;
          js = d.createElement(s); js.id = id;
          js.src = 'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js';
          fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
      }

      try {
        const isProd = window.location.hostname.includes('www.ezfrontend.com')
        if (isProd) init()
      } catch(error) {
        console.log('failed to init fb chat', error)
      }
    </script>
  `;

  return {
    name: "add-fb-chat",
    injectHtmlTags() {
      return {
        postBodyTags: [fbScript],
      };
    },
  };
};
