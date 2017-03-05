// ==UserScript==
// @name        GL Dark Theme
// @namespace   gameloop.it
// @include     http://forum.gameloop.it/*
// @include     https://gameloop.it/*
// @description Tema scuro di flarum, pensato per gameloop.it
// @author      YouWon (https://github.com/YouWon)
// @copyright   COPYRIGHT (C) 2017 YouWon (https://github.com/YouWon). ALL RIGHTS RESERVED.
// @version     0.7
// @grant       none
// ==/UserScript==

/*

The MIT License (MIT)

COPYRIGHT (C) 2017 YouWon (https://github.com/YouWon). ALL RIGHTS RESERVED.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/

(function () {


  var isForum = false;
  try { if(document.getElementById('flarum-loading') !== null) isForum = true; } catch(e) { console.error('Eccezione 1: ' + e); }

  var nCustomLogoDefWidth = 180;

  // CONFIG //
  var bDarkTheme = true;
  var bCustomLogo = false;
  var nCustomLogoTheBest = 29;
  var bCustomLogoRandom = false;
  // FINE CONFIG //

  var arLogos = [];
  // FORUM
  if(isForum) {

    try { arLogos = [
      /* vuoto */  ["", 1, 0, 0, 0, false],  // url, scale, top, left, width, needsWhite
      /* 1 */  ["http://gameloop.it/forum/assets/files/2017-01-19/18:41:500-gamelooplogopng.png", 1, -2, 0, 0, true],
      /* 2 */  ["https://i.snag.gy/aYB2oQ.jpg", 5.5, 20, 1, 0, false],
      /* 3 */  ["http://gameloop.it/forum/assets/files/2017-01-19/18:57:280-game-loop-logopng.png", 1, 0, 0, 0, false],
      /* 4 */  ["http://i.imgur.com/A4zZixY.png", 2.2, 0, 0, 0, false],
      /* 5 */  ["http://i.imgur.com/66sJwbd.png", 2.7, -2, 0, 0, false],
      /* 6 */  ["http://i.imgur.com/eENUw36.png", 2.0, 0, 0, 0, false],
      /* 7 */  ["http://gameloop.it/forum/assets/files/2017-01-20/15:17:200-logo-inlinepng.png", 1.4, 0, 0, 0, false],
      /* 8 */  ["http://i68.tinypic.com/zkfwup.png", 1, 0, 0, 0, false],
      /* 9 */  ["http://forum.gameloop.it/assets/files/2017-01-21/21:03:170-logopng.png", 2.6, 19, 0, 0, false],
      /* 10 */ ["http://forum.gameloop.it/assets/files/2017-01-22/20:50:180-blocco-1ajpg.jpeg", 5.0, 53, 0, 0, false],
      /* 11 */ ["http://forum.gameloop.it/assets/files/2017-01-22/21:18:510-blocco-3jpg.jpeg", 2.5, 20, 0, 0, false],
      /* 12 */ ["http://forum.gameloop.it/assets/files/2017-01-24/10:03:470-img-20170123-215744png.png", 1, 0, 0, 0, false],
      /* 13 */ ["http://forum.gameloop.it/assets/files/2017-01-24/14:08:010-blocco5jpg.jpeg", 2.5, 20, 35, 0, false],
      /* 14 */ ["http://forum.gameloop.it/assets/files/2017-02-13/15:31:000-logo-with-loop-symbolpng.png", 7.0, 50, -95, 0, false],
      /* 15 */ ["http://forum.gameloop.it/assets/files/2017-02-13/16:35:110-loop-codejpg.jpeg", 1, 0, 0, 0, false],
      /* 16 */ ["http://forum.gameloop.it/assets/files/2017-02-20/15:42:180-senza-titolo-1png.png", 2.6, 0, 0, 0, false],
      /* 17 */ ["http://forum.gameloop.it/assets/files/2017-02-20/22:02:100-gamelooppng.png", 1, 0, 0, 0, false],
      /* 18 */ ["http://forum.gameloop.it/assets/files/2017-02-21/15:38:560-gamelooplogopng.png", 1, 0, 0, 0, false],
      /* 19 */ ["http://forum.gameloop.it/assets/files/2017-02-21/21:11:540-gameloop1stjpg.jpeg", 3.0, -2, 0, 0, false],
      /* 20 */ ["http://forum.gameloop.it/assets/files/2017-02-22/10:02:360-1-oo-shadowpng.png", 1.3, -2, 0, 0, true],
      /* 21 */ ["http://forum.gameloop.it/assets/files/2017-02-22/10:02:370-2-oo-shadowpng.png", 1, -2, 0, 0, true],
      /* 22 */ ["http://forum.gameloop.it/assets/files/2017-02-22/10:02:370-3-oo-shadowpng.png", 1.6, -2, 0, 0, true],
      /* 23 */ ["http://forum.gameloop.it/assets/files/2017-02-22/14:07:250-glooppng.png", 1, 0, 0, 0, false],
      /* 24 */ ["http://forum.gameloop.it/assets/files/2017-02-22/17:03:250-logo2png.png", 1, -2, 0, 0, true],
      /* 25 */ ["http://forum.gameloop.it/assets/files/2017-02-22/17:03:290-logo3png.png", 0.5, 0, -60, 0, false],
      /* 26 */ ["http://forum.gameloop.it/assets/files/2017-02-23/07:29:580-4-shadowpng.png", 1.5, 0, 0, 0, false],
      /* 27 */ ["http://forum.gameloop.it/assets/files/2017-02-23/07:29:580-5-shadowpng.png", 1.6, 0, 0, 0, false],
      /* 28 */ ["http://forum.gameloop.it/assets/files/2017-02-23/07:29:580-5-variant-shadowpng.png", 1.6, 0, 0, 0, false],
      /* 29 */ ["http://i66.tinypic.com/2i1yzx3.jpg", 1.2, -2, 0, 0, false],
      /* 30 */ ["http://forum.gameloop.it/assets/files/2017-02-23/13:45:560-fghyujkpng.png", 2.0, -1, 0, 0, false],
      /* vuoto */ ["", 1, 0, 0, 0, false]
    ]; } catch(e) { console.error('Eccezione 2: ' + e); arLogos = []; }

    console.debug('Rilevato forum');
    try {
      console.debug("arLogos.length: " + arLogos.length);
      for(var i = 0; i < arLogos.length; ++i) {
        if(arLogos[i].length != 6)
          console.error('ERRORE: in arLogos l\'array n.' + i + ' non ha il numero giusto di elementi. Correggere.');
      }
    }
    catch(e) { console.error('Eccezione 3: ' + e); }

    if(bCustomLogo) {
      if(bCustomLogoRandom) {
        try {
          do {
            nCustomLogoTheBest = Math.floor(Math.random() * arLogos.length);
          }
          while(arLogos[nCustomLogoTheBest][0].length === 0);
          console.debug('Logo random scelto: ' + nCustomLogoTheBest + ' - ' + arLogos[nCustomLogoTheBest][0]);
        }
        catch(e) { console.error('Eccezione 4: ' + e); }
      }
      try {
        document.body.getElementsByClassName('Header-logo')[0].src = arLogos[nCustomLogoTheBest][0];
      }
      catch(e) { console.error('Eccezione 5: ' + e); }
      try {
        var scale = arLogos[nCustomLogoTheBest][1];
        var top = arLogos[nCustomLogoTheBest][2];
        var left = arLogos[nCustomLogoTheBest][3];
        var width = arLogos[nCustomLogoTheBest][4];
        var needsWhite = arLogos[nCustomLogoTheBest][5];
        if(width === 0)
          width = nCustomLogoDefWidth;
        if((scale != 1) || (top !== 0) || (top !== 0) || needsWhite) {
          // creare un div per clippare l'immagine
          try {
            var imgtag = document.getElementById('home-link').innerHTML;
            document.getElementById('home-link').innerHTML = '<div id="Header-logo-div">' + imgtag + '</div>';
          }
          catch(e) { console.error('Eccezione 6: ' + e); }
          // creare uno stile per il nuovo div e modificare quello dell'immagine
          var s = document.createElement('style');
          s.type = 'text/css';
          var txt = '#Header-logo-div { ' +
            'width: ' + (width + 20) + 'px; min-width: ' + width + 'px; max-width: ' + width + 'px; ' +
            'text-align: center; overflow: hidden; ';
          if(needsWhite)
            txt += 'background-color: white; ';
          txt += '} .Header-logo { transform: scale(' + scale + '); position: relative; overflow: hidden; ';
          if(top !== 0)
            txt += 'top: ' + top + 'px; ';
          if(left !== 0)
            txt += 'left: ' + left + 'px; ';
          txt += '}';
          s.innerHTML = txt;
          var h = document.getElementsByTagName('head')[0];
          h.appendChild(s);
        }
      }
      catch(e) { console.error('Eccezione 7: ' + e); }
    }  // if(bCustomLogo) {

    if(!bDarkTheme)
      return;

    try {
      var s = document.createElement('style');
      s.type = 'text/css';
      // CSS FORUM
      var txt = `
        body { color: #e0e0e0; background: #202020; }
        .Hero { background: #232425 !important; }
        #content { background-color : #202020 !important; }
        .FormControl { background-color: #607080 !important; color: #e0e0e0 !important; }
        .FormControl::-moz-placeholder { color: #e0e0e0 !important; }
        .FormControl::-webkit-input-placeholder { color: #e0e0e0 !important; }
        .FormControl::-ms-input-placeholder { color: #e0e0e0 !important; }
        .FormControl:-moz-placeholder { color: #e0e0e0 !important; }
        .Search-input { background-color: transparent !important; color: #e0e0e0 !important; }
        .item-search ul { background: #202025 !important; }
        .item-search li { color: #e0e0e0 !important; }
        .DiscussionSearchResult-title { color: #6060e0 !important; }
        .DiscussionSearchResult.active { opacity: 1.0; color: red; }
        li.active a.hasIcon { color: #b0b0c0 !important; }
        .Button { background: transparent !important; }
        .Button--primary { background: #60b060 !important; color: #e0e0e0 !important; }
        .App-header { background-color: #202025 !important; }
        .Post-body p { color : #c0c0c0 !important; }
        .Post-body ul, .Post-body ol { color : #b0b0c0 !important; }
        .username { color: #e0b060 !important; }
        .Scrubber-handle { background: #303035 !important; }
        .Dropdown-menu { color: #b0b060 !important; }
        ul.Dropdown-menu { background: #252525 !important; }
        ul.Dropdown-menu > li > a { color: #b0b0b0 !important; }
        ul.Dropdown-menu > li > a:hover { color: #404040 !important; }
        .Dropdown-menu > li > button { color: #607080 !important; }
        a.PostPreview:hover { background: #d0d0d0 !important; }
        .App { background: #202020; }
        .DiscussionListItem-title { color: #d0d0d0 !important; }
        div.DiscussionListItem:hover { background-color: #202025 !important; }
        div.DiscussionListItem-content { background-color: #202025 !important; }
        div.DiscussionListItem.active { opacity: 0.9; }
        .DiscussionListItem .DiscussionListItem-relevantPosts .PostPreview { background: #202025 !important; }
        .DiscussionListItem:hover .DiscussionListItem-relevantPosts .PostPreview { background: #303035 !important; }
        blockquote { background-color: #303035 !important; color: #e0e0e0 !important; }
        .PostUser-avatar { background: #202020; }
        .Post-body pre { background: #202020; color: #e0e0e0; }
        .Post-body code { background: #5e5e5e; color: #e0e0e0; }
        .Modal-content { background: #303035; }
        .Modal-body { background: #303035; }
        .unread .DiscussionListItem-count { color: #5e7591; }
        .DiscussionList-loadMore { color: #303035; }
        .affix .DiscussionPage-list { background: #202025; }
        span.hljs-string, span.hljs-title { color: #dd6060; }
        span.hljs-built_in { color: #89c300; }
        li.item-notificationGrid > table.NotificationGrid { background: #252525 !important; }
        legend { color: #c0c0c0; }
        .iconpicker-item { color: #b0c0d0; }
        .iconpicker-item:hover { background-color: #2c2c55; }
      `;
      s.innerHTML = txt;
      var h = document.getElementsByTagName('head')[0];
      h.appendChild(s);
    }
    catch(e) { console.error('Eccezione 8: ' + e); }


    return;
  }  // if(isForum) {}


  var isBlog = false;

  try {
    if(document.getElementsByClassName('logo-image').length !== 0)
      isBlog = true;
  }
  catch(e) { console.error('Eccezione 9: ' + e); }


  if(isBlog && bDarkTheme) {


    console.debug('Rilevato blog');
    try {
      var s = document.createElement('style');
      s.type = 'text/css';
      // CSS BLOG
      var txt = `
        body.boxed { background: #202025; }
        .main-content { background: #303035; }
        .sidebar { background: #404045; }
        .main .sidebar::before, .sidebar .theiaStickySidebar::before { border-left: 1px solid #808080; }
        .main { background: #404045; }
        .main-featured { background: #404045; }
        .boxed .main-wrap { background: #202025; }
        div.content > a { color: #e0e0e0; }
        .gallery-title { background: #000a12; }
        .section-head { background: #000a12; }
        h1, h2, h3, h4, h5, h6 { color: #e0e0e0; }
        body { color: #d0d0d0; }
        .post-content blockquote { background: #202025; border-left: 3px solid #4040a0; }
        a { color: #a3d1ff; }
        .post-content a:hover { color: #a3d1ff; }
        .main-pagination .page-numbers, .main-pagination a { background: transparent; }
        .post-content h1, .post-content h2, .post-content h3, .post-content h4, .post-content h5, .post-content h6 { color: #d0d0d0; }
      `;
      s.innerHTML = txt;
      var h = document.getElementsByTagName('head')[0];
      h.appendChild(s);
    }
    catch(e) { console.error('Eccezione 10: ' + e); }

    return;
  }  // if(isBlog && bDarkTheme) {


})();
