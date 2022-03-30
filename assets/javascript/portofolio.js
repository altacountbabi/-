'use strict';

const ipgeolocation = 'https://api.ipgeolocation.io/ipgeo?apiKey=41646814faad4c2fbf040ec642fe4411';
const userAgentAPI = 'https://api.ipgeolocation.io/user-agent?apiKey=41646814faad4c2fbf040ec642fe4411';

const timeouts = [];

const mobileAndTabletCheck = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

$(document).ready(() => {
  const links = [
    {
      name: 'Github',
      link: 'https://github.com/altacountbabi',
    },
    {
      name: 'Twitter ',
      link: 'https://twitter.com/sus6942o',
    },
    {
      name: 'Reddit',
      link: 'https://www.reddit.com/user/Minecraftwt',
    },
    {
      name: 'Discord',
      link: 'https://discord.com/users/888436095929434152',
    },
    {
      name: 'Roblox',
      link: 'https://roblox.com/users/2026232597/profile',
    },
  ];

  for (let i in links) {
    let link = links[i];

    $('#marquee').append(`<a href="${link.link}" target="_BLANK">${link.name}</a>`);


    link = $('#marquee').children('a').last();

    if (i != links.length - 1) $('#marquee').append(' <img class="emoticon" src="assets/others/nerd.png"> ');
  }

  if (mobileAndTabletCheck()) {
    $('#background').replaceWith('<div id="background" style="background-image: url(assets/images/mobile-background.jpg);"></div>');

    app.shouldIgnoreVideo = true;
  }

  app.titleChanger([' ']);
  app.iconChanger(['assets/icons/image.jpg']);
});

if ($.cookie('videoTime')) {
  app.videoElement.currentTime = $.cookie('videoTime');
  app.audioElement.currentTime = $.cookie('videoTime');
}

document.addEventListener('contextmenu', (event) => {
  event.preventDefault();
});

document.onkeydown = function(e) {
  if(event.keyCode == 123) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
     return false;
  }
}

document.body.onkeyup = (event) => {
  if (event.keyCode == 32 && app.skippedIntro) {
    if (app.backgroundToggler) {
      app.videoElement.play();
      app.audioElement.play();
    } else {
      app.videoElement.pause();
      app.audioElement.pause();
    }

    return (app.backgroundToggler = !app.backgroundToggler);
  }
};

$('html').on('contextmenu', (event) => {
  const img = document.createElement('img');

  const trollfaceLight = app.skippedIntro ? '' : 'trollface-light';

  img.src = 'assets/others/trollface.jpg';
  img.width = 64;
  img.height = 64;
  img.alt = 'mykull.one';
  img.style = `position: absolute; left: ${event.pageX}px; top: ${event.pageY}px; z-index: 10`;
  img.className = `troll ${trollfaceLight}`;

  document.body.appendChild(img);
});

setInterval(() => {
  $('.troll').remove();
}, 600);

$('.skip').click(() => {
  skipIntro();
});

$.fn.extend({
  animateCss: function (animationName) {
    const animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

    this.addClass(`animated ${animationName}`).one(animationEnd, () => {
      $(this).removeClass(`animated ${animationName}`);
    });

    return this;
  },
});

function findProp(obj, prop, defval) {
  if (typeof defval == 'undefined') defval = null;
  prop = prop.split('.');
  for (var i = 0; i < prop.length; i++) {
     if (typeof obj[prop[i]] == 'undefined')
        return defval;
     obj = obj[prop[i]];
  }
  return obj;
}

const writeLine = (text, speed, timeout, callback) => {
  timeout = typeof timeout === 'number' ? timeout : [0, (callback = timeout)];

  const lineNumber = app.id !== 2 ? ++app.id : (app.id += 2);

  setTimeout(() => {
    const typed = new Typed(`#line${lineNumber}`, {
      strings: text,
      typeSpeed: speed,
      onComplete: callback,
    });
  }, timeout);
};

$.getJSON(ipgeolocation, (data) => {
  const ip = data.ip ? data.ip : usernames[Math.floor(Math.random() * usernames.length)];
  const country = data.country_name ? data.country_name : 'your country';
  
  writeLine(['Loading stolen code...', "Granting access to <span style='font-size: 14px; color: #06d;'>[unknown]</span>..."], 30, () => {
    if (app.skippedIntro) return;

    clearCursor();

    const usernames = ['user', 'dude'];

    writeLine([`Access granted! <span style='font-size: 14px; color: #0f0;'>[success]</span>`, `Hey there ${ip}. Also how is it in ${country}?`], 30, 500, () => {
      if (app.skippedIntro) return;

      clearCursor();

      writeLine([`<i style='color: #F62459'>Ratio.</i>`], 120, 500, () => {
        timeouts.push(
          setTimeout(() => {
            if (app.skippedIntro) return;

            clearCursor();

            setTimeout(() => {
              skipIntro();
            }, 500);
          }, 1000)
        );
      });
    });
  });
});

const skipIntro = () => {
  if (app.skippedIntro) return;

  app.skippedIntro = true;

  timeouts.forEach((timeout) => {
    clearTimeout(timeout);
  });

  $('.top-right').remove();

  $('#main').fadeOut(100, () => {
    $('#main').remove();

    $('#marquee').marquee({
      duration: 15000,
      gap: 420,
      delayBeforeStart: 1000,
      direction: 'left',
      duplicated: false,
    });

    setTimeout(() => {
      $('.brand-header').animateCss(app.effects[Math.floor(Math.random() * app.effects.length)]);
    }, 200);

    setTimeout(() => {
      const typed = new Typed('#brand', {
        strings: app.brandDescription,
        typeSpeed: 40,

        onComplete: () => {
          clearCursor();
        },
      });
    }, 1350);

    setTimeout(() => {
      if (!app.shouldIgnoreVideo) {
        app.videoElement.play();
        app.audioElement.play();
      }

      app.videoElement.addEventListener(
        'timeupdate',
        () => {
          $.cookie('videoTime', app.videoElement.currentTime, { expires: 1 });
        },
        false
      );

      $('.marquee-container').css('visibility', 'visible').hide().fadeIn(100);

      $('.marquee-container').animateCss('zoomIn');

      $('.container').fadeIn();

      $('.background').fadeIn(200, () => {
        if (!app.shouldIgnoreVideo) $('#audio').animate({ volume: app.musicVolume }, app.musicFadeIn);
      });
    }, 200);
  });
};

const clearCursor = () => {
  return $('span').siblings('.typed-cursor').css('opacity', '0');
};


