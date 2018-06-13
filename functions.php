<?php
/*
Plugin Name: Divi Resizer
*/

function divi_resizer_enqueue() {
  if ( is_single() ) {
    wp_enqueue_style( 'divi-resizer-css', plugin_dir_url( __FILE__ ) . 'resizer.css' );
    wp_enqueue_script( 'divi-resizer-js', plugin_dir_url( __FILE__ ) . 'resizer.js', array( 'jquery' ), '1.0', true );
  }
}
add_action( 'wp_enqueue_scripts', 'divi_resizer_enqueue');
