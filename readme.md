# hashMatch

Use #hash to show/hide/toggle an element that matches the hash in the URL bar.


## Installation

Put this script just after jQuery (v1.11.2) in your document

    <script src="your-js-folder/hashmatch.jquery.js"></script>

Then, call the plugin.

	$(function(){
	    $.hashmatch({
	        dataHash: true, 							
	        prefix: 'hash__',							
	        selector: '.header-widget-area section',	
	        excludes: '.excl-1, #excl-2',
	        transition: 'showHide'
	    });
	});

## Options

- `dataHash: true` 			// boolean: hash will be matched with the `data-hash` attribute.
- `prefix: ''`				// string: prefix of the class to check against the hash IF `dataHash` is `false`.
- `selector: ''`			// string: node selector to the element(s).
- `excludes: ''`			// string: classes or ids of elements to exclude separated by comma.
- `transition: 'showHide'`	// string: "showHide" or "slideToggle". Select transition type.

## Usage

Add the data-hash attribute or class with prefix to your elements.
	
	// Using data-hash: add hash symbol when using the data-hash option.
	<div data-hash="#hashme" class="my-class">My content here..</div> 

	// Using class: add a class with prefix specified in the option.
	<div class="hash__hashme">My content here..</div> 

## Credits

* Automation templates from [jQuery Boilerplate 3.5.0](https://github.com/jquery-boilerplate/jquery-boilerplate)


## License

License MIT
