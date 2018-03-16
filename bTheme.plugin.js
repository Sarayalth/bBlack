//META{"name":"bTheme"}*//

var testPlugin = function () {};

testPlugin.prototype.start = function () {
javascript: (function() {
    $('head').append('<link rel="stylesheet" href="https://rawgit.com/Elitehunter47/NC-331-Themes/master/NC331-Musiqpad/B%26W/monochrome.css" type="text/css"/>');
}());
};

testPlugin.prototype.load = function () {

};

testPlugin.prototype.unload = function () {}
;

testPlugin.prototype.stop = function () {

};

testPlugin.prototype.getName = function () {
    return "bTheme";
};

testPlugin.prototype.getDescription = function () {
    return "bTheme Installer";
};

testPlugin.prototype.getVersion = function () {
    return "0.0.pingas";
};

testPlugin.prototype.getAuthor = function () {
    return "[S]";
};