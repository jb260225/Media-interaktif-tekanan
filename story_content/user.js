window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script1 = function()
{
  <audio id="bgm" autoplay loop>
  <source src="bg-music.mp3" type="audio/mpeg">
</audio>
<script>
  document.addEventListener('click', function playMusicOnce() {
    var audio = document.getElementById('bgm');
    if (audio.paused) {
      audio.play(); }
    document.removeEventListener('click', playMusicOnce);
</script>
}

};
