'use strict';

(function () {
  var Keycode = window.util.Keycode;
  var uploadFileInput = document.querySelector('#upload-file');
  var editPhotoForm = document.querySelector('.img-upload__overlay');
  var closeEditPhotoFormButton = document.querySelector('#upload-cancel');

  uploadFileInput.addEventListener('change', function () {
    editPhotoForm.classList.remove('hidden');
    document.querySelector('body').classList.add('modal-open');
  });

  // работаем с открытием-закрытием окна редактирования фото
  var openEditPhotoForm = function () {
    editPhotoForm.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  var closeEditPhotoForm = function () {
    // если фокус находится в поле ввода хэштега или комментария, нажатие на Esc не приводит к закрытию формы редактирования изображения
    if (!document.activeElement.classList.contains('text__hashtags') && !document.activeElement.classList.contains('text__description')) {
      // сбрасываем значение поля выбора файла #upload-file
      uploadFileInput.value = '';

      editPhotoForm.classList.add('hidden');
      document.removeEventListener('keydown', onPopupEscPress);
    }
  };

  var onPopupEscPress = function (evt) {
    if (evt.keyCode === Keycode.ESC_KEY) {
      closeEditPhotoForm();
    }
  };

  closeEditPhotoFormButton.addEventListener('click', closeEditPhotoForm);
  uploadFileInput.addEventListener('change', openEditPhotoForm);
})();
