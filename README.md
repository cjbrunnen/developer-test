#Developer Test

This test is designed to demonstrate your technical, analytical and communication skills.

We have a built simple website that displays a list of TV episodes pulled from a remote API. There are a number of issues with this website that need to be fixed.

##How to take this test

* Fork this project to your own repository (https://help.github.com/articles/fork-a-repo/)
* Install the dependencies and get the code running (there is some advice below)
* Review the list of issues below. Read through each one and ensure you understand the problems before you dive into the code
* Fix each issue as best you can. Each fix should be contained in its own branch and you should open a Pull Request *against your own fork/master* for each issue. Instructions for how to format your Pull Request are below.

###Running this code

Clone your fork of this project to a development environment that can run PHP 5.5+. You must also have NPM installed.

Navigate to the directory you've just created and run `composer install`. If you do not have composer on your machine, you can use the version of composer included in this repository - run `php composer.phar install`.

The next step is to run `npm install` and then `./node_modules/.bin/gulp`

Start your server with the `public` directory as your document root. If you are using the built in PHP server you can navigate to `public` and run `php -S localhost:8000` to start a server.


###Notes on Pull Requests

* Guidance on [Creating a Pull Request](https://help.github.com/articles/creating-a-pull-request/)
* Each issue you work on should be in its own branch. The branch should be named sensibly so that the issue can be identified e.g. `issue1`
* Pull Requests should be opened against the Master branch of your own fork **(not against 3ev/developer-test)**
* Your Pull Request message should describe what has been fixed and include all the steps to test your work
* A template for Pull Request messages is included in `.github/PULL_REQUEST_TEMPLATE.md` and will automatically be used when opening a new Pull Request. Please follow this format with your own message.


#Issues to fix

###ISSUE#1
The episodes should be listed in order of their season and episode number. At the moment "Behind The Laughter - s11e22" is appearing first in the list

###ISSUE#2
Sometimes we see errors appear on the page such as `Uncaught exception 'GuzzleHttp\Exception\ServerException'`. Please show the user an error message such as "Sorry, there was an error. Please try again by reloading the page." and use one of the Bootstrap styles for displaying it.

###ISSUE#3
There are some visual differences between the design and the page as we see it in Chrome. Please correct the CSS so that the page matches the design exactly. You can find the design.png in the root of this project. In particular, there are issues with the font colours, sizing and spacing.

###ISSUE#4
Clicking on the thumbnail images displays a lovely popover tooltip. We would like to modify this functionality so only one tooltip can be displayed at a time. For example, if we click on an image to see a tooltip, clicking on a different image will close the first tooltip and show the new tooltip.