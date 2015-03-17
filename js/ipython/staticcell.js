//----------------------------------------------------------------------------
//  Copyright (C) 2013  The IPython Development Team
//
//  Distributed under the terms of the BSD License.  The full license is in
//  the file COPYING, distributed as part of this software.
//----------------------------------------------------------------------------

//============================================================================
// On document ready
//============================================================================

/**
 *
 *
 * @module Staticcell
 * @namespace staticcell
 * @class Staticcell
 */

define([
    'base/js/namespace',
    // 'notebook/namespace',
    'jquery',
    'base/js/utils',
    'base/js/keyboard',
    'services/config',
    'notebook/js/cell',
    'notebook/js/outputarea',
    'notebook/js/completer',
    'notebook/js/celltoolbar',
    'codemirror/lib/codemirror',
    'codemirror/mode/python/python',
    'notebook/js/codemirror-ipython'
], function(IPython,
    $,
    utils,
    keyboard,
    configmod,
    cell,
    outputarea,
    completer,
    celltoolbar,
    CodeMirror,
    cmpython,
    cmip
    ) {
    "use strict";

    console.log("Loading stuff!");

    var Staticcell = function () {};

    IPython.tooltip = new IPython.Tooltip()
	
	// Hokey creation of a kernel object
	var k = new IPython.Kernel("", "", IPython.notebook);

	// This kernel can be located anywhere
	k.ws_url = 'ws://jupyter-kernel.odewahn.com:16384'

	// Using the full path provided on launch
	k.kernel_id = "c9a7cbf7-67d9-4f42-8d98-f20173a584e7"
	k.kernel_url = "/api/kernels/" + k.kernel_id

	k.start_channels()
	
    var thecell = new IPython.CodeCell(k);
    $("div#thecell").append(thecell.element);
    // set some example input
    thecell.set_text(	
        "%pylab inline\n\n" + 
        "x = np.linspace(0, 10)\n\n" + 
        "plt.plot(x, np.sin(x), x, np.cos(x))\n\n"
    );
    // focus the cell
    thecell.select();
    
    // $(document).keydown(function (event) {
    //     var key = IPython.utils.keycodes;
        
    //     if (event.which === key.ESC) {
    //         // Intercept escape at highest level to avoid closing
    //         // websocket connection with firefox
    //         event.preventDefault();
    //     } else if (event.which === key.SHIFT) {
    //         // ignore shift keydown
    //         return true;
    //     }
    //     if (event.which === key.ENTER && event.shiftKey) {
    //         k.execute(thecell.get_text());
    //         return false;
    //     }
    // });
    
    // $("a#restart").click(function() {
    //     k.restart();
    // })
    // $("a#interrupt").click(function() {
    //     k.interrupt();
    // })


});

