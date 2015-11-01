var audioCtx = new(window.AudioContext || window.webkitAudioContext)();
var gainNode
var o
$(document).ready(function (){
  function printValue(sliderID, textbox) {
  var x = document.getElementById(textbox);
  oscNote(x.value);
}
});
// window.onload = function() { printValue('slider1', 'rangeValue1'); }
function oscNote(freq) { 
  var o = audioCtx.createOscillator();
  var gainNode = audioCtx.createGain();
    o.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    o.frequency.value = freq;
    gainNode.gain.value = .1;
    o.start();
    o.stop(audioCtx.currentTime + 5);
      setInterval(function() {
      gainNode.gain.value > 0.001 ? 
      gainNode.gain.value -= 0.001 : null
      }, 50);

};
