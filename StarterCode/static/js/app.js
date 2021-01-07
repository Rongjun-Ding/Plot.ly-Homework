var jsonfile = "samples.json";

d3.json(jsonfile).then(function(x) {
    //console.log(x)
});

// Define a function that will create metadata for given sample
function buildMetadata(sample) {

    // Read the json data

        // Parse and filter the data to get the sample's metadata

        // Specify the location of the metadata and update it

}

// Define a function that will create charts for given sample
function barGraph(sample) {

    // Read the json data

        // Parse and filter the data to get the sample's OTU data
        // Pay attention to what data is required for each chart

        // Create bar chart in correct location

        // Create bubble chart in correct location
    
}

function bubbleGraph(sample) {

}

// Define function that will run on page load
function init() {

    // Read json data
    var sampleid = d3.select("#selDataset");
    d3.json(jsonfile).then(function(data) {
        var samplnames = data.names;
            console.log(samplnames);
        // Parse and filter data to get sample names

        // Add dropdown option for each sample

    // Use first sample to build metadata and initial plots

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

