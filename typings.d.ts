interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface HomeInfo extends SanityBody {
  _type: "home";
  description: string;
  subtitle: string;
  title: string;
}

export interface Projects extends SanityBody {
  _type: "projects";
  description: string;
  githubLink: string;
  liveLink: string;
  projectName: string;
  projectImage: Image;
  projectSkills: string;
}

export interface BlogInfo extends SanityBody {
  _type: "blogInfo";
  blogHeading: string;
  blogImage: Image;
  blogLink: string;
}
