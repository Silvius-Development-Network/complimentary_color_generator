function complimentaryColor(color) {
    var array = color.split("("); //makes an array : hsl and values
    var defaultValues = array[1].split(","); // makes an array from values

    //setting the condition for values
    var theComplimentaryValue = defaultValues[0] >= 180 ? defaultValues[0]-180 : parseInt(defaultValues[0])+180;

    //overwrite color value 
    defaultValues[0] = theComplimentaryValue;

    var joinValues = defaultValues.join(); //makes an array into a string
    var theComplimentaryColor = array[0] + "(" + joinValues; //concatenates hsl with joinvalues
    return theComplimentaryColor
  
}

export default complimentaryColor;