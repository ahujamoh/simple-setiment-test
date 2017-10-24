function myFunction() {
    console.log("tweet pressed");
    var tweet = document.getElementById("tweetContent").value;
    data = {"tweet": tweet};
    console.log("You wrote " + tweet);
    var URL = 'http://54.213.252.131/sentiment';
    $.post(URL, data, function (response, status, xhr) {
        console.log(response);
        console.log(status);
        console.log(xhr);
        alert(response.sentiment);
    });
}
