# Running `und` as a background service

If you intend to run your node as a Validator on any of the public networks, then you will most likely need to 
permanently run `und` as a background service (as opposed to manually running `und start` and leaving a 
terminal window/SSH session open).

This can easily be done using `systemctl`, and setting up an appropriate service configuration.

The following is a generic \*nix guide, and may need adapting for your particular distribution.

Any text editor can be used to create the service configuration file, for example `nano`:

!!!include(mainchain/partials/systemd-service.md)!!!
