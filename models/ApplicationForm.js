const mongoose = require("mongoose");

const applicationFormShema = new mongoose.Schema(
  {
    fistName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
    },
    gender: {
      type: String,
    },
    phone: {
      type: String,
    },
    experience: {
      type: Boolean,
    },
    laptop: {
      type: Boolean,
    },
    job: {
      type: String,
    },
    hours: {
      type: String,
    },
    commitment: {
      type: Boolean,
    },
    pay: {
      type: Boolean,
    },
    hears: {
      type: String,
    },
    scholarship: {
      type: String,
    },
    dream: {
      type: String,
    },
    sector: {
      type: String,
    },
    district: {
      type: String,
    },
    occupation: {
      type: String,
    },
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model("ApplicationType", applicationFormShema);
// export default applicationType;

// module.exports = mongoose.model("ApplicationType", applicationFormShema);
// export default applicationType;
