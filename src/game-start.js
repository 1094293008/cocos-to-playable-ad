// 游戏启动脚本
// window.boot();

if (window["mraid"] === undefined) {
    window.boot();
} else {
    // Code From Unity Ad Playables Doc
    // Wait for Mraid SDK to become ready
    if (mraid.getState() === "loading") {
        mraid.addEventListener("ready", onSdkReady);
    } else {
        onSdkReady();
    }
    function viewableChangeHandler(viewable) {
        // start/pause/resume gameplay, stop/play sounds
        if (viewable) {
            showMyAd();
        } else {
            // pause
        }
    }
    function onSdkReady() {
        mraid.addEventListener("viewableChange", viewableChangeHandler);
        // Wait for the ad to become viewable for the first time
        if (mraid.isViewable()) {
            showMyAd();
        }
    }
    function showMyAd() {
        window.boot();
    }
}
