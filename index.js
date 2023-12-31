const userNameInput = document.getElementById("user-name");
const userDreamWishInput = document.getElementById("user-dream-wish");
const actionButton = document.getElementById("action-button");
const languageSelectionContainer = document.getElementById("language-selection");
const messageContainer = document.getElementById("message-container");

actionButton.addEventListener("click", () => {
  languageSelectionContainer.innerHTML = `
    <select id="language-select">
      <option value="">Select Language</option>
      <option value="english">English</option>
      <option value="hindi">Hindi</option>
    </select>
  `;

  const languageSelect = document.getElementById("language-select");

  languageSelect.addEventListener("change", () => {
    const selectedLanguage = languageSelect.value;
    if (selectedLanguage) {
      const englishMessage = `
        May your dreams, ${userNameInput.value}, take flight like swallows in the sky,
        As the New Year dawns, painted with hopes so high.
        Hold your wishes close, let resolutions rise,
        Each challenge a feather beneath your wise wings to climb.
        With laughter and love, chase the sunrise in bloom,
        May this year unfold, your happiest New Year's dream,
        Of becoming a ${userDreamWishInput.value} - HAPPY NEW YEAR.
      `;

      const hindiMessage = `
        ख्वाब आपके, ${userNameInput.value}, उड़ें स्वर्ग पंछी की तरह,
        नए साल में चमके उम्मीदों का तड़क.
        जुटाओ ख्वाहिशें, बढ़ाओ हौसले,
        हर मुश्किल पंख बनेगी उंचाइयों की ओर.
        हंसी-खुशी से स्वागत करो सवेरे सुंदर,
        खुशियों से खिलें सपनों के नए अध्याय,
        यही हो मुबारक, साल नया खुशहाल!
        आपके सपने, ${userDreamWishInput.value} बनने के,
        पूरे हों इस साल,
        यही मेरी शुभकामना है आपके लिए,
        नए साल की। ।- नए साल की शुभकामनाएँ
      `;

      messageContainer.textContent = selectedLanguage === "english" ? englishMessage : hindiMessage;
    } else {
      messageContainer.textContent = ""; // Clear message if "Select Language" is chosen
    }
  });
});
