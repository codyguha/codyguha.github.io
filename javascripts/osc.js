var audioCtx = new(window.AudioContext || window.webkitAudioContext)();
var gainNode
var o

function printValue(sliderID, rangeValue1) {
  var x = document.getElementById(rangeValue1);
  var y = document.getElementById(sliderID);
  x.value = y.value;
  oscNote(y.value)
}
window.onload = function() { printValue('slider1', 'rangeValue1'); }



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
