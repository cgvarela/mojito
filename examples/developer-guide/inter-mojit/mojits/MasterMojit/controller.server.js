/*
 * Copyright (c) 2011-2012, Yahoo! Inc.  All rights reserved.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */

/*jslint anon:true, sloppy:true, nomen:true*/

YUI.add('MasterMojit', function (Y, NAME) {

    Y.namespace('mojito.controllers')[NAME] = {

        init: function (config) {
            this.config = config;
        },
        "index": function (actionContext) {
            actionContext.composite.done();
        }

    };
}, '0.0.1', {requires: []});
