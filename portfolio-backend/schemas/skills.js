export default {
  name: "skills",
  title: "Skills",
  type: "document",

  fields: [
    {
      name: "skillName",
      title: "Skill Name",
      type: "string",
    },
    {
      name: "skillImage",
      title: "Skill Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
