export interface Project {
    title: string;
    description: string;
    image?: string;
    tags: string[];
    codeLink?: string;
    demoLink?: string;
    docLink?: string;
}

export const projects: Project[] = [
    {
        title: "JavaScript Gantt",
        description:
            "A lightweight, interactive Gantt chart component built with vanilla JavaScript, offering a simple way to visualize project timelines.",
        image: "images/jsgantt.png",
        tags: ["JavaScript", "HTML", "CSS"],
        codeLink: "https://github.com/Sunilsolankiji/javascriptgantt",
        demoLink: "https://sunilsolankiji.github.io/javascriptgantt/",
        docLink: "https://sunilsolankiji.github.io/js-gantt-docs/",
    },
    {
        title: "TourJS",
        description:
            "A guided tour/onboarding library enabling developers to create step-by-step walkthroughs for any web application, Improved user learning and navigation through interactive UI overlays.",
        image: "images/jstour.png",
        tags: ["JavaScript", "HTML", "CSS"],
        codeLink: "https://github.com/Sunilsolankiji/tourjs",
        demoLink: "https://sunilsolankiji.github.io/javascriptgantt/",
    },
    {
        title: "DropFile",
        description:
            "A modern file upload and management library with drag-and-drop support, file preview, and cloud storage integration. Built to make file handling seamless and user-friendly across web applications with real-time upload progress tracking.",
        image: "images/dropfile.png",
        tags: ["JavaScript", "React", "TypeScript", "File Upload"],
        codeLink: "https://github.com/Sunilsolankiji/DropFile",
        demoLink: "https://sunilsolankiji.github.io/DropFile/"
    },
    {
        title: "Angular UI Component Library",
        description: `A scalable Angular UI Component Library. Built reusable components (tables, forms, dialogs, charts, layout modules, dynamic UI elements and more) to standardize the design system. Reduced project development time by enabling teams to plug-and-play pre-built, customizable UI components.`,
        image: "images/angular-ui-lib.png",
        tags: ["Angular", "TypeScript", "HTML", "CSS"],
    },
    {
        title: "HTML5 Canvas",
        description: "A collection of HTML5 Canvas experiments and demos showcasing interactive graphics and animations.",
        image: "images/html5-canvas.png",
        tags: ["JavaScript", "HTML5", "Canvas"],
        codeLink: "https://github.com/Sunilsolankiji/html5-canvas",
        demoLink: "https://sunilsolankiji.github.io/html5-canvas/#/playground",
    },
    {
        title: "JS Gantt Docs",
        description:
            "Complete documentation site for the JavaScript Gantt chart library with examples and API reference.",
        image: "images/jsgantt-doc.png",
        tags: ["JavaScript", "Documentation"],
        codeLink: "https://github.com/Sunilsolankiji/js-gantt-docs",
        demoLink: "https://sunilsolankiji.github.io/js-gantt-docs/",
    },
    {
        title: "DropFile Server",
        description:
            "Backend server for the DropFile library, handling file uploads and storage operations.",
        image: "images/dropfile.png",
        tags: ["JavaScript", "Node.js", "Backend"],
        codeLink: "https://github.com/Sunilsolankiji/DropFileServer",
    },
];
