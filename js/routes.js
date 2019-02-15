'use strict';

page('/', () => app.showOnly('.home-page'));
page('/processing', () => app.showOnly('.processing-page'));
page('/products', () => app.showOnly('.products-page'));
page('/about', () => app.showOnly('.about-page'));
page('/testimonials', () => app.showOnly('.testimonials-page'));
page('/contact', () => app.showOnly('.contact-page'));
page('*', () => app.showOnly('.not-found'));
page();