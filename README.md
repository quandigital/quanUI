jQuery is required to run but not included. All other third party plugins are included:

# third party

* https://github.com/AdamPietrasiak/jquery.initialize
* https://github.com/appleboy/normalize.scss

# Caveats
After changing the value of a progress bar, the `change` event has to be triggered, e.g. `$(element).val(100).change();`