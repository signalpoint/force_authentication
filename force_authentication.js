var force_authentication_front_page;

/**
 * Implements hook_deviceready().
 */
function force_authentication_deviceready() {
  try {
    // When the device is connected, if the user is anonymous save a backup of
    // the path to the front page, then set the front page path to the user
    // login page.
    if (Drupal.user.uid == 0) {
      force_authentication_front_page = drupalgap.settings.front;
      drupalgap.settings.front = 'user/login';
    }
  }
  catch (error) {
    console.log('force_authentication_deviceready - ' + error);
  }
}

/**
 * Implements hook_services_postprocess().
 */
function force_authentication_services_postprocess(options, result) {
  try {
    // When the user login service resource is successful, set the front page
    // back to its original value.
    if (options.service == 'user') {
      if (options.resource == 'login') {
        drupalgap.settings.front = force_authentication_front_page;
      }
      else if (options.resource == 'logout') {
        drupalgap.settings.front = 'user/login';
      }
    }
  }
  catch (error) {
    console('force_authentication_services_postprocess - ' + error);
  }
}

