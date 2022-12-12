export default {
  name: "projects",
  type: "document",
  title: "Projects",
  fields: [
    {
      name: "projectName",
      title: "Project Name",
      type: "string",
    },
    {
      name: "projectSkills",
      title: "Project Skills",
      type: "string",
    },
    {
      name: "projectImage",
      title: "Project Image",
      type: "image",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "githubLink",
      title: "Github Link",
      type: "string",
    },
    {
      name: "liveLink",
      title: "Live Link",
      type: "string",
    },
  ],
};
