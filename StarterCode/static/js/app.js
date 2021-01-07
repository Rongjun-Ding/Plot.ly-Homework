var jsonfile = "samples.json";

d3.json(jsonfile).then(function(x) {
    //console.log(x)
});

// Define a function that will create metadata for given sample
function buildMetadata(sample) {
    d3.json(jsonfile).then(function(data) {
    // Read the json data
    var samplemetadata = data.metadata;
    
        // Parse and filter the data to get the sample's metadata
        var filterdata = samplemetadata.filter(x => x.id == sample)
        //console.log(filterdata);
        // Specify the location of the metadata and update it
        var filterresults = filterdata[0];
        //console.log(filterresults);
       var sample_metadata = d3.select("#sample-metadata");
       sample_metadata.html("");
        Object.entries(filterresults).forEach(function([key, value]) {
            console.log(key,value);
            var row = sample_metadata.append("tr");           
            row.append("td").html(`<strong><font size = '2'>${key}</font></strong>:`);
            row.append("td").html(`<font size ='2'>${value}</font>`);
        });
            
        });
}


// Define a function that will create charts for given sample
function barGraph(xsamples) {
    d3.json(jsonfile).then(function(x) {
    // Read the json data
    var bacteria = x.samples
    //console.log(bacteriaBB);
        // Parse and filter the data to get the sample's OTU data
        // Pay attention to what data is required for each chart
        var filterBar = bacteria.filter(x => x.id == xsamples)
        var otuIDs = filterBar.map(x => x.otu_ids)
        var otuSVals = filterBar.map(x => x.sample_values)
        var otuLabls = filterBar.map(x => x.otu_labels)
            //console.log(otuIDs)
        // Create bar chart in correct location

        // Create bubble chart in correct location
    
})}

function bubbleGraph(xsamples) {

}

// Define function that will run on page load
function init() {

    // Read json data
    var sampleid = d3.select("#selDataset");
    d3.json(jsonfile).then(function(data) {
        var samplenames = data.names;
            console.log(samplenames);
        // Parse and filter data to get sample names
        samplenames.forEach((x) => {
            sampleid.append("option").text(x).property("value", x);
        });
        // Add dropdown option for each sample
        // Use first sample to build metadata and initial plots
        var firstname = samplenames[0];
        buildMetadata(firstname);
        barGraph(firstname);
        bubbleGraph(firstname);
    });
}
    

function optionChanged(newSample){

    // Update metadata with newly selected sample
    buildMetadata(newsample);
    barGraph(newsample);
    bubbleGraph(newsample);

    // Update charts with newly selected sample

}

// Initialize dashboard on page load
init();

