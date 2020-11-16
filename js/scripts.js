// Create object
var contacts = [];
var newContact = {};

// Choose html elements
var elPhoneBookForm = $('.js-phone-number-book');
var elNameInput = $('.js-name-input', elPhoneBookForm);
var elSurenameInput = $('.js-surename-input', elPhoneBookForm);
var elTelNumberInput = $('.js-tel-number-input', elPhoneBookForm);
var elContactInput = $('.js-contact-input', elPhoneBookForm);
var elPhoneList = $('.js-contact-list');


var createElement = function () {
  var elPhoneListItem = document.createElement('li');
  elPhoneListItem.classList.add('phone-list__item');
  elPhoneList.appendChild(elPhoneListItem);

  var elUserName = document.createElement('p');
  elUserName.textContent = 'Name: ';
  elPhoneListItem.appendChild(elUserName);

  var elUserPhone = document.createElement('p');
  elUserPhone.textContent = 'Phone: ';
  elPhoneListItem.appendChild(elUserPhone);

  var elUserRelationship = document.createElement('p');
  elUserRelationship.textContent = 'Relationship: '
  elPhoneListItem.appendChild(elUserRelationship);

  var elUserNameName = document.createElement('span');
  elUserNameName.classList.add('name-span');
  elUserNameName.textContent = newContact.name;
  elUserName.appendChild(elUserNameName);

  var elUserNameSurname = document.createElement('span');
  elUserNameSurname.textContent = newContact.surename;
  elUserName.appendChild(elUserNameSurname);

  var elUserPhonePhone = document.createElement('span');
  elUserPhonePhone.textContent = newContact.phone;
  elUserPhone.appendChild(elUserPhonePhone);

  var elUserRelationshipWho = document.createElement('span');
  elUserRelationshipWho.textContent = newContact.relationship;
  elUserRelationship.appendChild(elUserRelationshipWho);
}

elPhoneBookForm.addEventListener('submit', function (evt) {
  evt.preventDefault();

  var elNameInputValue = elNameInput.value.trim();
  newContact.name = elNameInputValue;

  var elSurenameInputValue = elSurenameInput.value.trim();
  newContact.surename = elSurenameInputValue;

  var elTelNumberInputValue = elTelNumberInput.value.trim();
  newContact.phone = elTelNumberInputValue;

  var elContactInputValue = elContactInput.value.trim();
  newContact.relationship = elContactInputValue;

  console.log(newContact);
  createElement();

  elNameInput.value = '';
  elSurenameInput.value = '';
  elTelNumberInput.value = '';
  elContactInput.value = '';
})
