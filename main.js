$(function()
{
    $("#logo").mouseenter(function()
    {
        $("#logo-info").slideDown();
    });
    $("#logo").mouseleave(function()
    {
        $("#logo-info").slideUp();
    });
    
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

    $("#magicarp").mouseenter(function()
    {
        $("#magicarp-info").slideDown();
    });
    $("#magicarp").mouseleave(function()
    {
        $("#magicarp-info").slideUp();
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