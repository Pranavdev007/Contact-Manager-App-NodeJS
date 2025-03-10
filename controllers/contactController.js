// @desc Get all contacts
// @route GET /api/contacts
// @access public
const getContacts = (req, res) => {
  res.status(200).json({ msg: "Contact data" });
};

// @desc Create a contact
// @route POST /api/contacts
// @access public
const createContact = (req, res) => {
  res.status(201).json({ msg: "Contact Created" });
};

// @desc Get a contact
// @route GET /api/contacts/:id
// @access public
const getContact = (req, res) => {
  res.status(200).json({ msg: "Contact one" });
};

// @desc Update a contact
// @route PUT /api/contacts/:id
// @access public
const updateContact = (req, res) => {
  res.status(201).json({ msg: "Contact Updated" });
};

// @desc Delete a contact
// @route DELETE /api/contacts/:id
// @access public
const deleteContact = (req, res) => {
  res.status(201).json({ msg: "Contact Deleted" });
};

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
