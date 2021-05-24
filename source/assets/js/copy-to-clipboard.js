/**
 * Copy to clipboard
 *
 * @constructor
 */
/*jshint esversion: 6 */
function copyToClipboard(text) {
    const cb = navigator.clipboard;
    cb.writeText(text);
}