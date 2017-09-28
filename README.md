# jQuery Datatables in React

[from SOF](https://stackoverflow.com/questions/46459621/jquery-datatables-from-datatables-builder-into-react-component)

There are two projects here. `withoutReact` shows a basic HTML, CSS, JS with all the features working for reference. `withReact` is an attempt to get thoese features working in a module.


## Notes

This is an attempt to make a working template of using jQuery Datatables in a react app. The following conditions need to be true:

1. Should not require npm install of bootstrap
2. All standard [extensions](https://datatables.net/extensions/index) should work

Currently 1 is working but most of 2 is not working.



Here's npm suggested install using the builder from datatables.net:

```  
npm install --save jszip  
npm install --save pdfmake  
npm install --save datatables.net-bs 
npm install --save datatables.net-autofill-bs  
npm install --save datatables.net-buttons-bs  
npm install --save datatables.net-colreorder-bs  
npm install --save datatables.net-fixedcolumns-bs  
npm install --save datatables.net-fixedheader-bs  
npm install --save datatables.net-keytable-bs  
npm install --save datatables.net-responsive-bs  
npm install --save datatables.net-rowgroup-bs  
npm install --save datatables.net-rowreorder-bs  
npm install --save datatables.net-scroller-bs  
npm install --save datatables.net-select-bs  
```

And then the requre...with a note at very bottom that says "Please note that the above is shown for CommonJS modules. If you are using an AMD loader, you do not need to execute the required library (i.e. remove the trailing ())."

```  
require( 'jszip' );  
require( 'pdfmake' );  
require( 'datatables.net-bs' )();  
require( 'datatables.net-autofill-bs' )();  
require( 'datatables.net-buttons-bs' )();  
require( 'datatables.net-buttons/js/buttons.colVis.js' )();  
require( 'datatables.net-buttons/js/buttons.flash.js' )();
require( 'datatables.net-buttons/js/buttons.html5.js' )();  
require( 'datatables.net-buttons/js/buttons.print.js' )();  
require( 'datatables.net-colreorder-bs' )();  
require( 'datatables.net-fixedcolumns-bs' )();  
require( 'datatables.net-fixedheader-bs' )();  
require( 'datatables.net-keytable-bs' )();  
require( 'datatables.net-responsive-bs' )();  
require( 'datatables.net-rowgroup-bs' )();  
require( 'datatables.net-rowreorder-bs' )();  
require( 'datatables.net-scroller-bs' )();  
require( 'datatables.net-select-bs' )();  
```  

Look at the App.js to see what i've changed so far to try to get this version to work. Right now the following work:

- CSV
- COPY
- PRINT
- Search
- Scroll
- Responsive

The following don't work:

- Excel (won't even populate button)
- KeyTable
- AutoFill
- Select (footer shows 1 row selected but no change in table view)
- PDF (nothing happens)
- COPY (works but css/overlay broken)
- CSS broken (gap between header and table data, header icons missing, default search not on right)
