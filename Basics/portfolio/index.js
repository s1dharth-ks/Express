(function(){
  var b=document.querySelector('.burger'),l=document.getElementById('links');
  b.addEventListener('click',function(){var o=l.classList.toggle('open');b.setAttribute('aria-expanded',o)});
  l.addEventListener('click',function(e){if(e.target.tagName==='A'){l.classList.remove('open');b.setAttribute('aria-expanded','false')}});
  var t=document.getElementById('theme'),r=document.documentElement;
  t.addEventListener('click',function(){
    var d=r.getAttribute('data-theme')||(matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light');
    r.setAttribute('data-theme',d==='dark'?'light':'dark');
  });
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.15});
  document.querySelectorAll('.rv').forEach(function(n){io.observe(n)});

  /* live sensor trace, reacts to pointer */
  var c=document.getElementById('wave'),x=c.getContext('2d'),W,H,mx=.5,my=0,t=0;
  var still=matchMedia('(prefers-reduced-motion:reduce)').matches;
  function size(){var d=devicePixelRatio||1;W=c.clientWidth;H=c.clientHeight;c.width=W*d;c.height=H*d;x.setTransform(d,0,0,d,0,0)}
  size();addEventListener('resize',size);
  addEventListener('pointermove',function(e){mx=e.clientX/innerWidth;my=Math.min(1,Math.abs(e.movementX)/40+my*.9)});
  function draw(){
    x.clearRect(0,0,W,H);
    var s=getComputedStyle(document.documentElement),ink=s.getPropertyValue('--ink').trim(),ac=s.getPropertyValue('--accent').trim();
    function line(off,amp,col,w){
      x.beginPath();
      for(var i=0;i<=W;i+=4){
        var p=i/W,near=Math.exp(-Math.pow((p-mx)*5,2));
        var y=H/2+Math.sin(p*14+t*1.4+off)*amp*.35+Math.sin(p*5-t+off)*amp*.5
          +(Math.floor((p*20+t*.6)%7)===0?Math.sin(p*160)*amp*.5:0)+near*Math.sin(p*60+t*6)*(10+my*40);
        i?x.lineTo(i,y):x.moveTo(i,y);
      }
      x.strokeStyle=col;x.lineWidth=w;x.lineJoin='round';x.stroke();
    }
    x.globalAlpha=.35;line(2,34,ink,1.5);x.globalAlpha=1;line(0,40,ac,3);
    t+=.02;my*=.96;
    if(!still)requestAnimationFrame(draw);
  }
  draw();
})();