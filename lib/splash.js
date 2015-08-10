
import dom from 'vd';

export default function splash({ name, logo, active, total, channels, iframe }){
  let div = dom('.splash',
    
    !iframe && dom('.image-block',
      dom('.background-image-holder',
        dom('.content',
          dom('<img src="https://slack-files.com/files-pub/T04469Z4C-F045ARN79-ada3ac7112/clean-white.png">')
        )
      )
    ),

    !iframe && dom('.container',
      dom('.primary-cta', 
        dom('p.title', 'Real-time Smash 4 Discussion'),
        dom('p.description', 'Discuss match-ups, get advice, pick-up games, make new friends.'),
        dom('p.status',
          active
            ? [
              dom('b.total', total), ' users are registered so far.'
              
            ]
            : [dom('b.active', active), ' users online now of ',
              dom('b.total', total), ' registered.']
        ),
        dom('p.helper', 'What character(s) do you use?'),
        dom('form',
          // channel selection when there are multiple
          channels && dom('ul.channel-options',
            channels.map(channel => {
              return dom('li',
                dom('input type=checkbox', { id: 'chan-' + channel, name: channel }),
                dom('label', { 'for': 'chan-' + channel }, channel)
              );
            })
          ),
          dom('input.form-item type=email placeholder="email address to send your invite" '),
          dom('button.loading', 'Request an Invite'),
          dom('p.login',
            dom('span', 'Already have an account? '),
            dom('<a href="https://readytofight.slack.com">', 'Login'),
            dom('span', ' or '),
            dom('<a href="https://readytofight.slack.com/apps">', 'Download the app')
          )
        )      
      ),
      dom('p.hide', 'stop looking at me')                 
    ),

    style({ logo, active, iframe }),
    // xxx: single build
    dom('script src=https://cdn.socket.io/socket.io-1.3.2.js'),
    dom('script src=/assets/superagent.js'),
    dom('script src=/assets/client.js')
  );
  return div;
}

const pink = '#E01563';

function style({ logo, active, iframe } = {}){
  var css = dom.style();

  css.add('.splash', {
    'width': '100%',
    'height': '100%',
    'position': 'relative',
    'clear': 'both',
    'margin': '0 auto',
    'max-width': '1600px',
    'background': '#ecf0f3',
    'font-family': '"Helvetica Neue", Helvetica, Arial'
  });

  css.add('body', {
    'margin': '0',
    'height': '100%'
  });

  css.add('a', {
    'text-decoration': 'none',
    'font-weight': 'bold',
    'color': '#e74c3c'
  });

  css.add('.hide', {
    'display': 'none'
  });

  css.add('header', {
    'position': 'absolute',
    'top': '0',
    'left': '0',
    'right': '0',
    'height': '80px',
    'z-index': '1',
    'background': '#fff'
  });

  css.add('header img', {
    'width': '85px',
    'position': 'relative',
    'top': '10px'
  });

  css.add('header a', {
    'float': 'right',
    'background-color': '#34495e',
    'text-decoration': 'none',
    'border-radius': '50px',
    'color': '#fff',
    'padding': '10px 30px',
    'font-size': '14px',
    'position': 'relative',
    'top': '21px'
  });

  css.add('header a:hover', {
    'background-color': '#16a085',
    'transition': '.2s ease-in'
  });

  css.add('.container', {
    'position': 'relative',
    'z-index': '2',
    'margin-right': 'auto',
    'margin-left': 'auto',
    'padding-left': '15px',
    'padding-right': '15px'
  });

  css
    .media('(min-width: 768px)')
    .add('.container', {
      'width': '750px;'
  });

  css
    .media('(min-width: 992px)')
    .add('.container', {
      'width': '970px;'
  });

  css
    .media('(min-width: 1200px)')
    .add('.container', {
      'width': '1170px;'
  });

  css.add('.primary-cta', {
    'position': 'relative',
    'width': '100%',
    'float': 'left',
    'margin-top': '50px'
  });

  css
    .media('(min-width: 768px)')
    .add('.primary-cta', {
      'left': '41.66666667%',
      'width': '58.33333333%'
  });

  css
    .media('(min-width: 992px)')
    .add('.primary-cta', {
      'left': '58.33333333%',
      'width': '41.66666667%'
  });

  css.add('body, html', {
    'margin': '0',
    'padding': '0',
    'background': '#ecf0f3',
  });

  if (iframe) {

    css.add('.splash', {
      'box-sizing': 'border-box',
      'padding': '10px'
    });
  }

  css.add('.head', {
    'margin-bottom': '40px'
  });

  css.add('.logos', {
    'position': 'relative',
    'margin-bottom': '40px'
  });

  if (!iframe) {
    css.add('.logo', {
      'width': '48px',
      'height': '48px',
      'display': 'inline-block',
      'background-size': 'cover'
    });

    css.add('.logo.slack', {
      'background-image': 'url(/assets/slack.svg)'
    });

    if (logo) {
      let pw = 10; // '+' width
      let lp = 30; // logos separation

      css.add('.logo.org::after', {
        'position': 'absolute',
        'display': 'block',
        'content': '"+"',
        'top': '15px',
        'left': '0',
        'width': '300px',
        'text-align': 'center',
        'color': '#D6D6D6',
        'font': '15px Helvetica Neue'
      });

      css.add('.logo.org', {
        'background-image': `url(${logo})`,
        'margin-right': `${lp + pw + lp}px`
      });
    }
  }

  css.add('p', {
    'font-size': iframe ? '12px' : '15px',
    'margin': iframe ? '0 0 5px' : '5px 0'
  });

  if (iframe) {
    css.add('p.status', {
      'font-size': '11px'
    });
  }

  css.add('p.status', {
    'padding': '10px',
    'margin-top': '12px',
    'margin-bottom': '30px',
    'background-color': 'DFE4E8',
    'text-align': 'center'
  });

  css.add('p.title', {
    'font-size': '25px',
    'font-weight': 'bold'
  });

  css.add('p.description', {
    'font-size': '16px',
  });

  css.add('p.helper', {
    'margin-bottom': '-15px'
  });

  css.add('.image-block', {
    'float': 'left',
    'position': 'absolute',
    'height': '100%',
    'top': '0',
  });

  css
    .media('(max-width: 767px)')
    .add('.image-block', {
      'position': 'relative',
      'width': '100%;',
      'height': '300px',
      'margin-bottom': '40px'

  });

  css
    .media('(min-width: 768px)')
    .add('.image-block', {
      'width': '33.33333333%;'
  });

  css
    .media('(min-width: 992px)')
    .add('.image-block', {
      'width': '50%;'
  });

  css.add('.background-image-holder', {
    'background': 'url("/assets/falcon.jpg") 50% 50%',
    'height': '100%',
    'text-align': 'center',
    'background-size': 'cover'
  });

  css.add('.background-image-holder .content', {
    'z-index': '5',
    'position': 'relative',
    'width': '50%',
    'margin': '0 auto',
    'top': '50%',
    '-webkit-transform': 'translateY(-50%)',
    '-ms-transform': 'translateY(-50%)',
    'transform': 'translateY(-50%)'
  });

  css.add('.background-image-holder .content img', {
    'width': '100%'
  });

  css.add('.background-image-holder:after', {
    'content': '""',
    'position': 'absolute',
    'top': '0',
    'left': '0',
    'right': '0',
    'bottom': '0',
    'z-index': '4',
    'background': 'rgba(0,0,0,.5)'
  });

  css.add('select', {
    'background': 'none'
  });

  css.add('.channel-options', {
    'list-style-type': 'none',
    'margin': '0',
    'height': '270px',
    'overflow': 'auto',
    'border': '1px solid #ddd',
    'padding': '0',
    'padding-left': '11px',
    'text-align': 'center',
    'padding-top': '13px'
  });

  css.add('.channel-options li', {
    'display' : 'inline-block'
  });

  css.add('.channel-options input[type=checkbox]', {
    'display': 'none'
  });

  css.add('.channel-options input[type=checkbox] + label', {
    'width': '108px',
    'height': '113px',
    'float': 'left',
    'margin-bottom': '10px',
    'margin-right': '10px',
    'background-color': 'red',
    'background-size': 'cover',
    'text-indent': '-9999px',
    'filter': 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\'><filter id=\'grayscale\'><feColorMatrix type=\'matrix\' values=\'0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0\'/></filter></svg>#grayscale")',
    'cursor': 'pointer',
    '-webkit-filter': 'grayscale(100%)'
  });

  css.add('.channel-options input[type=checkbox] + label:hover', {
    'filter': 'none',
    '-webkit-filter': 'grayscale(50%)',
    'transition': '.2s ease-in'
  });

  css.add('.channel-options input[type=checkbox] + label:active', {
    'opacity': '.2'
  });

  css.add('.channel-options input[type=checkbox]:checked + label', {
    'filter': 'none',
    '-webkit-filter': 'grayscale(0%)',
    'transition': '.2s ease-in'
  });

  css.add('li:nth-child(1) label', {
    'background-image': 'url("/assets/bowser.jpg")'
  });

  css.add('li:nth-child(2) label', {
    'background-image': 'url("/assets/bowser-jr.jpg")'
  });

  css.add('li:nth-child(3) label', {
    'background-image': 'url("/assets/captain-falcon.jpg")'
  });

  css.add('li:nth-child(4) label', {
    'background-image': 'url("/assets/charizard.jpg")'
  });

  css.add('li:nth-child(5) label', {
    'background-image': 'url("/assets/dark-pit.jpg")'
  });

  css.add('li:nth-child(6) label', {
    'background-image': 'url("/assets/diddy-kong.jpg")'
  });

  css.add('li:nth-child(7) label', {
    'background-image': 'url("/assets/donkey-kong.jpg")'
  });

  css.add('li:nth-child(8) label', {
    'background-image': 'url("/assets/dr-mario.jpg")'
  });

  css.add('li:nth-child(9) label', {
    'background-image': 'url("/assets/duck-hunt.jpg")'
  });

  css.add('li:nth-child(10) label', {
    'background-image': 'url("/assets/falco.jpg")'
  });

  css.add('li:nth-child(11) label', {
    'background-image': 'url("/assets/fox.jpg")'
  });

  css.add('li:nth-child(12) label', {
    'background-image': 'url("/assets/ganondorf.jpg")'
  });

  css.add('li:nth-child(13) label', {
    'background-image': 'url("/assets/greninja.jpg")'
  });

  css.add('li:nth-child(14) label', {
    'background-image': 'url("/assets/ike.jpg")'
  });

  css.add('li:nth-child(15) label', {
    'background-image': 'url("/assets/jigglypuff.jpg")'
  });

  css.add('li:nth-child(16) label', {
    'background-image': 'url("/assets/dedede.jpg")'
  });

  css.add('li:nth-child(17) label', {
    'background-image': 'url("/assets/kirby.jpg")'
  });

  css.add('li:nth-child(18) label', {
    'background-image': 'url("/assets/link.jpg")'
  });

  css.add('li:nth-child(19) label', {
    'background-image': 'url("/assets/little-mac.jpg")'
  });

  css.add('li:nth-child(20) label', {
    'background-image': 'url("/assets/lucario.jpg")'
  });

  css.add('li:nth-child(21) label', {
    'background-image': 'url("/assets/lucas.jpg")'
  });

  css.add('li:nth-child(22) label', {
    'background-image': 'url("/assets/lucina.jpg")'
  });

  css.add('li:nth-child(23) label', {
    'background-image': 'url("/assets/luigi.jpg")'
  });

  css.add('li:nth-child(24) label', {
    'background-image': 'url("/assets/mario.jpg")'
  });

  css.add('li:nth-child(25) label', {
    'background-image': 'url("/assets/marth.jpg")'
  });

  css.add('li:nth-child(26) label', {
    'background-image': 'url("/assets/mega-man.jpg")'
  });

  css.add('li:nth-child(27) label', {
    'background-image': 'url("/assets/meta-knight.jpg")'
  });

  css.add('li:nth-child(28) label', {
    'background-image': 'url("/assets/mewtwo.jpg")'
  });

  css.add('li:nth-child(29) label', {
    'background-image': 'url("/assets/mii-brawler.jpg")'
  });

  css.add('li:nth-child(30) label', {
    'background-image': 'url("/assets/mii-gunner.jpg")'
  });

  css.add('li:nth-child(31) label', {
    'background-image': 'url("/assets/mii-swordfighter.jpg")'
  });

  css.add('li:nth-child(32) label', {
    'background-image': 'url("/assets/game-watch.jpg")'
  });

  css.add('li:nth-child(33) label', {
    'background-image': 'url("/assets/ness.jpg")'
  });

  css.add('li:nth-child(34) label', {
    'background-image': 'url("/assets/olimar.jpg")'
  });

  css.add('li:nth-child(35) label', {
    'background-image': 'url("/assets/pac-man.jpg")'
  });

  css.add('li:nth-child(36) label', {
    'background-image': 'url("/assets/palutena.jpg")'
  });

  css.add('li:nth-child(37) label', {
    'background-image': 'url("/assets/peach.jpg")'
  });

  css.add('li:nth-child(38) label', {
    'background-image': 'url("/assets/pikachu.jpg")'
  });

  css.add('li:nth-child(39) label', {
    'background-image': 'url("/assets/pit.jpg")'
  });

  css.add('li:nth-child(40) label', {
    'background-image': 'url("/assets/rob.jpg")'
  });

  css.add('li:nth-child(41) label', {
    'background-image': 'url("/assets/robin.jpg")'
  });

  css.add('li:nth-child(42) label', {
    'background-image': 'url("/assets/rosalina.jpg")'
  });

  css.add('li:nth-child(43) label', {
    'background-image': 'url("/assets/roy.jpg")'
  });

  css.add('li:nth-child(44) label', {
    'background-image': 'url("/assets/ryu.jpg")'
  });

  css.add('li:nth-child(45) label', {
    'background-image': 'url("/assets/samus.jpg")'
  });

  css.add('li:nth-child(46) label', {
    'background-image': 'url("/assets/sheik.jpg")'
  });

  css.add('li:nth-child(47) label', {
    'background-image': 'url("/assets/shulk.jpg")'
  });

  css.add('li:nth-child(48) label', {
    'background-image': 'url("/assets/sonic.jpg")'
  });

  css.add('li:nth-child(49) label', {
    'background-image': 'url("/assets/toon-link.jpg")'
  });

  css.add('li:nth-child(50) label', {
    'background-image': 'url("/assets/villager.jpg")'
  });

  css.add('li:nth-child(51) label', {
    'background-image': 'url("/assets/wario.jpg")'
  });

  css.add('li:nth-child(52) label', {
    'background-image': 'url("/assets/wii-fit-trainer.jpg")'
  });

  css.add('li:nth-child(53) label', {
    'background-image': 'url("/assets/yoshi.jpg")'
  });

  css.add('li:nth-child(54) label', {
    'background-image': 'url("/assets/zelda.jpg")'
  });

  css.add('li:nth-child(55) label', {
    'background-image': 'url("/assets/zss.jpg")'
  });
  
  css.add('.form-item', {
    'height': '54px',
    'line-height': '48px',
    'padding-left': '16px',
    'border': '1px solid #D4D4D4',
    'width': '100%',
    'margin-top': '10px', 
    'background': '#fff',
    'border-radius': '3px',
    'font-size': '16px',
    'color': '#888888'
  });

  css.add('button', {
    'height': '54px',
    'line-height': '48px',
    'text-align': 'center',
    'background': '#16a085',
    'border': '1px solid #a68b7c',
    'font-size': '18px',
    'padding': '0 36px',
    'color': '#fff',
    'margin-top': '20px',
    'margin-bottom': '10px',
    'width': '100%'
  });
  

  css.add('button', {
    'color': '#fff',
    'border-width': 0,
    'cursor': 'pointer',
    'appearence': 'none',
    '-webkit-appearence': 'none',
    'padding': '0',
    'outline': '0',
    'transition': 'background-color 150ms ease-in, color 150ms ease-in'
  });

  css.add('button.loading', {
    'pointer-events': 'none'
  });

  css.add('button:disabled', {
    'color': '#9B9B9B',
    'background-color': '#D6D6D6',
    'cursor': 'default',
    'pointer-events': 'none'
  });

  css.add('button.error', {
    'background-color': '#c0392b'
  });

  css.add('button.success:disabled', {
    'color': '#fff',
    'background-color': '#34495e'
  });

  css.add('button:not(.disabled):active', {
    'background-color': '#7A002F',
  });

  css.add('button:hover', {
    'background-color': '#13866F'
  });

  css.add('b', {
    'transition': 'transform 150ms ease-in'
  });

  css.add('b.grow', {
    'transform': 'scale(1.3)'
  });

  css.add('form', {
    'margin-top': iframe ? '10px' : '20px',
    'margin-bottom': '20px'
  });

  css.add('input', {
    'color': '#9B9B9B',
    'border': '1px solid #D6D6D6'
  });

  if (iframe) {
    css.add('input, button', {
      'font-size': '11px',
      'height': '28px',
      'line-height': '28px'
    });
  }

  css.add('input:focus', {
    'color': '#666',
    'border-color': '#999',
    'outline': '0'
  });

  if (active) {
    css.add('.active', {
      'color': '#1797EC'
    });
  }

  if (!iframe) {
    css.add('footer', {
      'color': '#D6D6D6',
      'font-size': '11px',
      'margin': '200px auto 0',
      'width': '300px',
      'text-align': 'center',
    });

    css.add('footer a', {
      'color': '#9B9B9B',
      'text-decoration': 'none',
      'border-bottom': '1px solid #9B9B9B'
    });

    css.add('footer a:hover', {
      'color': '#fff',
      'background-color': '#9B9B9B'
    });
  }

  return css;
}
