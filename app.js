// Flavor switcher. Each flavor's card is already in the HTML; this only
// decides which one is visible and repaints the page field to match.
(function () {
  var tabs = document.querySelectorAll('.flavor-tab');
  var cards = document.querySelectorAll('.card');

  var themeColor = document.querySelector('meta[name="theme-color"]');

  function show(flavor) {
    document.body.dataset.flavor = flavor;
    themeColor.content = getComputedStyle(document.body).getPropertyValue('--field').trim();
    cards.forEach(function (c) { c.hidden = c.dataset.flavor !== flavor; });
    tabs.forEach(function (t) {
      t.setAttribute('aria-pressed', String(t.dataset.flavor === flavor));
    });
  }

  tabs.forEach(function (t) {
    t.addEventListener('click', function () { show(t.dataset.flavor); });
  });

  // ponytail: checkout isn't wired yet. Point this at the store's SDK
  // (Shopify Buy Button, Stripe checkout) using the button's data-sku.
  document.querySelectorAll('.cta').forEach(function (btn) {
    btn.addEventListener('click', function () {
      console.log('add to cart:', btn.dataset.sku);
    });
  });
})();
