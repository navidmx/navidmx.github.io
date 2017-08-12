//Loops images at the end
Reveal.addEventListener('slidechanged', function (event) {
    if (Reveal.isAutoSliding()){
        Reveal.configure({ controls: false });
    }
    if (Reveal.isLastSlide()){
        Reveal.slide(9);
    }
});
