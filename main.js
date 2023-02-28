$(function()
{
    $("#raichu").mouseenter(function()
    {
        $("#raichu-info").slideDown();
    });
    $("#raichu").mouseleave(function()
    {
        $("#raichu-info").slideUp();
    });

    $("#gengar").mouseenter(function()
    {
        $("#gengar-info").slideDown();
    });
    $("#gengar").mouseleave(function()
    {
        $("#gengar-info").slideUp();
    });

    $("#giratina").mouseenter(function()
    {
        $("#giratina-info").slideDown();
    });
    $("#giratina").mouseleave(function()
    {
        $("#giratina-info").slideUp();
    });

    $("#magikarp").mouseenter(function()
    {
        $("#magikarp-info").slideDown();
    });
    $("#magikarp").mouseleave(function()
    {
        $("#magikarp-info").slideUp();
    });

    $("#like-btn").click(function()
    {
        $.ajax(
        {
          url: "",
          type: "GET"
        }).done(function()
        {
          $("#like-btn").replaceWith("<p>Thank you for your support!</p>");
        });
      });
});

function playAudio()
{
    var audio = document.getElementById("audio");
    if (audio.paused)
    {
      audio.play();
    }
    else
    {
      audio.pause();
    }
}