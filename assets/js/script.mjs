import { readFile } from 'node:fs';

readFile('elementor-new.html', 'utf8', (err, html) => {
  if (err) {
    console.error(err);
    return;
  }
  
  var classes = []; // empty array

  html.replace(/class=['"][^'"]+/g, function(m){ // https://regex101.com/r/jD0wX1/1
      classes = classes.concat(m.match(/[^'"]+$/)[0].split(' ')); // https://regex101.com/r/jD0wX1/2
  }); // take all classes

  classes = classes.filter(function(item, pos) {
      return classes.indexOf(item) == pos;
  }); // return unique classes


  classes = classes.filter(function(item) {
    return !item.startsWith("bi");
}); // return unique classes

  console.log(classes); // Run code snippet -> then press f12 to see the array

});

