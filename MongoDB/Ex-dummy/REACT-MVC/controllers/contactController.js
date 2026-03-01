import Contact from "../models/Contact.js";

// get all
export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// post
// export const createContact = async (req, res) => {
//     try {
//         const contact = await Contact.create(req.body);
//         res.status(201).json(contact);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

// post
export const createContact = async (req, res) => {
  const { name, email, phone, city } = req.body;

  try {
    const newcontact = await Contact({ name, email, phone, city });
    await newcontact.save();
    res.status(201).json(newcontact);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get a single contact
export const getContact = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    res.status(200).json(contact);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// update
export const updateContact = async (req, res) => {
  try {
    const updatedcontact = await Contact.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedcontact);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// delete
export const deleteContact = async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.status(200).json("Contact deleted");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};