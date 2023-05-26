$(document).ready(function(){
});

// 모달 열기
// function videoModal() {
//     $(".modal-video").get(0).play();
//     $(".modal-content").fadeIn(100);
//     $(".modal-container").fadeIn(100);
// }
function boardModal() {
    $(".board-modal-container").fadeIn(100);
    $(".board-modal-content").fadeIn(100);
}

// 모달 영역 밖 클릭시 닫기
// let modal = document.getElementById("modal");
let board = document.getElementById("board-Modal");

window.onclick = function(event) {
    // if (event.target === modal) {
    //     $(".modal-video").get(0).pause();
    //     $(".modal-container").fadeOut(300);
    //     $(".modal-content").fadeOut(300);
    // }
    if (event.target === board) {
        $(".board-modal-container").fadeOut(300);
        $(".board-modal-content").fadeOut(300);
    }
}
//
// // 재생
// function playVideo() {
//     $(".modal-video").get(0).play();
// }
// // 재생 중지
// function pauseVideo() {
//     $(".modal-video").get(0).pause();
// }
// // 음소거
// function mutedVideo() {
//     let muteButton = $(".video-mute-button");
//
//     $(".modal-video").get(0).muted = true;
//     muteButton.css("border", "1px solid #3b3b3b");
//     muteButton.css("background-color", "#858585");
//     muteButton.attr("onclick", "soundVideo()");
//
// }
// // 소리 재생
// function soundVideo() {
//     let muteButton = $(".video-mute-button");
//
//     $(".modal-video").get(0).muted = false;
//     muteButton.css("background", "");
//     muteButton.attr("onclick", "mutedVideo()");
// }


// 게시글 등록하기
function saveArticle() {
    let form_data = new FormData()
    form_data.append("title", $("#h1").val())
    form_data.append("main", $("#h2").val())

    $.ajax({
        type: "POST",
        url: `/registry`,
        data: form_data,
        contentType: false,
        processData: false,
        success: function (response) {
            alert("성공적으로 업로드 되었습니다.");
            location.href = "empathy-space.html"; // 페이지 변환
        }
    });
}