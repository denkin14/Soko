$("document").ready(function () {
  // START OF BANNER ANIMATION
  let slideIndex = 0;
  let timer;
  showSlides(slideIndex);

  // Next and previous control
  function nextSlide(n) {
    clearTimeout(timer);
    showSlides((slideIndex += n));
  }
  // Thumbnail image control
  function currentSlide(n) {
    clearTimeout(timer);
    showSlides((slideIndex = n));
  }

  //   Main slide navigation function
  function showSlides(n) {
    let slides = $(".slide");
    if (typeof n === "string") n = parseInt(n);
    let thumbnails = $(".banner-nav");
    if (n >= slides.length) slideIndex = 0;
    else if (n < 0) slideIndex = slides.length - 1;
    else slideIndex = n;
    slides.hide();
    thumbnails.removeClass("active");
    $(slides[slideIndex]).show();
    $(thumbnails[slideIndex]).toggleClass("active");

    timer = setTimeout(() => {
      showSlides(++slideIndex);
    }, 5000);
  }

  //   Assigned fuctions for click events
  $(".next").click(() => nextSlide(1));
  $(".prev").click(() => nextSlide(-1));
  $(".banner-nav").click(function () {
    const idx = $(this).attr("slide-idx");
    currentSlide(idx);
  });
  // END OF BANNER ANIMATION

  // START OF MESSANGER
  // Opening an closing window
  //&#10094;
  const toggleArrow = $(".arrow");
  toggleArrow.click(function () {
    $(this).toggleClass("fa-angles-up fa-angles-down");
    $(".messanger").toggleClass("messanger-size");
    $(".message-header").toggleClass("message-header-properties");
    $(".chats").toggle();
  });

  // Loading messages
  const chatHistory = $(".chat-history");
  const chat = $(".chat");
  chat.click(function () {
    $(".chats").hide();
    $(".chat-active").show();
    chatHistory.scrollTop(chatHistory.height());
  });
  // Sending message
  const send = $(".fa-paper-plane");
  send.click(function () {
    const textArea = $("textarea#message");
    if (textArea.val() === "") return;
    const newMessage = $('<p class="customer"></p>');
    if (
      textArea.val().includes("http") &&
      !textArea.val().includes("<script>")
    ) {
      // Add link as a tag
    } else {
      newMessage.text(textArea.val());
    }
    textArea.val("");
    chatHistory.append(newMessage);
    chatHistory.scrollTop(chatHistory.height());
  });
  // END OF MESSANGER
});
