$("#btnMath1").click(function () {
    //Step 1: Use jQuery to gather the user input
    var input1 = Number($("#mathInput1").val());
    var input2 = Number($("#mathInput2").val());
    var input3 = Number($("#mathInput3").val());
    var input4 = Number($("#mathInput4").val());
    var input5 = Number($("#mathInput5").val());

    //Step 2: Use JavaScript to work with the data

    //Calculate the Sum
    var sum = input1 + input2 + input3 + input4 + input5;

    //Calculate the Product
    var product = input1 * input2 * input3 * input4 * input5;

    //Calculate the Mean (average)
    var mean = sum / 5;

    //Calculate the Min
    var min = Math.min(input1, input2, input3, input4, input5);

    //Calculate the Max
    var max = Math.max(input1, input2, input3, input4, input5);

    //Step 3: Use jQuery to output the results
    var output = "The calculated sum is: " + sum + "<br>";
    output += "The calculated product is: " + product + "<br>";
    output += "The calculated mean is: " + mean + "<br>";
    output += "The calculated min is: " + min + "<br>";
    output += "The calculated max is: " + max;

    $("#mathOutput").html(output);
});

$("#btnMath2").click(function () {
    //Clear all the Input and Output
    $("#mathInput1").val("");
    $("#mathInput2").val("");
    $("#mathInput3").val("");
    $("#mathInput4").val("");
    $("#mathInput5").val("");
    $("#mathOutput").text("");
});