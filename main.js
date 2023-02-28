$(function()
{

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