import './style.css';
import 'swiper';
// import Swiper from 'swiper';

/**
 * Selector helper.
 *
 * Can be used similarly to JQuery.
 *
 * @param selector
 * @returns HTML or throw error
 */
const $ = selector => {
    const el = document.querySelector(selector);
    if (!el) throw Error(`Element cannot be found with ${selector} selector.`);
    return el;
};

/**
 * TODO
 */
window.addEventListener('scroll', () => {
    const $header = $('#header');
    if (window.screenY >= 15) $header.classList.add('activated');
    else $header.classList.remove('activated');
});

/**
 * Select #menu-toggle-icon
 *
 * @type {*|jQuery|HTMLElement}
 */
const $menuToggleIcon = $('#menu-toggle-icon');

/**
 * Toggle activated class on #menu click
 */
$menuToggleIcon.addEventListener('click', () => {
    const $menu = $('#menu');
    $menu.classList.toggle('activated');
    $menuToggleIcon.classList.toggle('activated');
});
