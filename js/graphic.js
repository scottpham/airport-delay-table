//Change only the below two variables. Add dataTable options to the DataTable call 

//enter google sheets key here
var key = "1dEqelV_MTnpNOVKqE7Jw2Dpqpb4ClhYuyl7THrKD23E";


//"data" refers to the column name with no spaces and no capitals
//"title" is the column name as it appears in the published piece
//
var columns = [ 
    { "data": "airport", "title": "Airport" },
    { "data": "traffic-2013", "title": "Num. of Holiday Arrivals" },
    { "data": "avg-delay", "title": "Percent Delay > 45 Min." },
    { "data": "avg-cancellation", "title": "Percent Cancellation" }
	
];

$(document).ready(function() {

    function initializeTabletopObject(){
    Tabletop.init({
        key: key,
        callback: function(data, tabletop) { 
            writeTable(data); //call up datatables function
            }, 
        simpleSheet: true,
        debug: false
    });
}

    initializeTabletopObject();

    function writeTable(data){
        //select main div and put a table there
        $('#graphic').html('<table cellpadding="0" cellspacing="0" border="0" class="display table table-bordered table-striped" id="mySelection"></table>');

        //initilize the DataTable object and put settings in
        //
        $("#mySelection").DataTable({
            "data": data, //var where data is
            "columns": columns, //call up column object
            "order":[[1, "desc"]], //order on 2nd column
            "pagingType": "simple", //no page numbers
			"columnDefs": [
				{ "width": "20%", "targets": 0 }
			]
			});
        }
});
//end of writeTable



