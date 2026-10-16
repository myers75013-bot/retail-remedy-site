function openCouponModal(d){
  couponModalData=d;
  var label=d.walletLabel||((d.product_name||d.title||"Coupon")+" @ "+d.store);
  trackEvent("coupon_reveal",{product_id:d.product_id||null,product_name:d.product_name||null,store:d.store,category:d.category||null,coupon_code:d.code,price:(typeof d.price==="number"?d.price:null),source:d.source,detail:"Opened coupon card pop-out for "+(d.product_name||d.title||"coupon")+" at "+d.store});
  if(d.logRetailer){ trackEvent("retailer_click",{product_id:d.product_id||null,product_name:d.product_name||null,store:d.store,category:d.category||null,coupon_code:d.code,price:(typeof d.price==="number"?d.price:null),source:d.source,detail:"Clicked through toward "+d.store+" via coupon pop-out ("+(d.product_name||d.title||"coupon")+")"}); }
  addToWallet(label, d.code, d.desc||d.title||"", (typeof walletExtra==="function"?walletExtra(d):null));
  trackEvent("coupon_clip",{product_id:d.product_id||null,product_name:d.product_name||null,store:d.store,category:d.category||null,coupon_code:d.code,source:d.source,detail:"Clipped to wallet from coupon pop-out: "+label});
  document.getElementById("couponModalStore").textContent=d.store;
  var prodEl=document.getElementById("couponModalProduct");
  prodEl.textContent=d.product_name&&d.product_name!==(d.title||"")?d.product_name:"";
  prodEl.style.display=prodEl.textContent?"block":"none";
  document.getElementById("couponModalTitle").textContent=d.title||d.desc||"Coupon";
  var descEl=document.getElementById("couponModalDesc");
  var descText=[d.desc&&d.desc!==(d.title||"")?d.desc:null, d.note||null, d.localNote||null, d.compat?("Fits: "+d.compat):null, d.meta||null].filter(Boolean).join(" • ");
  descEl.textContent=descText; descEl.style.display=descText?"block":"none";
  var siEl=document.getElementById("couponModalStoreInfo");
  var sinfo=storeInfo(d.store);
  if(siEl){
    if(sinfo){
      siEl.innerHTML='<span>📍 '+esc(sinfo.address)+'</span><span>🕐 '+esc(sinfo.hours)+'</span><span>📞 '+esc(sinfo.phone)+(sinfo.web?' · 🌐 '+esc(sinfo.web):"")+'</span><span class="store-info-sample">'+(sinfo.local?"Sample local store info":"Sample store info")+'</span>';
      siEl.style.display="flex";
    } else { siEl.innerHTML=""; siEl.style.display="none"; }
  }
  var priceEl=document.getElementById("couponModalPrice");
  if(typeof d.price==="number"){
    var saveAmt=(typeof d.list==="number"&&d.list>d.price)?(d.list-d.price):null;
    priceEl.innerHTML="<span style='font-size:13px;color:var(--muted);font-weight:700;'>You pay</span> <b>"+money(d.price)+"</b>"+(typeof d.list==="number"?"<s>"+money(d.list)+"</s>":"")+(typeof d.save==="number"?"<span class='save-pill'>Save "+d.save+"%"+(saveAmt?" • "+money(saveAmt)+" off":"")+"</span>":"");
    priceEl.style.display="flex";
  } else if(typeof d.save==="number"){
    priceEl.innerHTML="<span class='save-pill'>Save "+d.save+"%</span>"; priceEl.style.display="flex";
  } else { priceEl.innerHTML=""; priceEl.style.display="none"; }
  document.getElementById("couponModalCode").textContent=d.code;
  var copyBtn=document.getElementById("couponModalCopy");
  if(isMemberCode(d.code)){ copyBtn.disabled=true; copyBtn.textContent="No Code Needed"; }
  else { copyBtn.disabled=false; copyBtn.textContent="Copy Code"; }
  document.getElementById("couponModalClipped").textContent="✓ Clipped to your Coupon Wallet — find it anytime via My Coupon Wallet";
  if(typeof syncCouponModalCartBtn==="function") syncCouponModalCartBtn();
  document.getElementById("couponModalBackdrop").classList.add("open");
  document.body.style.overflow="hidden";
  copyBtn.focus();
}
function closeCouponModal(){
  document.getElementById("couponModalBackdrop").classList.remove("open");
  document.body.style.overflow="";
  couponModalData=null;
}
(function(){
  var bd=document.getElementById("couponModalBackdrop"); if(!bd) return;
  document.getElementById("couponModalClose").onclick=function(){ closeCouponModal(); };
  document.getElementById("couponModalDone").onclick=function(){ closeCouponModal(); };
  bd.addEventListener("click",function(e){ if(e.target===bd) closeCouponModal(); });
  document.getElementById("couponModalWalletBtn").onclick=function(){ closeCouponModal(); document.getElementById("walletPanel").classList.add("open"); };
  var cartBtn=document.getElementById("couponModalCartBtn");
  if(cartBtn) cartBtn.onclick=function(){
    var d=couponModalData; if(!d) return;
    var item=itemFromModalData(d);
    if(isItemInCart(item)){ closeCouponModal(); document.getElementById("projectPanel").classList.add("open"); return; }
    var added=addToProject(item,{viaCart:true,source:(d.source||"coupon_modal")+"_cart"});
    if(added){
      cartBtn.textContent="✓ Added to Cart!";
      cartBtn.classList.add("in-cart");
      if(typeof syncCouponModalCartBtn==="function") syncCouponModalCartBtn(true);
      setTimeout(function(){ if(typeof syncCouponModalCartBtn==="function") syncCouponModalCartBtn(); },1600);
    }
  };
  var cartLink=document.getElementById("couponModalCartLink");
  if(cartLink) cartLink.onclick=function(){ closeCouponModal(); document.getElementById("projectPanel").classList.add("open"); };
  document.getElementById("couponModalCopy").onclick=function(){
    var d=couponModalData; if(!d||isMemberCode(d.code)) return;
    if(navigator.clipboard) navigator.clipboard.writeText(d.code).catch(function(){});
    trackEvent("coupon_copy",{product_id:d.product_id||null,product_name:d.product_name||null,store:d.store,category:d.category||null,coupon_code:d.code,source:d.source,detail:"Copied code from coupon card pop-out at "+d.store});
    this.textContent="✓ Copied!";
    showToast("Code "+d.code+" copied — paste at "+d.store+" checkout");
  };
  document.addEventListener("keydown",function(e){ if(e.key==="Escape"&&bd.classList.contains("open")) closeCouponModal(); });
})();

/* ===== Normalized coupon items, Order Online, checkout view, My Project ===== */
function itemFromOffer(o){
  return {store:o.store,code:o.code,title:o.desc,desc:o.desc,note:o.note,product_id:currentProduct.id,product_name:currentProduct.name,category:currentProduct.cat,price:o.price,list:o.list,save:o.save,use:o.use,ship:o.ship||null,url:o.url||null,exp:o.exp||null,terms:o.terms||null,qr:o.qr||null,walletLabel:currentProduct.name+" @ "+o.store};
}
function itemFromCoupon(c){
  return {store:c.store,code:c.code,title:c.title,desc:c.desc,product_name:c.title,category:c.cat,use:c.use,ship:c.ship||null,url:c.url||null,exp:c.exp||null,terms:c.terms||null,qr:c.qr||null,walletLabel:c.store+" — "+c.title};
}
function walletExtra(d){
  var use=d.use||deriveUse(d.store||"",(d.desc||"")+" "+(d.note||""),!!d.localNote);
  var ship=d.ship||null;
  if(!ship&&use!=="instore"&&d.store) ship=shipFor(d.store);
  return {store:d.store||null,title:d.title||"",product_name:d.product_name||null,product_id:d.product_id||null,category:d.category||null,use:use,ship:ship,url:d.url||(d.store?orderUrlFor(d.store):null),price:(typeof d.price==="number"?d.price:null),list:(typeof d.list==="number"?d.list:null),save:(typeof d.save==="number"?d.save:null),exp:d.exp||null,terms:d.terms||null,qr:d.qr||null};
}
function findWalletEntry(item){
  var label=item.walletLabel||item.label;
  for(var i=0;i<wallet.length;i++){ if(wallet[i].code===item.code&&wallet[i].label===label) return wallet[i]; }
  return null;
}
function clipItem(item,source){
  var entry=findWalletEntry(item);
  if(entry) return entry;
  entry=addToWallet(item.walletLabel||item.label,item.code,item.desc||item.title||"",walletExtra(item));
  trackEvent("coupon_clip",{product_id:item.product_id||null,product_name:item.product_name||null,store:item.store,category:item.category||null,coupon_code:item.code,source:source,detail:"Clipped to wallet: "+(item.walletLabel||item.label)});
  return entry;
}
/* Order Online: copy the code FIRST, log the sponsor click-through
   (timestamp, store, coupon), then open the retailer's site in a new
   tab. URL is a sample placeholder (the retailer's public site) until
   the sponsor's real landing/affiliate URL drops into the same field. */
function orderOnline(item,source){
  var entry=clipItem(item,source||"order_online");
  if(!isMemberCode(entry.code)&&navigator.clipboard){ try{ navigator.clipboard.writeText(entry.code).catch(function(){}); }catch(e){} }
  trackEvent("retailer_click",{product_id:entry.product_id||null,product_name:entry.product_name||null,store:entry.store,category:entry.category||null,coupon_code:entry.code,price:(typeof entry.price==="number"?entry.price:null),source:source||"order_online",detail:"Order Online click-through to "+entry.store+" for "+entry.label+" — code copied for paste at their checkout"});
  trackEvent("sponsor_click",{store:entry.store,coupon_code:entry.code,source:source||"order_online",detail:"Sponsor click-through (Order Online) → "+(entry.url||"")+" for "+entry.label});
  if(entry.url) window.open(entry.url,"_blank","noopener");
  showToast(isMemberCode(entry.code)?("Opening "+entry.store+" — member price, no code needed"):("✓ Code "+entry.code+" copied — paste it at "+entry.store+"'s checkout"));
  renderWallet();
}
/* ===== Checkout view — one big screen for standing at a register ===== */
var checkoutCtx=null;
function openCheckoutView(item,opts){
  opts=opts||{};
  var entry=opts.entry||clipItem(item,opts.source||"checkout_view");
  checkoutCtx={entry:entry,run:opts.run||null,source:opts.source||"checkout_view"};
  trackEvent("coupon_reveal",{product_id:entry.product_id||null,product_name:entry.product_name||null,store:entry.store,category:entry.category||null,coupon_code:entry.code,price:(typeof entry.price==="number"?entry.price:null),source:checkoutCtx.source,detail:"Opened checkout view for "+entry.label+" at "+(entry.store||"")});
  trackEvent("checkout_view",{product_id:entry.product_id||null,product_name:entry.product_name||null,store:entry.store,category:entry.category||null,coupon_code:entry.code,price:(typeof entry.price==="number"?entry.price:null),source:checkoutCtx.source,detail:"Checkout view (show at register) for "+entry.label+(checkoutCtx.run?(" — run at "+checkoutCtx.run.store+", coupon "+(checkoutCtx.run.idx+1)+" of "+checkoutCtx.run.items.length):"")});
  renderCheckout();
  document.getElementById("checkoutBackdrop").classList.add("open");
  document.body.style.overflow="hidden";
}
function renderCheckoutQR(w){
  var wrap=document.getElementById("checkoutQrWrap");
  var img=document.getElementById("checkoutQrImg");
  var label=document.getElementById("checkoutQrLabel");
  wrap.style.display="none";
  if(!w.qr) return; /* No QR on the record → big text code only. Never invent one. */
  if(typeof w.qr==="string"){ img.src=w.qr; label.textContent="Ask the cashier to scan"; wrap.style.display="block"; return; }
  if(w.qr.value&&typeof QRCode!=="undefined"&&QRCode.toDataURL){
    QRCode.toDataURL(w.qr.value,{width:220,margin:1},function(err,url){
      if(err||!url||!checkoutCtx){ wrap.style.display="none"; return; }
      img.src=url;
      label.textContent=w.qr.sample?"Sample QR — encodes the sample code text":"Ask the cashier to scan";
      wrap.style.display="block";
    });
  }
}
function renderCheckout(){
  var ctx=checkoutCtx; if(!ctx) return; var w=ctx.entry;
  document.getElementById("checkoutMain").style.display="block";
  document.getElementById("checkoutSummary").style.display="none";
  var prog=document.getElementById("checkoutProgress");
  if(ctx.run){ prog.style.display="block"; prog.textContent="Coupon "+(ctx.run.idx+1)+" of "+ctx.run.items.length+" at "+ctx.run.store; }
  else { prog.style.display="none"; }
  document.getElementById("checkoutStore").textContent=w.store||"Store";
  var offerText=[(w.product_name&&w.product_name!==(w.title||""))?w.product_name:null,(w.title||w.desc||"")].filter(Boolean).join(" — ");
  document.getElementById("checkoutOffer").textContent=offerText||w.label;
  var member=isMemberCode(w.code);
  document.getElementById("checkoutCode").textContent=member?"No code needed":w.code;
  document.getElementById("checkoutCopy").style.display=member?"none":"block";
  renderCheckoutQR(w);
  document.getElementById("checkoutMeta").innerHTML=(typeof w.price==="number"?("You pay <b>"+money(w.price)+"</b>"+(typeof w.list==="number"?" <s>"+money(w.list)+"</s>":"")+(typeof w.save==="number"?' <span class="save-pill">Save '+w.save+"%</span>":"")):"")+(w.exp?('<div style="margin-top:6px;">Ends '+esc(w.exp)+'</div>'):"");
  document.getElementById("checkoutTerms").textContent=w.terms||"Sample coupon — the store's checkout total is final.";
  var usedBtn=document.getElementById("checkoutUsed");
  if(w.used){ usedBtn.disabled=true; usedBtn.textContent="✓ Already used"; } else { usedBtn.disabled=false; usedBtn.textContent="✓ Mark as Used"; }
  var nav=document.getElementById("checkoutNav");
  if(ctx.run){ nav.style.display="flex"; document.getElementById("checkoutBack").disabled=ctx.run.idx===0; }
  else { nav.style.display="none"; }
}
function closeCheckoutView(){
  document.getElementById("checkoutBackdrop").classList.remove("open");
  document.body.style.overflow="";
  checkoutCtx=null;
}
function runNextIndex(run,from){
  for(var i=from+1;i<run.items.length;i++){ if(!run.items[i].used) return i; }
  return -1;
}
function showRunItem(idx){
  var run=checkoutCtx.run; run.idx=idx; checkoutCtx.entry=run.items[idx];
  trackEvent("checkout_view",{store:run.store,coupon_code:run.items[idx].code,source:"checkout_run",detail:"Checkout view in run at "+run.store+": coupon "+(idx+1)+" of "+run.items.length+" ("+run.items[idx].label+")"});
  renderCheckout();
}
function finishRun(){
  var run=checkoutCtx.run; if(!run) return;
  trackEvent("checkout_run_complete",{store:run.store,source:"checkout_run",detail:"Finished checkout run at "+run.store+": "+run.usedCount+" of "+run.items.length+" coupons used"+(run.saved>0?(", saved ~"+money(run.saved)):"")});
  document.getElementById("checkoutMain").style.display="none";
  document.getElementById("checkoutSummary").style.display="block";
  document.getElementById("checkoutSummaryStore").textContent=run.store;
  document.getElementById("checkoutSummaryText").textContent="You used "+run.usedCount+" coupon"+(run.usedCount===1?"":"s")+" at "+run.store+(run.saved>0?(" and saved about "+money(run.saved)+"."):" 🎉");
  checkoutCtx.run=null;
  renderWallet();
}
function markCheckoutUsed(){
  var ctx=checkoutCtx; if(!ctx||ctx.entry.used) return;
  var w=ctx.entry; w.used=true; w.usedAt=new Date().toISOString();
  trackEvent("coupon_used",{product_id:w.product_id||null,product_name:w.product_name||null,store:w.store,category:w.category||null,coupon_code:w.code,source:ctx.source,detail:"Marked coupon used at checkout: "+w.label});
  renderWallet();
  if(ctx.run){
    ctx.run.usedCount++;
    if(typeof w.price==="number"&&typeof w.list==="number"&&w.list>w.price) ctx.run.saved+=(w.list-w.price);
    trackEvent("checkout_run_step",{store:ctx.run.store,coupon_code:w.code,source:"checkout_run",detail:"Checkout run at "+ctx.run.store+": used coupon "+(ctx.run.idx+1)+" of "+ctx.run.items.length+" ("+w.label+") — advancing"});
    var n=runNextIndex(ctx.run,ctx.run.idx);
    if(n===-1) finishRun(); else showRunItem(n);
  } else {
    closeCheckoutView();
    showToast("✓ Marked used — nice save at "+(w.store||"the store")+"!");
  }
}
/* One store's checkout run: ONLY that store's unused, unexpired coupons */
function startCheckoutRun(store){
  var items=wallet.filter(function(w){ return !w.used&&w.store===store&&w.use!=="online"&&!isExpiredItem(w); });
  if(!items.length){ showToast("No coupons to run at "+store); return; }
  document.getElementById("walletPanel").classList.remove("open");
  trackEvent("checkout_run_start",{store:store,source:"wallet",detail:"Started checkout run at "+store+" — "+items.length+" coupon"+(items.length>1?"s":"")+" (other stores untouched)"});
  openCheckoutView(items[0],{source:"wallet_run",entry:items[0],run:{store:store,items:items,idx:0,usedCount:0,saved:0}});
}
(function(){
  var bd=document.getElementById("checkoutBackdrop"); if(!bd) return;
  document.getElementById("checkoutClose").onclick=function(){ closeCheckoutView(); };
  document.getElementById("checkoutSummaryDone").onclick=function(){ closeCheckoutView(); };
  bd.addEventListener("click",function(e){ if(e.target===bd) closeCheckoutView(); });
  document.getElementById("checkoutCopy").onclick=function(){
    var w=checkoutCtx&&checkoutCtx.entry; if(!w||isMemberCode(w.code)) return;
    if(navigator.clipboard) navigator.clipboard.writeText(w.code).catch(function(){});
    trackEvent("coupon_copy",{product_id:w.product_id||null,product_name:w.product_name||null,store:w.store,category:w.category||null,coupon_code:w.code,source:"checkout_view",detail:"Copied code from checkout view at "+w.store});
    var b=this; b.textContent="✓ Copied!"; setTimeout(function(){ b.textContent="Copy Code"; },1600);
    showToast("Code "+w.code+" copied");
  };
  document.getElementById("checkoutUsed").onclick=markCheckoutUsed;
  document.getElementById("checkoutNext").onclick=function(){
    var ctx=checkoutCtx; if(!ctx||!ctx.run) return;
    var n=runNextIndex(ctx.run,ctx.run.idx);
    trackEvent("checkout_run_step",{store:ctx.run.store,coupon_code:ctx.entry.code,source:"checkout_run",detail:"Checkout run at "+ctx.run.store+": skipped coupon "+(ctx.run.idx+1)+" of "+ctx.run.items.length+" ("+ctx.entry.label+")"});
    if(n===-1){ if(ctx.run.usedCount>0) finishRun(); else closeCheckoutView(); }
    else showRunItem(n);
  };
  document.getElementById("checkoutBack").onclick=function(){
    var ctx=checkoutCtx; if(!ctx||!ctx.run||ctx.run.idx===0) return;
    showRunItem(ctx.run.idx-1);
  };
  document.addEventListener("keydown",function(e){ if(e.key==="Escape"&&bd.classList.contains("open")) closeCheckoutView(); });
  var fab=document.getElementById("walletFab");
  if(fab) fab.onclick=function(){ document.getElementById("walletPanel").classList.toggle("open"); };
})();
/* ===== My Project — items for one job, grouped by vendor =====
   Each vendor ships its own items on its own route; Retail Remedy
   never ships, fulfills, or takes payment. A vendor WITH a direct
   order connection gets "Send Order to [Vendor]" (the vendor receives
   the order and ships it); a vendor without one gets "Order Online".
   SAMPLE: the one direct-connection vendor below is a demo flag only —
   its button demonstrates the flow and sends nothing anywhere. */
var VENDOR_CONNECTIONS={"Home Depot":{direct:true,sample:true}};
var project=[];
var currentProjectName="Untitled project";
var savedProjects=[];
var LS_CURRENT="rr_current_project_v1";
var LS_SAVED="rr_saved_projects_v1";
function lsGet(k){ try{ var v=window.localStorage.getItem(k); return v?JSON.parse(v):null; }catch(e){ return null; } }
function lsSet(k,v){ try{ window.localStorage.setItem(k,JSON.stringify(v)); }catch(e){} }
/* ===== Price snapshots — internal data plumbing (nothing visitor-facing) =====
   Builds the dated price-point series behind the future shopper
   membership's price history. On page load the ENTIRE catalog (every
   product/part x store offer) is recorded once per calendar day
   (America/Chicago), deduped: a same-day revisit adds nothing.
   Snapshots persist in this browser's localStorage (key below) because
   the in-memory event log clears on refresh — the same device-storage
   pattern as saved projects. The full series rides along in the
   internal tracking export: buildExport() adds `price_snapshots`
   (count + rows) to the JSON, and exportCSVText() appends a
   price_snapshots section after the events table.
   Every current record is flagged data:"SAMPLE" — these are the
   catalog's labeled sample prices; when live affiliate/sponsor prices
   replace them, new snapshots carry data:"LIVE" (see
   catalogSnapshotRows). No charts, no membership UI, nothing new
   renders on the page — data plumbing only. */
var LS_PRICE_SNAPSHOTS="rr_price_snapshots_v1";
var PRICE_SNAPSHOT_SEED=[{"date":"2026-10-14","product_id":"towels","product_name":"Paper Towels — 12 Pack","store":"Walmart","price":14.97,"list_price":19.99,"coupon_code":"PAPER5","discount_pct":25,"data":"SAMPLE"},{"date":"2026-10-14","product_id":"towels","product_name":"Paper Towels — 12 Pack","store":"Target","price":15.49,"list_price":18.99,"coupon_code":"TARGETHOME","discount_pct":18,"data":"SAMPLE"},{"date":"2026-10-14","product_id":"towels","product_name":"Paper Towels — 12 Pack","store":"Costco","price":16.99,"list_price":21.99,"coupon_code":null,"discount_pct":23,"data":"SAMPLE"},{"date":"2026-10-14","product_id":"towels","product_name":"Paper Towels — 12 Pack","store":"Amazon","price":17.24,"list_price":22,"coupon_code":"SUBSAVE","discount_pct":22,"data":"SAMPLE"},{"date":"2026-10-14","product_id":"towels","product_name":"Paper Towels — 12 Pack","store":"CVS","price":18.99,"list_price":21.99,"coupon_code":"CARE10","discount_pct":14,"data":"SAMPLE"},{"date":"2026-10-14","product_id":"tide","product_name":"Tide Liquid Detergent — 92 oz","store":"Target","price":11.94,"list_price":15.99,"coupon_code":"TIDE3","discount_pct":25,"data":"SAMPLE"},{"date":"2026-10-14","product_id":"tide","product_name":"Tide Liquid Detergent — 92 oz","store":"Walmart","price":12.97,"list_price":15.99,"coupon_code":"LAUNDRY2","discount_pct":19,"data":"SAMPLE"},{"date":"2026-10-14","product_id":"tide","product_name":"Tide Liquid Detergent — 92 oz","store":"Amazon","price":13.49,"list_price":16.99,"coupon_code":"CLIP15","discount_pct":21,"data":"SAMPLE"},{"date":"2026-10-14","product_id":"tide","product_name":"Tide Liquid Detergent — 92 oz","store":"Kroger","price":13.99,"list_price":15.99,"coupon_code":"DIGITAL3","discount_pct":13,"data":"SAMPLE"},{"date":"2026-10-14","product_id":"earbuds","product_name":"Wireless Noise-Cancelling Earbuds","store":"Amazon","price":49.99,"list_price":89.99,"coupon_code":"AUDIO20","discount_pct":44,"data":"SAMPLE"},{"date":"2026-10-14","product_id":"earbuds","product_name":"Wireless Noise-Cancelling Earbuds","store":"Best Buy","price":54.99,"list_price":89.99,"coupon_code":"BBTECH10","discount_pct":39,"data":"SAMPLE"},{"date":"2026-10-14","product_id":"earbuds","product_name":"Wireless Noise-Cancelling Earbuds","store":"Walmart","price":57,"list_price":84,"coupon_code":"TECH57","discount_pct":32,"data":"SAMPLE"},{"date":"2026-10-14","product_id":"earbuds","product_name":"Wireless Noise-Cancelling Earbuds","store":"Target","price":59.99,"list_price":79.99,"coupon_code":"CIRCLE15","discount_pct":25,"data":"SAMPLE"},{"date":"2026-10-14","product_id":"coffee","product_name":"Organic Coffee Beans — 2 lb Whole Bean","store":"Costco","price":16.49,"list_price":24.99,"coupon_code":null,"discount_pct":34,"data":"SAMPLE"},{"date":"2026-10-14","product_id":"coffee","product_name":"Organic Coffee Beans — 2 lb Whole Bean","store":"Amazon","price":17.99,"list_price":26.99,"coupon_code":"COFFEE15","discount_pct":33,"data":"SAMPLE"},{"date":"2026-10-14","product_id":"coffee","product_name":"Organic Coffee Beans — 2 lb Whole Bean","store":"Target","price":18.99,"list_price":24.99,"coupon_code":"PANTRY10","discount_pct":24,"data":"SAMPLE"},{"date":"2026-10-14","product_id":"coffee","product_name":"Organic Coffee Beans — 2 lb Whole Bean","store":"Walmart","price":19.47,"list_price":25.47,"coupon_code":"BREW3","discount_pct":24,"data":"SAMPLE"},{"date":"2026-10-14","product_id":"shoes","product_name":"Running Shoes — Everyday Trainer","store":"Nike.com","price":67.5,"list_price":90,"coupon_code":"MOVE25","discount_pct":25,"data":"SAMPLE"},{"date":"2026-10-14","product_id":"shoes","product_name":"Running Shoes — Everyday Trainer","store":"Dick's Sporting Goods","price":69.99,"list_price":90,"coupon_code":"SPORT10","discount_pct":22,"data":"SAMPLE"},{"date":"2026-10-14","product_id":"shoes","product_name":"Running Shoes — Everyday Trainer","store":"Amazon","price":71.2,"list_price":95,"coupon_code":"RUN20","discount_pct":25,"data":"SAMPLE"},{"date":"2026-10-14","product_id":"shoes","product_name":"Running Shoes — Everyday Trainer","store":"Foot Locker","price":74.99,"list_price":90,"coupon_code":"KICKS15","discount_pct":17,"data":"SAMPLE"},{"date":"2026-10-14","product_id":"fryer","product_name":"Air Fryer — 5 Quart Digital","store":"Walmart","price":59,"list_price":99,"coupon_code":"HOME40","discount_pct":40,"data":"SAMPLE"},{"date":"2026-10-14","product_id":"fryer","product_name":"Air Fryer — 5 Quart Digital","store":"Target","price":64.99,"list_price":99.99,"coupon_code":"KITCHEN20","discount_pct":35,"data":"SAMPLE"},{"date":"2026-10-14","product_id":"fryer","product_name":"Air Fryer — 5 Quart Digital","store":"Best Buy","price":69.99,"list_price":109.99,"coupon_code":"APPLIANCE10","discount_pct":36,"data":"SAMPLE"},{"date":"2026-10-14","product_id":"fryer","product_name":"Air Fryer — 5 Quart Digital","store":"Amazon","price":72.99,"list_price":119.99,"coupon_code":"AIRFRY25","discount_pct":39,"data":"SAMPLE"},{"date":"2026-10-14","product_id":"phone-case","product_name":"Phone Case — Shockproof MagSafe","store":"Amazon","price":12.99,"list_price":24.99,"coupon_code":"CASE48","discount_pct":48,"data":"SAMPLE"},{"date":"2026-10-14","product_id":"phone-case","product_name":"Phone Case — Shockproof MagSafe","store":"Walmart","price":13.97,"list_price":22.97,"coupon_code":"PHONECASE","discount_pct":39,"data":"SAMPLE"},{"date":"2026-10-14","product_id":"phone-case","product_name":"Phone Case — Shockproof MagSafe","store":"Target","price":16.99,"list_price":24.99,"coupon_code":"CIRCLE15","discount_pct":32,"data":"SAMPLE"},{"date":"2026-10-14","product_id":"phone-case","product_name":"Phone Case — Shockproof MagSafe","store":"Best Buy","price":19.99,"list_price":29.99,"coupon_code":"BBTECH10","discount_pct":33,"data":"SAMPLE"},{"date":"2026-10-14","product_id":"screen-protector","product_name":"Screen Protector — Tempered Glass 3-Pack","store":"Amazon","price":7.95,"list_price":15.99,"coupon_code":"GLASS50","discount_pct":50,"data":"SAMPLE"},{"date":"2026-10-14","product_id":"screen-protector","product_name":"Screen Protector — Tempered Glass 3-Pack","store":"Walmart","price":8.88,"list_price":14.88,"coupon_code":"SCREEN4","discount_pct":40,"data":"SAMPLE"},{"date":"2026-10-14","product_id":"screen-protector","product_name":"Screen Protector — Tempered Glass 3-Pack","store":"Target","price":11.99,"list_price":17.99,"coupon_code":"TECHACC","discount_pct":33,"data":"SAMPLE"},{"date":"2026-10-14","product_id":"screen-protector","product_name":"Screen Protector — Tempered Glass 3-Pack","store":"Best Buy","price":14.99,"list_price":21.99,"coupon_code":"BBTECH10","discount_pct":32,"data":"SAMPLE"},{"date":"2026-10-14","product_id":"usb-c-cable","product_name":"USB-C Charging Cable — 6ft Braided 100W","store":"Amazon","price":9.99,"list_price":19.99,"coupon_code":"CABLE50","discount_pct":50,"data":"SAMPLE"},{"date":"2026-10-14","product_id":"usb-c-cable","product_name":"USB-C Charging Cable — 6ft Braided 100W","store":"Walmart","price":11.47,"list_price":18.47,"coupon_code":"CHARGE3","discount_pct":38,"data":"SAMPLE"},{"date":"2026-10-14","product_id":"usb-c-cable","product_name":"USB-C Charging Cable — 6ft Braided 100W","store":"Best Buy","price":13.99,"list_price":22.99,"coupon_code":"BBTECH10","discount_pct":39,"data":"SAMPLE"},{"date":"2026-10-14","product_id":"usb-c-cable","product_name":"USB-C Charging Cable — 6ft Braided 100W","store":"Target","price":14.99,"list_price":19.99,"coupon_code":"CIRCLE15","discount_pct":25,"data":"SAMPLE"},{"date":"2026-10-14","product_id":"laptop-charger","product_name":"Laptop Charger — USB-C 65W Universal","store":"Amazon","price":24.99,"list_price":42.99,"coupon_code":"LAPTOP42","discount_pct":42,"data":"SAMPLE"},{"date":"2026-10-14","product_id":"laptop-charger","product_name":"Laptop Charger — USB-C 65W Universal","store":"Best Buy","price":29.99,"list_price":49.99,"coupon_code":"BBTECH10","discount_pct":40,"data":"SAMPLE"},{"date":"2026-10-14","product_id":"laptop-charger","product_name":"Laptop Charger — USB-C 65W Universal","store":"Walmart","price":32.97,"list_price":44.97,"coupon_code":"POWER5","discount_pct":27,"data":"SAMPLE"},{"date":"2026-10-14","product_id":"laptop-charger","product_name":"Laptop Charger — USB-C 65W Universal","store":"Target","price":34.99,"list_price":44.99,"coupon_code":"TECHACC","discount_pct":22,"data":"SAMPLE"},{"date":"2026-10-14","product_id":"earbud-parts","product_name":"Earbud Tips & Replacement Charging Case","store":"Amazon","price":11.99,"list_price":21.99,"coupon_code":"TIPS45","discount_pct":45,"data":"SAMPLE"},{"date":"2026-10-14","product_id":"earbud-parts","product_name":"Earbud Tips & Replacement Charging Case","store":"Walmart","price":13.88,"list_price":19.88,"coupon_code":"AUDIO3","discount_pct":30,"data":"SAMPLE"},{"date":"2026-10-14","product_id":"earbud-parts","product_name":"Earbud Tips & Replacement Charging Case","store":"Best Buy","price":16.99,"list_price":24.99,"coupon_code":"BBTECH10","discount_pct":32,"data":"SAMPLE"},{"date":"2026-10-14","product_id":"earbud-parts","product_name":"Earbud Tips & Replacement Charging Case","store":"Target","price":17.99,"list_price":24.99,"coupon_code":"CIRCLE15","discount_pct":28,"data":"SAMPLE"},{"date":"2026-10-14","product_id":"airfryer-parts","product_name":"Air Fryer Replacement Basket, Tray & Liners","store":"Amazon","price":18.99,"list_price":32.99,"coupon_code":"FRYERPART","discount_pct":42,"data":"SAMPLE"},{"date":"2026-10-14","product_id":"airfryer-parts","product_name":"Air Fryer Replacement Basket, Tray & Liners","store":"Walmart","price":19.97,"list_price":29.97,"coupon_code":"HOME40","discount_pct":33,"data":"SAMPLE"},{"date":"2026-10-14","product_id":"airfryer-parts","product_name":"Air Fryer Replacement Basket, Tray & Liners","store":"Target","price":22.99,"list_price":32.99,"coupon_code":"KITCHEN20","discount_pct":30,"data":"SAMPLE"},{"date":"2026-10-14","product_id":"airfryer-parts","product_name":"Air Fryer Replacement Basket, Tray & Liners","store":"Best Buy","price":24.99,"list_price":34.99,"coupon_code":"APPLIANCE10","discount_pct":29,"data":"SAMPLE"},{"date":"2026-10-14","product_id":"coffee-parts","product_name":"Coffee Maker Water Filters, Descaler & Carafe","store":"Amazon","price":14.95,"list_price":26.95,"coupon_code":"COFFEEPART","discount_pct":45,"data":"SAMPLE"},{"date":"2026-10-14","product_id":"coffee-parts","product_name":"Coffee Maker Water Filters, Descaler & Carafe","store":"Walmart","price":16.47,"list_price":24.47,"coupon_code":"BREW3","discount_pct":33,"data":"SAMPLE"},{"date":"2026-10-14","product_id":"coffee-parts","product_name":"Coffee Maker Water Filters, Descaler & Carafe","store":"Target","price":17.99,"list_price":25.99,"coupon_code":"PANTRY10","discount_pct":31,"data":"SAMPLE"},{"date":"2026-10-14","product_id":"coffee-parts","product_name":"Coffee Maker Water Filters, Descaler & Carafe","store":"Costco","price":19.99,"list_price":29.99,"coupon_code":null,"discount_pct":33,"data":"SAMPLE"},{"date":"2026-10-14","product_id":"vacuum-parts","product_name":"Vacuum Filters, Bags & Belt — HEPA Replacement Kit","store":"Amazon","price":16.99,"list_price":29.99,"coupon_code":"VAC43","discount_pct":43,"data":"SAMPLE"},{"date":"2026-10-14","product_id":"vacuum-parts","product_name":"Vacuum Filters, Bags & Belt — HEPA Replacement Kit","store":"Walmart","price":18.97,"list_price":27.97,"coupon_code":"CLEAN5","discount_pct":32,"data":"SAMPLE"},{"date":"2026-10-14","product_id":"vacuum-parts","product_name":"Vacuum Filters, Bags & Belt — HEPA Replacement Kit","store":"Home Depot","price":21.97,"list_price":31.97,"coupon_code":"HDHOME","discount_pct":31,"data":"SAMPLE"},{"date":"2026-10-14","product_id":"vacuum-parts","product_name":"Vacuum Filters, Bags & Belt — HEPA Replacement Kit","store":"Target","price":22.99,"list_price":29.99,"coupon_code":"TARGETHOME","discount_pct":23,"data":"SAMPLE"},{"date":"2026-10-14","product_id":"printer-ink","product_name":"Printer Ink & Toner — Replacement Cartridges","store":"Amazon","price":28.99,"list_price":49.99,"coupon_code":"INK42","discount_pct":42,"data":"SAMPLE"},{"date":"2026-10-14","product_id":"printer-ink","product_name":"Printer Ink & Toner — Replacement Cartridges","store":"Walmart","price":32.97,"list_price":49.97,"coupon_code":"INK5","discount_pct":34,"data":"SAMPLE"},{"date":"2026-10-14","product_id":"printer-ink","product_name":"Printer Ink & Toner — Replacement Cartridges","store":"Best Buy","price":36.99,"list_price":54.99,"coupon_code":"BBTECH10","discount_pct":33,"data":"SAMPLE"},{"date":"2026-10-14","product_id":"printer-ink","product_name":"Printer Ink & Toner — Replacement Cartridges","store":"Target","price":38.99,"list_price":52.99,"coupon_code":"TECHACC","discount_pct":26,"data":"SAMPLE"},{"date":"2026-10-14","product_id":"fridge-filter","product_name":"Refrigerator Water Filter — Replacement","store":"Amazon","price":19.99,"list_price":34.99,"coupon_code":"FRIDGE43","discount_pct":43,"data":"SAMPLE"},{"date":"2026-10-14","product_id":"fridge-filter","product_name":"Refrigerator Water Filter — Replacement","store":"Home Depot","price":24.97,"list_price":39.97,"coupon_code":"PAINT5","discount_pct":38,"data":"SAMPLE"},{"date":"2026-10-14","product_id":"fridge-filter","product_name":"Refrigerator Water Filter — Replacement","store":"Walmart","price":26.97,"list_price":37.97,"coupon_code":"HOME5","discount_pct":29,"data":"SAMPLE"},{"date":"2026-10-14","product_id":"fridge-filter","product_name":"Refrigerator Water Filter — Replacement","store":"Best Buy","price":29.99,"list_price":44.99,"coupon_code":"APPLIANCE10","discount_pct":33,"data":"SAMPLE"},{"date":"2026-10-14","product_id":"hvac-filter","product_name":"HVAC / Furnace Air Filters — 4-Pack","store":"Home Depot","price":29.97,"list_price":47.97,"coupon_code":"HDFILTER","discount_pct":38,"data":"SAMPLE"},{"date":"2026-10-14","product_id":"hvac-filter","product_name":"HVAC / Furnace Air Filters — 4-Pack","store":"Walmart","price":32.47,"list_price":44.47,"coupon_code":"HOME5","discount_pct":27,"data":"SAMPLE"},{"date":"2026-10-14","product_id":"hvac-filter","product_name":"HVAC / Furnace Air Filters — 4-Pack","store":"Amazon","price":34.99,"list_price":52.99,"coupon_code":"HVAC34","discount_pct":34,"data":"SAMPLE"},{"date":"2026-10-14","product_id":"hvac-filter","product_name":"HVAC / Furnace Air Filters — 4-Pack","store":"Target","price":36.99,"list_price":46.99,"coupon_code":"TARGETHOME","discount_pct":21,"data":"SAMPLE"},{"date":"2026-10-14","product_id":"watch-parts","product_name":"Smartwatch Bands & Magnetic Charger","store":"Amazon","price":13.99,"list_price":27.99,"coupon_code":"WATCH50","discount_pct":50,"data":"SAMPLE"},{"date":"2026-10-14","product_id":"watch-parts","product_name":"Smartwatch Bands & Magnetic Charger","store":"Walmart","price":15.97,"list_price":24.97,"coupon_code":"WATCH4","discount_pct":36,"data":"SAMPLE"},{"date":"2026-10-14","product_id":"watch-parts","product_name":"Smartwatch Bands & Magnetic Charger","store":"Target","price":18.99,"list_price":27.99,"coupon_code":"CIRCLE15","discount_pct":32,"data":"SAMPLE"},{"date":"2026-10-14","product_id":"watch-parts","product_name":"Smartwatch Bands & Magnetic Charger","store":"Best Buy","price":21.99,"list_price":31.99,"coupon_code":"BBTECH10","discount_pct":31,"data":"SAMPLE"},{"date":"2026-10-14","product_id":"local-towels-allen","product_name":"Paper Towels — 12 Pack (Local Pickup)","store":"Allen Family Market","price":13.99,"list_price":19.99,"coupon_code":"ALLENLOCAL6","discount_pct":30,"data":"SAMPLE"},{"date":"2026-10-14","product_id":"local-towels-allen","product_name":"Paper Towels — 12 Pack (Local Pickup)","store":"Lucas Corner Grocery","price":14.49,"list_price":19.49,"coupon_code":"LUCAS5","discount_pct":26,"data":"SAMPLE"},{"date":"2026-10-14","product_id":"local-coffee-lucas","product_name":"Local Roast Coffee Beans — 2 lb","store":"Lucas Roast Co.","price":15.99,"list_price":23.99,"coupon_code":"LUCASROAST15","discount_pct":33,"data":"SAMPLE"},{"date":"2026-10-14","product_id":"local-coffee-lucas","product_name":"Local Roast Coffee Beans — 2 lb","store":"Allen Coffee Corner","price":16.99,"list_price":24.99,"coupon_code":"ALLENBREW","discount_pct":32,"data":"SAMPLE"},{"date":"2026-10-14","product_id":"local-phone-bundle-allen","product_name":"Phone Case + Screen Protector Bundle — Local Install","store":"Allen Mobile Repair","price":19.99,"list_price":34.99,"coupon_code":"ALLENINSTALL","discount_pct":43,"data":"SAMPLE"}];
var PRICE_SNAPSHOTS=[];
function snapshotToday(){
  try{
    var parts=new Intl.DateTimeFormat("en-CA",{timeZone:"America/Chicago",year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(new Date());
    var m={}; parts.forEach(function(p){ m[p.type]=p.value; });
    if(m.year&&m.month&&m.day) return m.year+"-"+m.month+"-"+m.day;
  }catch(e){}
  return new Date().toISOString().slice(0,10);
}
function catalogSnapshotRows(date){
  var rows=[];
  PRODUCTS.forEach(function(p){
    (p.offers||[]).forEach(function(o){
      rows.push({date:date,product_id:p.id,product_name:p.name,store:o.store,
        price:(typeof o.price==="number"?o.price:null),
        list_price:(typeof o.list==="number"?o.list:null),
        coupon_code:(o.code&&o.code.charAt(0)!=="—"?o.code:null),
        discount_pct:(typeof o.save==="number"?o.save:null),
        data:(o.live?"LIVE":"SAMPLE")});
    });
  });
  return rows;
}
function sortPriceSnapshots(){
  PRICE_SNAPSHOTS.sort(function(a,b){
    if(a.date!==b.date) return a.date<b.date?-1:1;
    if(a.product_id!==b.product_id) return a.product_id<b.product_id?-1:1;
    return a.store<b.store?-1:(a.store>b.store?1:0);
  });
}
function capturePriceSnapshot(){
  var stored=lsGet(LS_PRICE_SNAPSHOTS);
  PRICE_SNAPSHOTS=Array.isArray(stored)?stored.filter(function(r){ return r&&r.date&&r.product_id&&r.store; }):[];
  var have={};
  PRICE_SNAPSHOTS.forEach(function(r){ have[r.date]=true; });
  /* Seed snapshot #1 (build date) backfills history if this device
     has none for that date yet; it never duplicates a stored day. */
  var seeded=false;
  PRICE_SNAPSHOT_SEED.forEach(function(r){ if(r&&r.date&&!have[r.date]){ PRICE_SNAPSHOTS.push(r); seeded=true; } });
  if(seeded) PRICE_SNAPSHOT_SEED.forEach(function(r){ have[r.date]=true; });
  var today=snapshotToday();
  var added=0;
  if(!have[today]){
    var rows=catalogSnapshotRows(today);
    PRICE_SNAPSHOTS=PRICE_SNAPSHOTS.concat(rows);
    added=rows.length;
  }
  sortPriceSnapshots();
  lsSet(LS_PRICE_SNAPSHOTS,PRICE_SNAPSHOTS);
  if(added) trackEvent("price_snapshot",{source:"price_snapshot",detail:"Recorded daily price snapshot for "+today+": "+added+" offers (product x store), data flag SAMPLE"});
  return added;
}
capturePriceSnapshot();

function persistCurrentProject(){ lsSet(LS_CURRENT,{name:currentProjectName,items:project,updatedAt:new Date().toISOString()}); }
function persistSavedProjects(){ lsSet(LS_SAVED,savedProjects); }
function loadPersistedProjects(){
  var cur=lsGet(LS_CURRENT);
  if(cur&&Array.isArray(cur.items)){ project=cur.items; if(cur.name) currentProjectName=cur.name; }
  var sav=lsGet(LS_SAVED);
  if(Array.isArray(sav)) savedProjects=sav.filter(function(s){ return s&&s.name&&Array.isArray(s.items); });
}
/* ===== Install-video search terms + YouTube opening =====
   Terms are derived from the catalog record: its name plus its
   "fits…" compatibility context (device / meta), e.g. a filter that
   fits Samsung/LG fridges → "how to replace refrigerator water
   filter Samsung, LG…". Clicking opens YouTube SEARCH RESULTS in a
   new tab — real third-party videos; nothing is hosted or faked. */
function videoTermsForProduct(p){
  if(!p) return "";
  var rawName=p.name||p.product_name||"";
  var base=rawName.split("—")[0].trim();
  var low=base.toLowerCase();
  var verb="how to install";
  if(/filter|cartridge|belt|screen protector|charger|alternator|brake|ink|toner|battery/.test(low)) verb="how to replace";
  else if(p.type&&p.type!=="part") verb="how to use";
  var extra="";
  var meta=p.meta||"";
  var m=meta.match(/fits[^•]+/i);
  if(m) extra=" "+m[0].replace(/^fits\s+/i,"").trim();
  else if(p.device) extra=" "+p.device;
  else if(p.compat) extra=" "+p.compat;
  return (verb+" "+base+extra).replace(/\s+/g," ").trim();
}
function videoTermsForProjectItem(p){
  if(p&&p.product_id){ for(var i=0;i<PRODUCTS.length;i++){ if(PRODUCTS[i].id===p.product_id) return videoTermsForProduct(PRODUCTS[i]); } }
  if(p&&p.videoTerms) return p.videoTerms;
  return videoTermsForProduct({name:p?p.product_name:"",type:"part",meta:p&&p.compat?p.compat:"",device:p&&p.device?p.device:""});
}
function openInstallVideos(rec,opts){
  opts=opts||{};
  var isProj=!!(rec&&rec.key&&!rec.id);
  var terms=isProj?videoTermsForProjectItem(rec):videoTermsForProduct(rec);
  if(!terms) terms="how to install "+((rec&&(rec.product_name||rec.name))||"");
  var pid=isProj?(rec.product_id||null):(rec.id||rec.product_id||null);
  var pname=isProj?(rec.product_name||""):(rec.name||rec.product_name||"");
  var store=isProj?(rec.store||null):null;
  trackEvent("video_click",{product_id:pid,product_name:pname||null,store:store,coupon_code:(rec&&rec.code)||null,price:(rec&&typeof rec.price==="number"?rec.price:null),source:opts.source||"video_button",detail:"Watched install videos (YouTube search) for "+(pname||terms)+" — terms: “"+terms+"”"});
  window.open("https://www.youtube.com/results?search_query="+encodeURIComponent(terms),"_blank","noopener");
  showToast("Opening YouTube install videos for "+(pname.split("—")[0].trim()||"this item"));
}
function addToProject(item,opts){
  opts=opts||{};
  var key=(typeof projectKeyFor==="function")?projectKeyFor(item):((item.product_id||item.product_name||item.label||"")+"|"+item.store);
  for(var i=0;i<project.length;i++){ if(project[i].key===key){ if(!opts.viaCart){ showToast("Already in My Project"); document.getElementById("projectPanel").classList.add("open"); } else { showToast("Already in your cart"); } return false; } }
  var prod=null; if(item.product_id){ for(var j=0;j<PRODUCTS.length;j++){ if(PRODUCTS[j].id===item.product_id) prod=PRODUCTS[j]; } }
  var p={key:key,product_id:item.product_id||null,product_name:item.product_name||item.title||item.label,store:item.store,price:(typeof item.price==="number"?item.price:null),list:(typeof item.list==="number"?item.list:null),save:(typeof item.save==="number"?item.save:(prod&&typeof item.price==="number"&&typeof item.list==="number"&&item.list>item.price?Math.round((1-item.price/item.list)*100):null)),code:item.code||null,use:item.use||null,ship:item.ship||(item.use!=="instore"?shipFor(item.store):null),url:item.url||orderUrlFor(item.store),videoTerms:prod?videoTermsForProduct(prod):(item.videoTerms||null)};
  if(typeof p.save!=="number"&&typeof p.price==="number"&&typeof p.list==="number"&&p.list>p.price) p.save=Math.round((1-p.price/p.list)*100);
  project.push(p);
  if(opts.viaCart){
    trackEvent("cart_add",{product_id:p.product_id,product_name:p.product_name,store:p.store,coupon_code:p.code,price:p.price,source:opts.source||"coupon_modal_cart",detail:"Added to Cart from coupon pop-out: "+p.product_name+" from "+p.store+(typeof p.price==="number"?(" at "+money(p.price)):"")+((typeof p.list==="number"&&typeof p.price==="number"&&p.list>p.price)?(" — coupon saves "+money(p.list-p.price)+(typeof p.save==="number"?(" ("+p.save+"%)"):"")):"")+" (sample). Coupon stays in the Coupon Wallet too."});
  }
  trackEvent("project_add",{product_id:p.product_id,product_name:p.product_name,store:p.store,coupon_code:p.code,price:p.price,source:opts.viaCart?(opts.source||"coupon_modal_cart"):"add_to_project",detail:"Saved to My Project / Cart: "+p.product_name+" from "+p.store+" (sample)"});
  persistCurrentProject();
  renderProject();
  if(typeof syncCouponModalCartBtn==="function"&&couponModalData) syncCouponModalCartBtn(!!opts.viaCart);
  showToast(opts.viaCart?("✓ Added to Cart — "+p.store):("✓ Added to My Project — "+p.store));
  return true;
}
function projectItemHTML(p){
  var savings=(typeof p.price==="number"&&typeof p.list==="number"&&p.list>p.price)?(p.list-p.price):null;
  var vTerms=videoTermsForProjectItem(p);
  return '<div class="proj-item-wrap"><div class="proj-item"><span>'+esc(p.product_name)
    +(savings!==null?('<span style="display:block;font-size:12.5px;color:var(--green);font-weight:700;">Coupon '+(p.code?esc(p.code)+" · ":"")+'saves '+money(savings)+(typeof p.save==="number"?(" ("+p.save+"% off)"):"")+'</span>'):(p.code?('<span style="display:block;font-size:12.5px;color:var(--muted);">Coupon '+esc(p.code)+'</span>'):""))
    +'</span><span><b>'+(typeof p.price==="number"?money(p.price):"")+'</b> <button class="proj-remove" data-key="'+esc(p.key)+'" aria-label="Remove from project">✕</button></span></div>'
    +'<button type="button" class="proj-video-btn" data-key="'+esc(p.key)+'">▶ Watch install videos (YouTube)</button>'
    +(vTerms?('<span class="proj-video-terms">Searches: “'+esc(vTerms)+'”</span>'):"")
    +'</div>';
}
function renderSavedProjects(){
  var box=document.getElementById("savedProjectsList"); if(!box) return;
  if(!savedProjects.length){ box.innerHTML='<p style="color:var(--muted);font-size:13.5px;margin:0;">No saved projects yet — name the one above and tap Save Project.</p>'; return; }
  box.innerHTML=savedProjects.map(function(s){
    var tot=0; s.items.forEach(function(p){ if(typeof p.price==="number") tot+=p.price; });
    return '<div class="saved-proj" data-id="'+esc(s.id)+'"><b>'+esc(s.name)+'</b><span>'+s.items.length+' item'+(s.items.length===1?"":"s")+' · items '+money(tot)+' (sample)'+(s.updatedAt?(" · saved "+esc(fmtDateTime(new Date(s.updatedAt)))):"")+'</span>'
      +'<div class="saved-proj-actions"><button type="button" class="open-proj" data-act="open">Open</button><button type="button" data-act="rename">Rename</button><button type="button" class="del-proj" data-act="delete">Delete</button></div>'
      +'<div class="saved-proj-rename" data-role="rename-row" style="display:none;"><input type="text" maxlength="60" value="'+esc(s.name)+'" aria-label="New project name" /><button type="button" data-act="rename-save" class="open-proj" style="background:var(--ink);color:var(--bg);border:1px solid var(--ink);padding:7px 10px;border-radius:8px;font-weight:700;cursor:pointer;font-family:inherit;font-size:12.5px;">Save name</button><button type="button" data-act="rename-cancel">Cancel</button></div></div>';
  }).join("");
  box.querySelectorAll(".saved-proj").forEach(function(row){
    var id=row.dataset.id;
    row.querySelectorAll("button[data-act]").forEach(function(b){
      b.addEventListener("click",function(){
        var act=b.dataset.act;
        var entry=null; savedProjects.forEach(function(s){ if(s.id===id) entry=s; }); if(!entry&&act!=="rename-cancel") return;
        if(act==="open"){
          project=entry.items.map(function(p){ var c={}; for(var k in p) c[k]=p[k]; return c; });
          currentProjectName=entry.name;
          persistCurrentProject(); renderProject();
          trackEvent("project_open",{source:"saved_projects",detail:"Opened saved project “"+entry.name+"” ("+entry.items.length+" items) into the cart"});
          showToast("Opened project: "+entry.name);
          window.scrollTo({top:document.getElementById("projectPanel").offsetTop||0,behavior:"smooth"});
        } else if(act==="delete"){
          var nm=entry.name;
          savedProjects=savedProjects.filter(function(s){ return s.id!==id; });
          persistSavedProjects(); renderSavedProjects();
          trackEvent("project_delete",{source:"saved_projects",detail:"Deleted saved project “"+nm+"” ("+entry.items.length+" items)"});
          showToast("Deleted project: "+nm);
        } else if(act==="rename"){
          var rr=row.querySelector('[data-role="rename-row"]'); if(rr) rr.style.display="flex"; var inp=row.querySelector('[data-role="rename-row"] input'); if(inp){ inp.focus(); inp.select(); }
        } else if(act==="rename-cancel"){
          var rr2=row.querySelector('[data-role="rename-row"]'); if(rr2) rr2.style.display="none";
        } else if(act==="rename-save"){
          var inp2=row.querySelector('[data-role="rename-row"] input'); var nn=(inp2?inp2.value:"").trim(); if(!nn){ showToast("Give the project a name first"); return; }
          var old=entry.name; entry.name=nn; entry.updatedAt=new Date().toISOString();
          if(currentProjectName===old){ currentProjectName=nn; persistCurrentProject(); }
          persistSavedProjects(); renderProject();
          trackEvent("project_rename",{source:"saved_projects",detail:"Renamed saved project “"+old+"” → “"+nn+"”"});
          showToast("Renamed to: "+nn);
        }
      });
    });
  });
}
function saveCurrentProject(){
  var inp=document.getElementById("saveProjectName");
  var name=((inp?inp.value:"")||"").trim()||(currentProjectName!=="Untitled project"?currentProjectName:"");
  if(!project.length){ showToast("Your cart is empty — add something first, then save it"); return; }
  if(!name){ showToast("Give your project a name first — e.g. Bathroom remodel"); if(inp) inp.focus(); return; }
  var existing=null; savedProjects.forEach(function(s){ if(s.name.toLowerCase()===name.toLowerCase()) existing=s; });
  var snapshot=project.map(function(p){ var c={}; for(var k in p) c[k]=p[k]; return c; });
  if(existing){ existing.items=snapshot; existing.updatedAt=new Date().toISOString(); }
  else { savedProjects.push({id:"proj_"+Date.now().toString(36)+Math.random().toString(36).slice(2,6),name:name,items:snapshot,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()}); }
  currentProjectName=name;
  persistCurrentProject(); persistSavedProjects(); renderProject();
  trackEvent("project_save",{source:"project_panel",detail:"Saved project “"+name+"” ("+snapshot.length+" items) on this device"+(existing?" — updated the existing saved copy":"")});
  showToast("💾 Saved project: "+name);
  if(inp) inp.value="";
}
function startFreshProject(){
  var had=project.length;
  project=[]; currentProjectName="Untitled project";
  persistCurrentProject(); renderProject();
  trackEvent("project_new",{source:"project_panel",detail:"Started a fresh, empty project (previous current list had "+had+" items; saved projects untouched)"});
  showToast("Started a fresh, empty project");
}
function renderProject(){
  document.getElementById("projectCount").textContent=project.length;
  var nameEl=document.getElementById("currentProjectName"); if(nameEl) nameEl.textContent=currentProjectName;
  var saveInp=document.getElementById("saveProjectName"); if(saveInp&&currentProjectName!=="Untitled project"&&!saveInp.value) saveInp.placeholder="Name it — e.g. Bathroom remodel (current: "+currentProjectName+")";
  var box=document.getElementById("projectGroups");
  var totalEl=document.getElementById("projectTotal");
  if(!project.length){ box.innerHTML="<p style='color:var(--muted);'>Nothing here yet. Tap <b>+ Project</b> on any product or part — or <b>Add to Cart</b> on a coupon pop-out — and it lands here, grouped by vendor.</p>"; totalEl.textContent="$0.00"; renderSavedProjects(); return; }
  var byVendor={}; project.forEach(function(p){ (byVendor[p.store]=byVendor[p.store]||[]).push(p); });
  var grand=0; var html="";
  Object.keys(byVendor).sort().forEach(function(v){
    var items=byVendor[v];
    var sub=0; items.forEach(function(p){ if(typeof p.price==="number") sub+=p.price; });
    var ship=items[0].ship||null;
    var shipCost=ship?(ship.cost||0):0;
    var shipFree=ship&&ship.freeOver&&sub>=ship.freeOver;
    if(shipFree) shipCost=0;
    var vendorTotal=sub+shipCost; grand+=vendorTotal;
    var conn=VENDOR_CONNECTIONS[v];
    var direct=!!(conn&&conn.direct);
    html+='<div class="wallet-group"><div class="wallet-group-head"><b>'+esc(v)+(direct?'<span class="direct-badge">Sample direct connection</span>':"")+'</b><span>'+items.length+' item'+(items.length>1?"s":"")+'</span></div>'
      +items.map(projectItemHTML).join("")
      +(ship?('<div class="ship-line">'+(shipFree?("🚚 Free shipping over "+money(ship.freeOver).replace(".00","")+" · arrives "+ship.etaText+" · sample shipping"):esc(shipLineText(ship)))+'</div>'):'<div class="ship-line">🏪 Pickup in store — no shipping</div>')
      +'<div style="font-size:14.5px;margin-top:6px;">Subtotal incl. shipping (sample): <b>'+money(vendorTotal)+'</b></div>'
      +'<button class="vendor-order-btn'+(direct?" direct":"")+'" data-vendor="'+esc(v)+'">'+(direct?("Send Order to "+esc(v)):("Order Online at "+esc(v)+" →"))+'</button>'
      +'<div class="vendor-note">'+(direct?("Sample direct connection: your order would go straight to "+esc(v)+", who ships it — you pay "+esc(v)+" directly. Demo only: nothing is sent from this page."):("No direct order connection yet: we copy any coupon code and open "+esc(v)+"'s site — you order and pay there, and "+esc(v)+" ships it."))+'</div>'
      +'</div>';
  });
  totalEl.textContent=money(grand);
  box.innerHTML=html;
  box.querySelectorAll(".proj-remove").forEach(function(b){ b.addEventListener("click",function(){ project=project.filter(function(p){ return p.key!==b.dataset.key; }); persistCurrentProject(); renderProject(); }); });
  box.querySelectorAll(".proj-video-btn").forEach(function(b){ b.addEventListener("click",function(){ var it=null; project.forEach(function(p){ if(p.key===b.dataset.key) it=p; }); if(it) openInstallVideos(it,{source:"project_list"}); }); });
  box.querySelectorAll(".vendor-order-btn").forEach(function(b){ b.addEventListener("click",function(){ projectVendorOrder(b.dataset.vendor); }); });
  renderSavedProjects();
}
function projectVendorOrder(vendor){
  var items=project.filter(function(p){ return p.store===vendor; });
  if(!items.length) return;
  var conn=VENDOR_CONNECTIONS[vendor];
  var sub=0; items.forEach(function(p){ if(typeof p.price==="number") sub+=p.price; });
  if(conn&&conn.direct){
    trackEvent("project_order",{store:vendor,source:"project",detail:"SAMPLE direct-order demo at "+vendor+": "+items.length+" items, subtotal "+money(sub)+" — no order was transmitted (static demo)"});
    showToast("Sample only — no order was sent. With a live connection, this order would go straight to "+vendor+" to ship.");
    return;
  }
  var first=items[0];
  if(first.code&&!isMemberCode(first.code)&&navigator.clipboard){ try{ navigator.clipboard.writeText(first.code).catch(function(){}); }catch(e){} }
  trackEvent("project_order",{store:vendor,coupon_code:first.code||null,source:"project",detail:"Project Order Online at "+vendor+": "+items.length+" items, subtotal "+money(sub)+" (sample) — code copied, opening vendor site"});
  trackEvent("sponsor_click",{store:vendor,coupon_code:first.code||null,source:"project_order",detail:"Sponsor click-through (Project → Order Online) → "+(first.url||"")+" for "+items.length+" project items"});
  if(first.url) window.open(first.url,"_blank","noopener");
  showToast(first.code&&!isMemberCode(first.code)?("✓ Code "+first.code+" copied — paste it at "+vendor+"'s checkout"):("Opening "+vendor+" — order your "+items.length+" project item"+(items.length>1?"s":"")+" there"));
}
(function(){
  loadPersistedProjects();
  var po=document.getElementById("projectOpen"); if(po) po.onclick=function(){ document.getElementById("projectPanel").classList.toggle("open"); };
  var pc=document.getElementById("projectClose"); if(pc) pc.onclick=function(){ document.getElementById("projectPanel").classList.remove("open"); };
  var sb=document.getElementById("saveProjectBtn"); if(sb) sb.onclick=function(){ saveCurrentProject(); };
  var sn=document.getElementById("saveProjectName"); if(sn) sn.addEventListener("keydown",function(e){ if(e.key==="Enter"){ e.preventDefault(); saveCurrentProject(); } });
  var nb=document.getElementById("newProjectBtn"); if(nb) nb.onclick=function(){ startFreshProject(); };
  renderProject();
})();

document.getElementById("heroSearchForm").addEventListener("submit",function(e){ e.preventDefault(); var q=document.getElementById("heroSearch").value.trim(); doSearch(q); });
/* "Use my location" — runs ONLY when tapped; the browser asks the visitor's permission first.
   On success the coordinates are resolved to a ZIP, the ZIP field is filled, and the normal
   ZIP-isolated search runs. Any failure leaves manual ZIP entry working exactly as before. */
document.getElementById("useLocationBtn").addEventListener("click",function(){
  var btn=this;
  var statusEl=document.getElementById("zipStatus");
  function locFail(msg){
    btn.disabled=false; btn.textContent="📍 Use my location";
    if(statusEl){ statusEl.className="zip-status empty"; statusEl.innerHTML=msg; }
  }
  function locDone(zip){
    btn.disabled=false; btn.textContent="📍 Use my location";
    document.getElementById("heroZip").value=zip;
    showToast("Found you — showing local deals near ZIP "+zip);
    doSearch(document.getElementById("heroSearch").value.trim());
  }
  if(!("geolocation" in navigator)){
    locFail("This browser can't share its location — just type your <b>5-digit ZIP</b> in the box above instead.");
    return;
  }
  btn.disabled=true; btn.textContent="Locating…";
  navigator.geolocation.getCurrentPosition(function(pos){
    var lat=pos.coords.latitude, lon=pos.coords.longitude;
    function offlineFallback(){
      /* Lookup unreachable: coordinates alone can only be matched against the Allen / Lucas, TX pilot areas. */
      var pilots=[{zip:"75013",lat:33.1032,lon:-96.6989},{zip:"75002",lat:33.0279,lon:-96.5793}];
      var best=null,bestD=1e9;
      pilots.forEach(function(p){ var d=(lat-p.lat)*(lat-p.lat)+(lon-p.lon)*(lon-p.lon); if(d<bestD){bestD=d;best=p;} });
      if(best && bestD<0.04){ locDone(best.zip); }
      else locFail("We found your location but couldn't turn it into a ZIP code — type your <b>5-digit ZIP</b> in the box above instead.");
    }
    if(window.fetch){
      fetch("https://api.bigdatacloud.net/data/reverse-geocode-client?latitude="+encodeURIComponent(lat)+"&longitude="+encodeURIComponent(lon)+"&localityLanguage=en")
        .then(function(r){ return r.json(); })
        .then(function(d){
          var m=(((d&&d.postcode)||"")+"").match(/\d{5}/);
          if(m) locDone(m[0]);
          else offlineFallback();
        })
        .catch(function(){ offlineFallback(); });
    } else offlineFallback();
  },function(err){
    if(err && err.code===1) locFail("Location permission was declined — no problem, just type your <b>5-digit ZIP</b> in the box above to see local deals.");
    else locFail("We couldn't get your location just now — type your <b>5-digit ZIP</b> in the box above instead.");
  },{timeout:10000,maximumAge:600000});
});
document.querySelectorAll("[data-search]").forEach(function(b){ b.addEventListener("click",function(){ document.getElementById("heroSearch").value=b.dataset.search; doSearch(b.dataset.search); }); });
function applyZipAndRender(filter){
  ensureVisibleProduct();
  updateZipUI();
  renderProductList(filter||""); renderOffers("zip_filter"); renderCoupons(); renderStores(); renderDevices();
}
function doSearch(q){
  var zr=readZipInput();
  if(!zr.valid){
    showToast("ZIP must be 5 digits — showing nationwide deals");
    var st=document.getElementById("zipStatus");
    if(st){ st.className="zip-status empty"; st.innerHTML='That ZIP didn\'t look right — enter a <b>5-digit ZIP</b> to isolate local deals, or leave it blank for nationwide offers.'; }
  }
  currentZip=zr.zip;
  if(!q){
    /* ZIP-only submit: isolate listings to the ZIP without a product query */
    trackEvent("search",{query:"",zip:currentZip||null,source:"hero_search_zip",detail:currentZip?("ZIP-only search — isolated listings to ZIP "+currentZip+" ("+localProductsForZip(currentZip).length+" local products, "+localCouponsForZip(currentZip).length+" local coupons)"):"Cleared ZIP — showing nationwide offers only"});
    SUPPRESS_COMPARE_LOG=false;
    applyZipAndRender("");
    document.getElementById("compare").scrollIntoView({behavior:"smooth"});
    if(currentZip && !localProductsForZip(currentZip).length && !localCouponsForZip(currentZip).length) showToast("No local stores in "+currentZip+" yet — nationwide deals below");
    else if(currentZip) showToast("Showing local deals near "+currentZip+" + nationwide");
    return;
  }
  // Rank only products visible for this ZIP — a local match for another ZIP must never win or appear
  var visible=PRODUCTS.filter(function(p){ return visibleForZip(p,currentZip); });
  var ranked=visible.map(function(p){return {p:p,s:productScore(p,q)};}).sort(function(a,b){return b.s-a.s;});
  var match=ranked[0] && ranked[0].s>=2 ? ranked[0].p : null;
  // Legacy shortcuts still work (nationwide products only)
  if(!match){ var ql=q.toLowerCase(); if(ql.indexOf("tide")!==-1) match=PRODUCTS.find(function(p){return p.id==="tide";}); else if(ql.indexOf("paper towel")!==-1 && !currentZip) match=PRODUCTS.find(function(p){return p.id==="towels";}); }
  var matchCount=ranked.filter(function(r){return r.s>=2;}).length;
  var localCount=localProductsForZip(currentZip).length+localCouponsForZip(currentZip).length;
  trackEvent("search",{query:q,zip:currentZip||null,product_id:match?match.id:null,product_name:match?match.name:null,category:match?match.cat:null,source:"hero_search",detail:(match?("Searched and matched: "+match.name+" ("+matchCount+" product/part matches)"):"Searched with no exact match — showed visible products & parts")+(currentZip?(" • ZIP "+currentZip+" • "+localCount+" local listings for this ZIP"):" • No ZIP — nationwide only")});
  if(match){ currentProduct=match; }
  SUPPRESS_COMPARE_LOG=false;
  ensureVisibleProduct(); updateZipUI();
  renderProductList(q); renderOffers("search"); renderCoupons(); renderStores(); renderDevices();
  document.getElementById("compare").scrollIntoView({behavior:"smooth"});
  if(currentZip && !localCount) showToast("No local stores in "+currentZip+" yet — nationwide deals below");
  else if(!match) showToast("No exact match — showing all products & parts"+(currentZip?(" for ZIP "+currentZip):""));
  else if(match.type==="part") showToast("Found part: "+match.name.split("—")[0].trim()+" — check compatibility before buying");
  else if(isLocalCoverage(match.zipCoverage)) showToast("Found local deal near "+currentZip+": "+match.name.split("—")[0].trim());
}
document.querySelectorAll("#catPills .pill").forEach(function(p){ p.addEventListener("click",function(){ document.querySelectorAll("#catPills .pill").forEach(function(x){x.classList.remove("active");}); p.classList.add("active"); currentCat=p.dataset.cat; currentStore=null; trackEvent("category_filter",{category:currentCat==="all"?null:currentCat,source:"coupon_pills",detail:"Filtered coupons by category: "+p.textContent.trim()}); renderCoupons(); }); });
/* Sponsor / retailer outbound links */
document.querySelectorAll(".sponsor-link").forEach(function(a){ a.addEventListener("click",function(){ trackEvent("sponsor_click",{store:a.dataset.sponsor||a.textContent.trim(),source:"sponsor_card",detail:"Clicked sponsor link: "+(a.dataset.sponsor||"")+" → "+a.getAttribute("href")}); }); });
document.getElementById("guideToggle").onclick=function(){
  guideOpen=!guideOpen;
  document.getElementById("guideBody").classList.toggle("open",guideOpen);
  this.setAttribute("aria-expanded",guideOpen?"true":"false");
  this.textContent=guideOpen?"📖 Hide instructions":(currentProduct.type==="part"?"📖 How to install / fit this part":"📖 How to use this — instructions");
  if(guideOpen){ trackEvent("guide_view",{product_id:currentProduct.id,product_name:currentProduct.name,category:currentProduct.cat,source:"guide_toggle",detail:"Viewed instructions for "+currentProduct.name}); }
};
document.getElementById("walletOpen").onclick=function(){ document.getElementById("walletPanel").classList.add("open"); };
document.getElementById("walletClose").onclick=function(){ document.getElementById("walletPanel").classList.remove("open"); };
document.getElementById("copyWallet").onclick=function(){ var txt=wallet.map(function(w){return w.label+": "+w.code;}).join("\n"); if(navigator.clipboard) navigator.clipboard.writeText(txt||"No coupons clipped yet"); wallet.forEach(function(w){ trackEvent("coupon_copy",{coupon_code:w.code,source:"wallet_copy_all",detail:"Copied from wallet: "+w.label}); }); showToast("Wallet codes copied"); };
document.getElementById("downloadWallet").onclick=function(){ var txt="MY COUPON WALLET\n================\nCodes below are SAMPLES — examples only, not valid at checkout.\n\n"+(wallet.length?wallet.map(function(w){return w.label+"\nCode: "+w.code+" (SAMPLE)\n"+w.desc+"\n";}).join("\n"):"No coupons clipped yet."); downloadText(txt,"my-coupon-wallet.txt"); };
/* Analytics are internal only — no dashboard, stats, feed, or export
   controls are rendered for site visitors. Tracking stays in-memory
   for the operator and is not exposed in the page UI. */
(function(){
  var ef=document.getElementById("eventFilter"); if(ef) ef.addEventListener("change",function(){ renderActivity(); });
  var ej=document.getElementById("exportJson"); if(ej) ej.onclick=function(){ var txt=exportJSONText(); var n=EVENT_LOG.length; downloadBlob(txt,"retail-remedy-activity-log.json","application/json;charset=utf-8"); trackEvent("activity_export",{source:"export_json",detail:"Exported activity log as JSON ("+n+" events)"}); showToast("Exported "+n+" events as JSON"); };
  var ec=document.getElementById("exportCsv"); if(ec) ec.onclick=function(){ var txt=exportCSVText(); var n=EVENT_LOG.length; downloadBlob(txt,"retail-remedy-activity-log.csv","text/csv;charset=utf-8"); trackEvent("activity_export",{source:"export_csv",detail:"Exported activity log as CSV ("+n+" events)"}); showToast("Exported "+n+" events as CSV"); };
  var cj=document.getElementById("copyJson"); if(cj) cj.onclick=function(){ if(navigator.clipboard) navigator.clipboard.writeText(exportJSONText()); var n=EVENT_LOG.length; trackEvent("activity_export",{source:"copy_json",detail:"Copied activity log JSON to clipboard ("+n+" events)"}); showToast("Activity JSON copied ("+n+" events)"); };
  var cl=document.getElementById("clearLog"); if(cl) cl.onclick=function(){ var n=EVENT_LOG.length; EVENT_LOG.length=0; EVENT_SEQ=0; renderActivity(); trackEvent("activity_clear",{source:"clear_log",detail:"Cleared session activity log ("+n+" events removed, this tab only)"}); showToast("Activity log cleared for this tab"); };
})();
function downloadText(txt,filename){ var blob=new Blob([txt],{type:"text/plain"}); var a=document.createElement("a"); a.href=URL.createObjectURL(blob); a.download=filename; a.click(); setTimeout(function(){URL.revokeObjectURL(a.href);},2000); }

/* ===== Shoppable guide terms — price pop-outs inside the how-to text =====
   Terms (parts, tools, materials) named in guide steps are wrapped in
   .shop-term buttons. Opening one shows the cheapest price for that item
   across the stores already compared on this page (or a clearly-labeled
   sample guide-item deal for install hardware not in the main catalog),
   the store, its coupon action, and the fits/compatibility note for parts.
   All prices remain SAMPLE data, consistent with the rest of the site. */
var TERM_DEFS=[
 {key:"wiring-harness",match:"wiring-harness adapter",deal:{name:"Wiring Harness Adapter — Mercedes W208",price:12.99,list:19.99,store:"Walmart",code:"HARNESS5",desc:"Plug-and-play harness adapter",compat:"Fits 1998–2003 Mercedes-Benz CLK-Class (W208) factory harness — no cutting",cat:"Parts"}},
 {key:"harness",match:"harness adapter",deal:{name:"Wiring Harness Adapter — Mercedes W208",price:12.99,list:19.99,store:"Walmart",code:"HARNESS5",desc:"Plug-and-play harness adapter",compat:"Fits 1998–2003 Mercedes-Benz CLK-Class (W208) factory harness — no cutting",cat:"Parts"}},
 {key:"antenna-adapter",match:"antenna adapter",deal:{name:"Antenna Adapter — European DIN",price:8.49,list:14.99,store:"Amazon",code:"ANTADAPT",desc:"Factory antenna lead to aftermarket radio",compat:"Fits W208 factory antenna lead and most European DIN radios",cat:"Parts"}},
 {key:"removal-keys",match:"removal keys",deal:{name:"Radio Removal Keys — Mercedes (Pair)",price:6.99,list:12.99,store:"Amazon",code:"RADIOKEY",desc:"Release keys for factory radio slots",compat:"Fits Mercedes factory radios incl. W208 CLK",cat:"Parts"}},
 {key:"dash-kit",match:"dash kit",deal:{name:"Single-DIN Dash Kit — Mercedes W208",price:18.99,list:29.99,store:"Amazon",code:"DASHKIT",desc:"Dash mounting kit, single-DIN",compat:"Fits 1998–2003 Mercedes-Benz CLK-Class (W208) single-DIN openings",cat:"Parts"}},
 {key:"refrigerator-filter",match:"refrigerator water filter",productId:"fridge-filter"},
 {key:"vacuum-filter",match:"vacuum filter",productId:"vacuum-parts"},
 {key:"laptop-charger",match:"laptop charger",productId:"laptop-charger"},
 {key:"screen-protector",match:"screen protector",productId:"screen-protector"},
 {key:"alignment-tray",match:"alignment tray",productId:"screen-protector"},
 {key:"usb-c-cable",match:"USB-C cable",productId:"usb-c-cable"},
 {key:"phone-case",match:"phone case",productId:"phone-case"},
 {key:"earbud-tips",match:"earbud tips",productId:"earbud-parts"},
 {key:"air-fryer-basket",match:"air fryer basket",productId:"airfryer-parts"},
 {key:"crisper-tray",match:"crisper tray",productId:"airfryer-parts"},
 {key:"liners",match:"liners",productId:"airfryer-parts"},
 {key:"charcoal-filter",match:"charcoal filter",productId:"coffee-parts"},
 {key:"descaler",match:"descaler",productId:"coffee-parts"},
 {key:"carafe",match:"carafe",productId:"coffee-parts"},
 {key:"cartridge",match:"cartridge",productId:"printer-ink"},
 {key:"toner",match:"toner",productId:"printer-ink"},
 {key:"printer-ink",match:"printer ink",productId:"printer-ink"},
 {key:"hvac-filter",match:"HVAC filter",productId:"hvac-filter"},
 {key:"furnace-filter",match:"furnace filter",productId:"hvac-filter"},
 {key:"watch-band",match:"watch band",productId:"watch-parts"},
 {key:"magnetic-charger",match:"magnetic charger",productId:"watch-parts"},
 {key:"brushless-motor",match:"brushless motor",deal:{name:"RC Brushless Motor & 30A ESC Combo",price:69.95,list:99.95,store:"Amazon",code:"RCBUILD",desc:"Motor + ESC bundle for trainer builds",compat:"For RC trainer kits — match prop size and battery to the kit plan",cat:"Parts"}},
 {key:"servos",match:"servos",deal:{name:"Micro Servos — 9g, 4-Pack",price:15.99,list:24.99,store:"Amazon",code:"RCBUILD",desc:"Standard 9g micro servos for RC trainers",compat:"Fits most beginner RC trainer kits",cat:"Parts"}},
 {key:"propellers",match:"propellers",deal:{name:"RC Propellers — Assorted 4-Pack",price:9.99,list:16.99,store:"Walmart",code:"RCBUILD",desc:"Spare props in common trainer sizes",compat:"Check diameter/pitch against your kit plan before flying",cat:"Parts"}},
 {key:"balsa-kit",match:"balsa kit",deal:{name:"Beginner Balsa Airplane Kit",price:24.99,list:39.99,store:"Walmart",code:"BALSA25",desc:"Build-and-fly beginner kit",compat:"Beginner build — glue and covering sold separately",cat:"Parts"}}
];
var TERM_LOOKUP={};
TERM_DEFS.forEach(function(d){
  var escm=d.match.replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/[- ]/g,"[-\\s]");
  var suf=/s$/.test(d.match)?"":"(?:e?s)?";
  d.re=new RegExp("\\b"+escm+suf+"\\b","i");
  TERM_LOOKUP[d.key]=d;
});
function termDeal(def){
  if(def.productId){
    var p=null; PRODUCTS.forEach(function(x){ if(x.id===def.productId) p=x; });
    if(!p) return null;
    var best=p.offers[0]; p.offers.forEach(function(o){ if(o.price<best.price) best=o; });
    return {name:p.name,price:best.price,list:best.list,store:best.store,code:best.code,desc:best.desc,save:best.save,stores:p.offers.length,compat:(p.type==="part"?p.meta:null),productId:p.id,productName:p.name,cat:p.cat};
  }
  var d=def.deal;
  return {name:d.name,price:d.price,list:d.list,store:d.store,code:d.code,desc:d.desc,save:(typeof d.save==="number"?d.save:Math.round((1-d.price/d.list)*100)),stores:0,compat:d.compat||null,productId:null,productName:d.name,cat:d.cat||"Parts"};
}
function annotateOnce(root){
  var walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,{acceptNode:function(n){
    if(!n.nodeValue||!n.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
    var p=n.parentNode; if(!p||!p.closest) return NodeFilter.FILTER_REJECT;
    if(p.closest(".shop-term,button,a,script,style")) return NodeFilter.FILTER_REJECT;
    return NodeFilter.FILTER_ACCEPT;
  }});
  var node;
  while((node=walker.nextNode())){
    var text=node.nodeValue, best=null;
    TERM_DEFS.forEach(function(d){ var m=d.re.exec(text); if(m && (!best||m.index<best.index||(m.index===best.index&&m[0].length>best.len))) best={index:m.index,len:m[0].length,def:d,txt:m[0]}; });
    if(best){
      var frag=document.createDocumentFragment();
      var before=text.slice(0,best.index), after=text.slice(best.index+best.len);
      if(before) frag.appendChild(document.createTextNode(before));
      var b=document.createElement("button"); b.type="button"; b.className="shop-term"; b.textContent=best.txt; b.dataset.term=best.def.key; b.setAttribute("aria-haspopup","dialog"); b.title="See cheapest sample price for "+best.txt;
      frag.appendChild(b);
      if(after) frag.appendChild(document.createTextNode(after));
      node.parentNode.replaceChild(frag,node);
      return true;
    }
  }
  return false;
}
function annotateTerms(root){ if(!root) return; var guard=0; while(annotateOnce(root)&&guard<80){ guard++; } }
/* Pop-out card */
var termPop=document.createElement("div");
termPop.className="term-pop"; termPop.id="termPop"; termPop.setAttribute("role","dialog"); termPop.setAttribute("aria-label","Cheapest price pop-out");
document.body.appendChild(termPop);
var popTermBtn=null, popPinned=false, popDeal=null, popDef=null, popLoggedKey=null, hoverCloseTimer=null;
function positionTermPop(btn){
  var r=btn.getBoundingClientRect();
  termPop.style.visibility="hidden"; termPop.classList.add("open");
  var w=termPop.offsetWidth, h=termPop.offsetHeight;
  var left=Math.max(8,Math.min(r.left,window.innerWidth-w-8));
  var top=r.bottom+8; if(top+h>window.innerHeight-8) top=Math.max(8,r.top-h-8);
  termPop.style.left=left+"px"; termPop.style.top=top+"px"; termPop.style.visibility="";
}
function showTermPop(btn,pin){
  var def=TERM_LOOKUP[btn.dataset.term]; if(!def) return;
  var deal=termDeal(def); if(!deal) return;
  var wasOpen=termPop.classList.contains("open");
  popDeal=deal; popDef=def; popTermBtn=btn; if(pin) popPinned=true;
  termPop.innerHTML='<div style="display:flex;justify-content:space-between;gap:10px;align-items:start;"><b style="font-family:\'Archivo\';font-size:16px;line-height:1.25;">'+esc(deal.name)+'</b><button type="button" class="term-pop-close" aria-label="Close price pop-out">✕</button></div>'
    +'<div style="margin-top:8px;display:flex;gap:8px;align-items:center;flex-wrap:wrap;"><span class="sample-badge">Sample Price</span><span style="font-size:12.5px;color:var(--muted);">'+(deal.stores?("Cheapest of "+deal.stores+" stores compared here"):("Guide-item sample deal"))+'</span></div>'
    +'<div style="display:flex;align-items:baseline;gap:9px;margin-top:9px;flex-wrap:wrap;"><b style="font-family:\'Archivo\';font-size:27px;">'+money(deal.price)+'</b><s style="color:var(--muted);">'+money(deal.list)+'</s><span class="save-pill">Save '+deal.save+'%</span></div>'
    +'<div style="font-size:14px;margin-top:2px;">at <b>'+esc(deal.store)+'</b> • '+esc(deal.desc)+'</div>'
    +(deal.compat?'<div class="compat"><b>Fits:</b> '+esc(deal.compat)+'</div>':"")
    +'<div class="code-reveal" data-role="pop-code">'+esc(deal.code)+'</div>'
    +'<div style="display:flex;gap:8px;margin-top:12px;flex-wrap:wrap;"><button type="button" class="get-btn" data-role="pop-get" style="flex:1;">Get Free Coupon</button><button type="button" class="btn" data-role="pop-project">+ Project</button>'+(deal.productId?'<button type="button" class="btn" data-role="pop-compare">Compare all stores →</button>':"")+'</div>'
    +'<p style="font-size:12px;color:var(--muted);margin:10px 0 0;">Sample price for launch — the store\'s checkout total is final.</p>';
  positionTermPop(btn);
  var logKey=def.key+"|"+btn.textContent;
  if(!wasOpen||popLoggedKey!==logKey){
    popLoggedKey=logKey;
    trackEvent("term_popout",{product_id:deal.productId,product_name:deal.productName,store:deal.store,category:deal.cat,coupon_code:deal.code,price:deal.price,source:pin?"guide_term_tap":"guide_term_hover",detail:"Opened price pop-out from guide term “"+btn.textContent+"” — "+deal.name+" at "+deal.store+" "+money(deal.price)+" (sample)"});
  }
  termPop.querySelector(".term-pop-close").onclick=function(){ hideTermPop(); };
  termPop.querySelector('[data-role="pop-get"]').onclick=function(){
    var d=deal;
    hideTermPop();
    openCouponModal({store:d.store,code:d.code,title:d.desc,desc:d.desc,compat:d.compat,product_id:d.productId,product_name:d.productName,category:d.cat,price:d.price,list:d.list,save:d.save,source:"term_popout",logRetailer:true,walletLabel:d.productName+" @ "+d.store});
  };
  var projBtn=termPop.querySelector('[data-role="pop-project"]');
  if(projBtn){ projBtn.onclick=function(){
    var d=deal;
    addToProject({store:d.store,code:d.code,title:d.desc,product_id:d.productId,product_name:d.productName,price:d.price,list:d.list,save:d.save,use:(isOnlineOnlyStore(d.store)?"online":"both")});
    hideTermPop();
  }; }
  var cmpBtn=termPop.querySelector('[data-role="pop-compare"]');
  if(cmpBtn){ cmpBtn.onclick=function(){
    var p=null; PRODUCTS.forEach(function(x){ if(x.id===deal.productId) p=x; }); if(!p) return;
    hideTermPop(); if(window.__showListings){window.__showListings();} currentProduct=p; SUPPRESS_COMPARE_LOG=false; renderProductList(""); renderOffers("term_popout");
    document.getElementById("compare").scrollIntoView({behavior:"smooth"});
    showToast("Comparing all stores for "+p.name.split("—")[0].trim());
  }; }
}
function hideTermPop(){ termPop.classList.remove("open"); popPinned=false; popTermBtn=null; popLoggedKey=null; if(hoverCloseTimer){ clearTimeout(hoverCloseTimer); hoverCloseTimer=null; } }
document.addEventListener("click",function(e){
  var t=(e.target&&e.target.closest)?e.target.closest(".shop-term"):null;
  if(t){ e.preventDefault(); if(popTermBtn===t&&termPop.classList.contains("open")&&popPinned){ hideTermPop(); } else { showTermPop(t,true); } return; }
  if(termPop.classList.contains("open")&&!termPop.contains(e.target)) hideTermPop();
});
document.addEventListener("mouseover",function(e){
  if(!window.matchMedia("(hover:hover) and (pointer:fine)").matches) return;
  var t=(e.target&&e.target.closest)?e.target.closest(".shop-term"):null;
  if(t){ if(hoverCloseTimer){ clearTimeout(hoverCloseTimer); hoverCloseTimer=null; } if(popTermBtn!==t||!termPop.classList.contains("open")) showTermPop(t,false); }
});
document.addEventListener("mouseout",function(e){
  if(!window.matchMedia("(hover:hover) and (pointer:fine)").matches) return;
  if(popPinned||!termPop.classList.contains("open")) return;
  var fromTerm=e.target&&e.target.closest?e.target.closest(".shop-term"):null;
  var inPop=termPop.contains(e.target);
  if(!fromTerm&&!inPop) return;
  var to=e.relatedTarget;
  if(to&&(termPop.contains(to)||(to.closest&&to.closest(".shop-term")))) return;
  hoverCloseTimer=setTimeout(function(){ if(!popPinned) hideTermPop(); },300);
});
termPop.addEventListener("mouseenter",function(){ if(hoverCloseTimer){ clearTimeout(hoverCloseTimer); hoverCloseTimer=null; } });
termPop.addEventListener("mouseleave",function(){ if(!popPinned){ hoverCloseTimer=setTimeout(function(){ if(!popPinned) hideTermPop(); },300); } });
document.addEventListener("keydown",function(e){ if(e.key==="Escape") hideTermPop(); });
window.addEventListener("resize",function(){ if(termPop.classList.contains("open")) hideTermPop(); });
annotateTerms(document.getElementById("guides"));

renderProductList(""); renderOffers(); renderCoupons(); renderStores(); renderDevices(); renderWallet(); updateZipUI();
