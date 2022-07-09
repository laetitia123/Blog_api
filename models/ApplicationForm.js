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
    age: {
      type: Number,
    },
    gender: {
      type: String,
    },
    country: {
      type: String,
    },
    province: {
      type: String,
    },
    district: {
      type: String,
    },
    sector: {
      type: String,
    },
    ubudehe: {
      type: String,
    },

    phone: {
      type: String,
    },
    education: {
      type: String,
    },
    codingExperience: {
      type: Boolean,
    },
    githubAccount: {
      type: Boolean,
    },
    githubLink: {
      type: String,
    },
    competenceIct: {
      type: String,
    },
    codingLevel: {
      type: String,
    },
    occupation: {
      type: String,
    },

    ownLaptop: {
      type: Boolean,
    },
    howObtainLaptop: {
      type: String,
    },
    reasonJoinUs: {
      type: String,
    },

    ableToParticipate: {
      type: Boolean,
    },
    expectation: {
      type: String,
    },
    dream: {
      type: String,
    },

    hears: {
      type: String,
    },
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model("ApplicationCohort6", applicationFormShema);
// export default applicationType;

// module.exports = mongoose.model("ApplicationType", applicationFormShema);
// export default applicationType;
