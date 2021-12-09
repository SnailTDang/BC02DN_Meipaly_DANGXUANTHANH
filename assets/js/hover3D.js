$(".blog__item").hover3d({
    selector: "img",
    sensitivity: -15,
    perspective   : 1000,
     // Helper class when mouse hover in the element
    hoverInClass  : "hover-in",

    // Helper class when mouse hover Out the element
    hoverOutClass : "hover-out",

    // Helper class when the mouse is hovering the element
    hoverClass    : "hover-3d"
});