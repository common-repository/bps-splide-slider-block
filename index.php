<?php

/*
  Plugin Name: BPS Slider Block Using Splide
  Description: Custom block for Splide slider with customizable parameters
  Version: 1.1.1
  Author: BPS
  Text Domain: bps-slider-block
  Domain Path: /languages
*/

if (!defined('ABSPATH')) {
  exit;
}

class SplideBlock {
  function __construct() {

    $this->sbp_image_size_name = 'splide-slider';
    $this->sbp_image_width = '900';
    $this->sbp_image_height = '600';
    $this->sbp_type = 'loop';
    $this->sbp_rewind = '1';
    $this->sbp_height_ratio = '0.6';
    $this->sbp_gap = '20';
    $this->sbp_padding = '20';
    $this->sbp_breakpoint = '';
    $this->sbp_breakpoint_height_ratio = '1';
    $this->sbp_breakpoint_gap = '0';
    $this->sbp_breakpoint_padding = '0';

    $this->splide_slider_type_options = ['slide', 'loop', 'fade'];

    add_image_size($this->sbp_image_size_name, get_option('sbp_image_width') ? get_option('sbp_image_width') : $this->sbp_image_width, get_option('sbp_image_height') ? get_option('sbp_image_height') : $this->sbp_image_height, true);

    add_action('init', array($this, 'onInit'));
    add_action('admin_menu', array($this, 'adminPage'));
    add_action('admin_init', array($this, 'settings'));
  }

  function onInit() {

    load_plugin_textdomain('bps-slider-block', false, dirname(plugin_basename(__FILE__)) . '/languages');

    wp_register_style('sbp_style', plugin_dir_url(__FILE__) . 'build/block.css');
    wp_register_script('sbp_script', plugin_dir_url(__FILE__) . 'build/block.js', array('wp-blocks', 'wp-components', 'wp-editor', 'wp-element', 'wp-i18n'));

    wp_set_script_translations('sbp_script', 'bps-slider-block', plugin_dir_path(__FILE__) . 'languages');

    register_block_type('bps-blocks/slider', array(
      'editor_style'      => 'sbp_style',
      'editor_script'     => 'sbp_script',
      'render_callback'   => array($this, 'render'),
      // Attributes are loaded in following order:
      // - Default values as specified in constructor
      // - Values changed via settings page
      // - Values specified in custom post type block template
      // - Values set for a specific block via block controls
      // Last 2 are applied on save of post but reset by changes on settings page
      'attributes'        => array(
        'images'            => array(
          'type'              => 'array',
          'default'           => array(
            array(
              'id' => '',
              'front_url' => '',
              'block_url' => ''
            )
          )
        ),
        'type'              => array(
          'type'              => 'string',
          'default'           => get_option('sbp_type') ? get_option('sbp_type') : $this->sbp_type
        ),
        'rewind'            => array(
          'type'              => 'bool',
          'default'           => (get_option('sbp_rewind') || get_option('sbp_rewind') === '0') ? get_option('sbp_rewind') : $this->sbp_rewind,
        ),
        'height_ratio'      => array(
          'type'              => 'number',
          'default'           => get_option('sbp_height_ratio') ? get_option('sbp_height_ratio') : $this->sbp_height_ratio,
        ),
        'gap'               => array(
          'type'              => 'number',
          'default'           => (get_option('sbp_gap') || get_option('sbp_gap') === '0') ? get_option('sbp_gap') : $this->sbp_gap,
        ),
        'padding'           => array(
          'type'              => 'number',
          'default'           => (get_option('sbp_padding') || get_option('sbp_padding') === '0') ? get_option('sbp_padding') : $this->sbp_padding,
        ),
        'breakpoint'        => array(
          'type'              => 'number',
          'default'           => get_option('sbp_breakpoint') ? get_option('sbp_breakpoint') : $this->sbp_breakpoint,
        ),
        'breakpoint_height_ratio' => array(
          'type'              => 'number',
          'default'           => get_option('sbp_breakpoint_height_ratio') ? get_option('sbp_breakpoint_height_ratio') : $this->sbp_breakpoint_height_ratio,
        ),
        'breakpoint_gap'    => array(
          'type'              => 'number',
          'default'           => (get_option('sbp_breakpoint_gap') || get_option('sbp_breakpoint_gap') === '0') ? get_option('sbp_breakpoint_gap') : $this->sbp_breakpoint_gap,
        ),
        'breakpoint_padding' => array(
          'type'              => 'number',
          'default'           => (get_option('sbp_breakpoint_padding') || get_option('sbp_breakpoint_padding') === '0') ? get_option('sbp_breakpoint_padding') : $this->sbp_breakpoint_padding,
        ),
      )
    ));
  }

  function render($attributes) {
    if (!is_admin()) {
      wp_enqueue_style('sbp_frontend_style', plugin_dir_url(__FILE__) . 'build/frontend.css');
      wp_enqueue_script('sbp_frontend_script', plugin_dir_url(__FILE__) . 'build/frontend.js', array('wp-element'));
    }

    if (array_key_exists('images', $attributes)) {
      foreach ($attributes['images'] as $key => $image) {
        if (array_key_exists('id', $image)) {
          $image_id = $image['id'];
          if (wp_get_attachment_metadata($image_id)) {
            $image_data = wp_get_attachment_metadata($image_id);
            if (array_key_exists($this->sbp_image_size_name, $image_data['sizes'])) {
              $attributes['images'][$key]['front_url'] = wp_get_upload_dir()['url'] . '/' . $image_data['sizes'][$this->sbp_image_size_name]['file'];
            }
          }
        }
      }
    }

    ob_start() ?>
    <div class="splide_element">
      <pre style="display: none;"><?php echo wp_json_encode($attributes) ?></pre>
    </div>
  <?php return ob_get_clean();
  }

  function adminPage() {
    add_options_page('Splide Slider Block ' . esc_html__('Settings', 'bps-slider-block'), 'Splide Block', 'manage_options', 'splide-settings', array($this, 'adminPageHTML'));
  }

  function settings() {

    // Main settings
    add_settings_section('sbp_main_section', null, null, 'splide-settings');

    add_settings_field('sbp_image_width', esc_html__('Image width in px', 'bps-slider-block'), array($this, 'imageWidthHTML'), 'splide-settings', 'sbp_main_section');
    register_setting('splide_block_plugin', 'sbp_image_width', array('sanitize_callback' => array($this, 'sanitizeImageWidth'), 'default' => $this->sbp_image_width));

    add_settings_field('sbp_image_height', esc_html__('Image height in px', 'bps-slider-block'), array($this, 'imageHeightHTML'), 'splide-settings', 'sbp_main_section');
    register_setting('splide_block_plugin', 'sbp_image_height', array('sanitize_callback' => array($this, 'sanitizeImageHeight'), 'default' => $this->sbp_image_height));

    add_settings_field('sbp_type', esc_html__('Type', 'bps-slider-block'), array($this, 'typeHTML'), 'splide-settings', 'sbp_main_section');
    register_setting('splide_block_plugin', 'sbp_type', array('sanitize_callback' => array($this, 'sanitizeType'), 'default' => $this->sbp_type));

    add_settings_field('sbp_rewind', esc_html__('Rewind', 'bps-slider-block'), array($this, 'rewindHTML'), 'splide-settings', 'sbp_main_section');
    register_setting('splide_block_plugin', 'sbp_rewind', array('sanitize_callback' => array($this, 'sanitizeRewind'), 'default' => $this->sbp_rewind));

    add_settings_field('sbp_height_ratio', esc_html__('Height ratio', 'bps-slider-block'), array($this, 'heightRatioHTML'), 'splide-settings', 'sbp_main_section');
    register_setting('splide_block_plugin', 'sbp_height_ratio', array('sanitize_callback' => array($this, 'sanitizeHeightRatio'), 'default' => $this->sbp_height_ratio));

    add_settings_field('sbp_gap', esc_html__('Gap in px', 'bps-slider-block'), array($this, 'gapHTML'), 'splide-settings', 'sbp_main_section');
    register_setting('splide_block_plugin', 'sbp_gap', array('sanitize_callback' => array($this, 'sanitizeGap'), 'default' => $this->sbp_gap));

    add_settings_field('sbp_padding', esc_html__('Padding in %', 'bps-slider-block'), array($this, 'paddingHTML'), 'splide-settings', 'sbp_main_section');
    register_setting('splide_block_plugin', 'sbp_padding', array('sanitize_callback' => array($this, 'sanitizePadding'), 'default' => $this->sbp_padding));

    // Optional breakpoint settings
    add_settings_section('sbp_breakpoint_section', esc_html__('Optional breakpoint settings', 'bps-slider-block'), null, 'splide-settings');

    add_settings_field('sbp_breakpoint', esc_html__('Breakpoint in px', 'bps-slider-block'), array($this, 'breakpointHTML'), 'splide-settings', 'sbp_breakpoint_section');
    register_setting('splide_block_plugin', 'sbp_breakpoint', array('sanitize_callback' => array($this, 'sanitizeBreakpoint'), 'default' => $this->sbp_breakpoint));

    add_settings_field('sbp_breakpoint_height_ratio', esc_html__('Height ratio', 'bps-slider-block'), array($this, 'breakpointHeightRatioHTML'), 'splide-settings', 'sbp_breakpoint_section');
    register_setting('splide_block_plugin', 'sbp_breakpoint_height_ratio', array('sanitize_callback' => array($this, 'sanitizeBreakpointHeightRatio'), 'default' => $this->sbp_breakpoint_height_ratio));

    add_settings_field('sbp_breakpoint_gap', esc_html__('Gap in px', 'bps-slider-block'), array($this, 'breakpointGapHTML'), 'splide-settings', 'sbp_breakpoint_section');
    register_setting('splide_block_plugin', 'sbp_breakpoint_gap', array('sanitize_callback' => array($this, 'sanitizeBreakpointGap'), 'default' => $this->sbp_breakpoint_gap));

    add_settings_field('sbp_breakpoint_padding', esc_html__('Padding in %', 'bps-slider-block'), array($this, 'breakpointPaddingHTML'), 'splide-settings', 'sbp_breakpoint_section');
    register_setting('splide_block_plugin', 'sbp_breakpoint_padding', array('sanitize_callback' => array($this, 'sanitizeBreakpointPadding'), 'default' => $this->sbp_breakpoint_padding));
  }

  // Main settings functions

  function imageWidthHTML() { ?>
    <input type="text" name="sbp_image_width" value="<?php echo esc_attr(get_option('sbp_image_width')) ?>">
  <?php }

  function imageHeightHTML() { ?>
    <input type="text" name="sbp_image_height" value="<?php echo esc_attr(get_option('sbp_image_height')) ?>">
  <?php }

  function typeHTML() { ?>
    <select name="sbp_type">
      <?php foreach ($this->splide_slider_type_options as $option) { ?>
        <option value="<?php echo $option ?>" <?php selected(get_option('sbp_type'), $option) ?>><?php echo $option ?></option>
      <?php } ?>
    </select>
  <?php }

  function rewindHTML() { ?>
    <input type="checkbox" name="sbp_rewind" value="1" <?php checked(get_option('sbp_rewind', '1')) ?>>
  <?php }

  function heightRatioHTML() { ?>
    <input type="text" name="sbp_height_ratio" value="<?php echo esc_attr(get_option('sbp_height_ratio')) ?>">
  <?php }

  function gapHTML() { ?>
    <input type="text" name="sbp_gap" value="<?php echo esc_attr(get_option('sbp_gap')) ?>">
  <?php }

  function paddingHTML() { ?>
    <input type="text" name="sbp_padding" value="<?php echo esc_attr(get_option('sbp_padding')) ?>">
  <?php }

  function sanitizeImageWidth($input) {
    if (is_numeric($input) && $input >= 100 && $input <= 1000) {
      if ($input != get_option('sbp_image_width')) {
        add_settings_error('sbp_image_width', 'sbp_image_width_warning', esc_html__('Don\'t forget to regenerate thumbnails to apply the width change to existing images', 'bps-slider-block'), 'warning');
      }
      return sanitize_text_field($input);
    } else {
      add_settings_error('sbp_image_width', 'sbp_image_width_error', esc_html__('Image width value must be a number between 100 and 1000', 'bps-slider-block'));
      return get_option('sbp_image_width');
    }
  }

  function sanitizeImageHeight($input) {
    if (is_numeric($input) && $input >= 100 && $input <= 1000) {
      if ($input != get_option('sbp_image_height')) {
        add_settings_error('sbp_image_height', 'sbp_image_height_warning', esc_html__('Don\'t forget to regenerate thumbnails to apply the height change to existing images', 'bps-slider-block'), 'warning');
      }
      return sanitize_text_field($input);
    } else {
      add_settings_error('sbp_image_height', 'sbp_image_height_error', esc_html__('Image height value must be a number between 100 and 1000', 'bps-slider-block'));
      return get_option('sbp_image_height');
    }
  }

  function sanitizeType($input) {
    if (!in_array($input, $this->splide_slider_type_options)) {
      add_settings_error('sbp_type', 'sbp_type_error', esc_html__('Invalid type value', 'bps-slider-block'));
      return get_option('sbp_type');
    }
    return sanitize_text_field($input);
  }

  function sanitizeRewind($input) {
    if ($input != '1') {
      $input = '0';
    }
    return sanitize_text_field($input);
  }

  function sanitizeHeightRatio($input) {
    if (is_numeric($input) && $input >= 0 && $input <= 1) {
      return sanitize_text_field($input);
    } else {
      add_settings_error('sbp_height_ratio', 'sbp_height_ratio_error', esc_html__('Height ratio value must be a number between 0 and 1', 'bps-slider-block'));
      return get_option('sbp_height_ratio');
    }
  }

  function sanitizeGap($input) {
    if (is_numeric($input) && $input >= 0 && $input <= 100) {
      return sanitize_text_field($input);
    } else {
      add_settings_error('sbp_gap', 'sbp_gap_error', esc_html__('Gap value must be a number between 0 and 100', 'bps-slider-block'));
      return get_option('sbp_gap');
    }
  }

  function sanitizePadding($input) {
    if (is_numeric($input) && $input >= 0 && $input <= 30) {
      return sanitize_text_field($input);
    } else {
      add_settings_error('sbp_padding', 'sbp_padding_error', esc_html__('Padding value must be a number between 0 and 30', 'bps-slider-block'));
      return get_option('sbp_padding');
    }
  }

  // Optional breakpoint settings functions

  function breakpointHTML() { ?>
    <input type="text" name="sbp_breakpoint" value="<?php echo esc_attr(get_option('sbp_breakpoint')) ?>">
  <?php }

  function breakpointHeightRatioHTML() { ?>
    <input type="text" name="sbp_breakpoint_height_ratio" value="<?php echo esc_attr(get_option('sbp_breakpoint_height_ratio')) ?>">
  <?php }

  function breakpointGapHTML() { ?>
    <input type="text" name="sbp_breakpoint_gap" value="<?php echo esc_attr(get_option('sbp_breakpoint_gap')) ?>">
  <?php }

  function breakpointPaddingHTML() { ?>
    <input type="text" name="sbp_breakpoint_padding" value="<?php echo esc_attr(get_option('sbp_breakpoint_padding')) ?>">
  <?php }

  function sanitizeBreakpoint($input) {
    if ((is_numeric($input) && $input >= 100 && $input <= 1500) || $input == "") {
      return sanitize_text_field($input);
    } else {
      add_settings_error('sbp_breakpoint', 'sbp_breakpoint_error', esc_html__('Breakpoint value must be a number between 100 and 1500 or leave the field empty if you don\'t want a breakpoint', 'bps-slider-block'));
      return get_option('sbp_breakpoint');
    }
  }

  function sanitizeBreakpointHeightRatio($input) {
    if (is_numeric($input) && $input >= 0 && $input <= 1) {
      return sanitize_text_field($input);
    } else {
      add_settings_error('sbp_breakpoint_height_ratio', 'sbp_breakpoint_height_ratio_error', esc_html__('Breakpoint height ratio value must be a number between 0 and 1', 'bps-slider-block'));
      return get_option('sbp_breakpoint_height_ratio');
    }
  }

  function sanitizeBreakpointGap($input) {
    if (is_numeric($input) && $input >= 0 && $input <= 100) {
      return sanitize_text_field($input);
    } else {
      add_settings_error('sbp_breakpoint_gap', 'sbp_breakpoint_gap_error', esc_html__('Gap value must be a number between 0 and 100', 'bps-slider-block'));
      return get_option('sbp_breakpoint_gap');
    }
  }

  function sanitizeBreakpointPadding($input) {
    if (is_numeric($input) && $input >= 0 && $input <= 30) {
      return sanitize_text_field($input);
    } else {
      add_settings_error('sbp_breakpoint_padding', 'sbp_breakpoint_padding_error', esc_html__('Breakpoint padding value must be a number between 0 and 30', 'bps-slider-block'));
      return get_option('sbp_breakpoint_padding');
    }
  }

  // Other functions

  function adminPageHTML() { ?>
    <div class="wrap">
      <h1>Splide Slider Block <?php esc_html_e('Settings', 'bps-slider-block') ?></h1>
      <form action="options.php" method="post">
        <?php
        settings_fields('splide_block_plugin');
        do_settings_sections('splide-settings');
        submit_button();
        ?>
      </form>
    </div>
<?php }
}

$splideBlock = new SplideBlock();
