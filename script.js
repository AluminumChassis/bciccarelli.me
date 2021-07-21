function log(x, isError = false){
    color = isError?"salmon":"turquoise"
    msg = "<p style='border-right:"+color+" 10px solid'>>" + x + "</p>"
    document.getElementById("logger").innerHTML += msg
}
tensorflowScript = "<script src=\"https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@2.0.0/dist/tf.min.js\"></script>"
if (window && window.innerWidth > 640) {
    document.write(tensorflowScript);
    log("Loaded tfjs@2.0.0")
    log("Demo coming soon")
} else {
    log("Screen too small", true)
    document.getElementById("screenSizeNote").style.display = "block"
    log("Notice Displayed")
}