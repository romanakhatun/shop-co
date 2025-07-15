jQuery(document).ready(function ($) {
  $(".cart-drawer-close").on("click", function () {
    $(".cart-drawer").addClass("hidden");
  });

  $(".quick-view-btn").on("click", function () {
    let productId = $(this).data("product-id");
    // Open quick view modal for the selected product
  });
});
