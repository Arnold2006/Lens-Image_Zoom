<?php
/**
 * Plugin Name: Lens Image Zoom
 * Description: Show a lens magnifier on images with the class `zoom-lens`.
 * Version: 1.0
 * Author: 🔨🤖🔧 HTML + CSS + Javascript
 */

function liz_enqueue_assets() {
    wp_enqueue_style('liz-style', plugin_dir_url(__FILE__) . 'css/lens-style.css');
    wp_enqueue_script('liz-script', plugin_dir_url(__FILE__) . 'js/lens-script.js', [], '1.0', true);
}
add_action('wp_enqueue_scripts', 'liz_enqueue_assets');
