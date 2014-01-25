A DrupalGap module that sends anonymous users to the App's login page when the
app first loads. Also send users back to the login page when they logout.

Setup
=====

It is up to you to make sure no blocks are visible on the user login and
registration pages within your app. That way, app users can't navigate away from
the login or registration pages within your app. Block visibility settings are
specified in your settings.js file.

For exapmle, you probably don't want the main menu to show up for anonymous
users if you are going to force authentication. So you could do something like
this in your settings.js file:

`
drupalgap.settings.blocks.my_theme = {
  navigation: {
    main_menu: {
      roles: {
        value: ['anonymous user'],
        mode: 'exclude',
      }
    }
  }
};
`

To learn more about themes, regions and blocks, visit the DrupalGap getting
started guide: http://www.drupalgap.org/get-started
