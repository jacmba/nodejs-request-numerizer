'use strict';

/**
 * Function to parse numeric strings and convert them into numbers
 * @param {object} req - Client request object
 * @param {object} req.params - Request parameters
 * @param {object} res - Server response object
 * @param {function} next - Server chain callback
 */
function RequestNumerizer(req, res, next) {
    // Go through all request params fields
    for (var field in req.params) {
        if (req.params.hasOwnProperty(field)) {
            if (!isNaN(req.params[field])) {
                req.params[field] = Number(req.params[field]);
            }
        }
    }

    next();
}

module.exports = RequestNumerizer;