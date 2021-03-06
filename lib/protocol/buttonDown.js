/**
 *
 * Click and hold the left mouse button (at the coordinates set by the last moveto
 * command). Note that the next mouse-related command that should follow is buttonup.
 * Any other mouse command (such as click or another call to buttondown) will yield
 * undefined behaviour.
 *
 * @param {Number} button  Which button, enum: *{LEFT = 0, MIDDLE = 1 , RIGHT = 2}*. Defaults to the left mouse button if not specified.
 *
 * @see  https://code.google.com/p/selenium/wiki/JsonWireProtocol#/session/:sessionId/buttondown
 * @type protocol
 *
 */

var handleMouseButtonProtocol = require('../helpers/handleMouseButtonProtocol');

module.exports = function buttonDown (button) {

    return handleMouseButtonProtocol.call(
        this,
        '/session/:sessionId/buttondown',
        button
    );

};