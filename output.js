"use strict";

var _console = console.log;
var _output  = "";

function output( text )
{
    _output += "" + text + "\n";
}
console.log = output;

function onLoad()
{
    document.getElementById( 'output' ).innerHTML = _output;
}
