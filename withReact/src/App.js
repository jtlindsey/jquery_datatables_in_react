import React, { Component } from 'react';
// import {findDOMNode} from 'react-dom';
// boostrap is scoped because the app that this will be using
// cannot have bootstrap in entire app but is ok in table
import './styling/bootstrap/css/bootstrap.min.css'
import './styling/font-awesome-4.7.0/css/font-awesome.min.css'


// import './styling/bootstrap/js/bootstrap.min.js'

import $ from 'jquery';
window.jQuery = $;
window.$ = $;
global.jQuery = $;


$.DataTable = require( 'datatables.net-bs' );



// $.DataTable = require( 'datatables.net-bs' );



require( 'jszip' );
// require( 'pdfmake' );
require('pdfmake/build/pdfmake.js');
require('pdfmake/build/vfs_fonts.js');

require( 'datatables.net-autofill' );
// require( 'datatables.net-autofill-bs' );
require( 'datatables.net-buttons-bs' );
require( 'datatables.net-buttons/js/buttons.colVis.js' );
require( 'datatables.net-buttons/js/buttons.flash.js' );
require( 'datatables.net-buttons/js/buttons.html5.js' );
require( 'datatables.net-buttons/js/buttons.print.js' );
// require( 'datatables.net-colreorder-bs' );
require( 'datatables.net-colreorder' );
// require( 'datatables.net-fixedheader-bs' );
// require( 'datatables.net-fixedheader' );
// require( 'datatables.net-keytable-bs' );
require( 'datatables.net-keytable' );
require( 'datatables.net-responsive-bs' );
// require( 'datatables.net-rowgroup-bs' );
require( 'datatables.net-rowgroup' );
// require( 'datatables.net-rowreorder-bs' );
require( 'datatables.net-rowreorder' );
// require( 'datatables.net-scroller-bs' );
require( 'datatables.net-scroller' );
// require( 'datatables.net-select-bs' );
require( 'datatables.net-select' );

/*


https://datatables.net/download/npm
https://datatables.net/download/

npm install --save jquery jszip pdfmake datatables.net-bs datatables.net-autofill-bs datatables.net-buttons-bs datatables.net-colreorder-bs datatables.net-fixedheader-bs datatables.net-keytable-bs datatables.net-responsive-bs datatables.net-rowgroup-bs datatables.net-rowreorder-bs datatables.net-scroller-bs datatables.net-select-bs

other useful links
https://datatables.net/reference/option/dom

*/

const names = require('./MOCK_DATA');



function atable() {
  let tableName = '#testtable';

  // setup search
  $(`${tableName} thead tr:eq(1) th.search-it`).each( function () {
    $(this).html( '<input type="text" class="search-column" placeholder="&#xf0b0;" style="font-family: Arial, FontAwesome" />' );
  });

  // apply search
  $(`${tableName} thead input.search-column`).on( 'keyup change', function () {
    table.column( $(this).parent().index()+':visible' )
      .search( this.value ).draw();
  });

  let tableBtns = [
    {
      text: 'Clear Filters',
      className: "clr-filters-btn",
      action: function ( e, dt, node, config ) {
        // make function clear all text inputs on page via jquery
        clearfilter()          
      }
    },
    {
      extend: 'copyHtml5',
      text: 'COPY',
    },
    {
      extend: 'csvHtml5',
      text: 'CSV',
    },
    {
      extend: 'excelHtml5',
      text: 'Excel',
    },
    {
      extend: 'pdfHtml5',
      text: 'PDF',
    },
    {
      extend: 'print',
      text: 'Print',
    }
  ];


  // datatables error handler
  $.fn.dataTable.ext.errMode = 'throw';//prevents error from popup

  // initialize table
  let table = $(tableName).DataTable( {
    dom: 'Bfrti',
    orderCellsTop: true, //for column search
    colReorder: true,
    select: true,
    keys: true,
    autoFill: {
      focus: 'click',
      alwaysAsk: true
    },
    language: {
      zeroRecords: "No matching records found",
      emptyTable: "No data available"
    },
    scrollX: true,
    scroller: true,
    scrollY:        '60vh',
    scrollCollapse: true,
    data: names,
    order: [[ 0, "asc" ]],
    // order: [[ 0, "desc" ]],
    columns: [
      { "data": "name", render: function (data, type, row) {return data;}},
      { "data": "nickname", render: function (data, type, row) {return data;}},
    ],
    buttons: tableBtns,
    columnDefs: [
      { width: '1%', targets: 0 },
      // {
      //   targets: -1,// removes last column from original view
      //   visible: false
      // }
    ],
  });

  function clearfilter() {
    $('.search-it').find('input:text').val('');
    table
     .search( '' )
     .columns().search( '' )
     .draw();
  };


  new $.fn.dataTable.Buttons( table, {
    buttons: [
      {
        extend: 'columnsToggle',
        text: 'Toggle Cols',
      }
    ]
  });
  table.buttons( 1, null ).container().appendTo('#toggle')
}





class Table extends Component { 
    // componentDidMount() {
    //     $(this.refs.main).DataTable({
    //        dom: '<"data-table-wrapper"t>',
    //        data: this.props.names,
    //        columns,
    //        ordering: false
    //     });

    // }  
    // componentWillUnmount(){
    //    $('.data-table-wrapper')
    //    .find('table')
    //    .DataTable()
    //    .destroy(true);
    // }

  componentDidMount() {
    // this.$el = $(this.el);
    // this.$el.DataTable();
    // atable(this.$el, window.$)

    // const el = findDOMNode(this.refs.tbl);
    atable()
  }
  
  componentWillUnmount() {
    this.$el.DataTable('destroy');
  }



  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div className='bootstrap-scope'>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12"> 
              <h2> Example </h2> 
              <div>Toggle:</div><div id="toggle"></div>
              <table ref="tbl" className="table table-condensed table-bordered table-striped table-hover" id="testtable" width="100%">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Nickname</th>
                  </tr>
                  <tr className="filterTR">{/*<!-- extra header row for search --> */}
                    <th className="search-it"></th>
                    <th className="search-it"></th> 
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}










class App extends Component {
  render() {
    return <Table names={names} />
  }
}

export default App;
