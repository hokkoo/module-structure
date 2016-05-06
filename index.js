var grunt = require('grunt');
var prettyjson = require('prettyjson');
var path = require('path');
var fs = require('fs');
var ObjectInspect = require('object-inspect');
var util = require('util');
var deepInspect = require('deep-inspect');
var fis3 = require('fis3');
var jsBeautify = require('js-beautify').js_beautify;
var _ = require('lodash');
var xmind = require('xmind');
var phantomjs = require('phantomjs')
var childProcess = require('child_process')

var binPath = phantomjs.path

function Main () {
  var packageJson = grunt.file.readJSON('package.json');
  if(packageJson.main){
    // this.loadMainFile(packageJson.main);
  }
  // this.prettyShow(ObjectInspect(fis3));
  this.prettyShow(jsBeautifyObject(ObjectInspect(fis3)));
  // this.prettyShow(inspectWithDeep(this));
  // this.prettyShow(inspectWithUtil(this));
  /*if(this.main){
    this.prettyShow(packageJson);
  }*/
}
Main.prototype = {
  prettyShow : function(json){
    prettyShow(json);
  },
  loadMainFile : function(file){
    var filepath = path.resolve(file);
    if(isFile(filepath)){
      this.main = require(file);
    }
  }
}

function jsBeautifyObject(obj, opt){
  if(!_.isString(obj)){
    obj = JSON.stringify(obj);
  }
  console.log(obj.length);
  return jsBeautify(obj, {
    indent_size : 2
  });
}

function inspectWithDeep(obj, opt){
  deepInspect(obj, {
    showHidden : true,
    depth : 1,
    parentChainLevel : 2
  });
}

function inspectWithUtil(obj){
  return util.inspect(obj, {
    showHidden : true,
    depth : null,
    colors : true
  });
}
function isFile(file){
  if(!file) return false;
  var stat = fs.statSync(file);
  return stat && stat.isFile();
}


function prettyShow(json){
  console.log(prettyjson.render(json));
}


var main = new Main();
module.exports = main;