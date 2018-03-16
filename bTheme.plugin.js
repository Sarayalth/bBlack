//META{"name":"bBlack"}*//

var testPlugin = function () {};

testPlugin.prototype.start = function () {
javascript: (function() {
    $('head').append('<link rel="stylesheet" href="https://cdn.rawgit.com/Sarayalth/bBlack/master/bBlack.theme.css" type="text/css"/>');
}());
};

testPlugin.prototype.getName = function () {
    return "bBlack";
};

testPlugin.prototype.getDescription = function () {
    return "bBlack is a REAL night mode for Discord";
};

testPlugin.prototype.getVersion = function () {
    return "0.0.¯\_(ツ)_/¯";
};

testPlugin.prototype.getAuthor = function () {
    return "[S]";
};