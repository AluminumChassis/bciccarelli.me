function log(x, isError = false){
    color = isError?"salmon":"turquoise"
    msg = "<p style='border-right:"+color+" 10px solid'>>" + x + "</p>"
    document.getElementById("logger").innerHTML += msg
}
tensorflowSource = "<script src=\"https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@2.0.0/dist/tf.min.js\"></script>"
tensorflowDemo = "<script src=\"tf_demo.js\"></script>"
if (window && window.innerWidth > 640) {
    document.write(tensorflowSource);
    log("Loaded tfjs@2.0.0")
    document.write(tensorflowDemo);
    log("Loaded demo script")
    log("Demo coming soon")
} else {
    log("Screen too small", true)
    document.getElementById("screenSizeNote").style.display = "block"
    log("Notice Displayed")
}