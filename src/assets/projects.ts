interface Project {
    title: string;
    subtitle: string;
    techstack: string[];
    github: string;
    viewlive: string;
}

const projects: Project[] = [
    {
        title: "Genesis",
        subtitle: "A full stack library management system.",
        techstack: ["Next.js", "TypeScript", "React JS","TailwindCSS","Better Auth", "Prisma", "PostgreSQL"],
        github: "https://github.com/manishambre5/genesis",
        viewlive: ""
    },
    {
        title: "Miranda",
        subtitle: "An interactive note-taking app inspired form the Jupyter Notebook UI.",
        techstack: ["TypeScript", "React Router", "React JS","TailwindCSS"],
        github: "https://github.com/manishambre5/miranda",
        viewlive: "https://manishambre5.github.io/miranda/"
    },
    {
        title: "let him cook!",
        subtitle: "A handy Recipe Generator that generates a recipe using AI with a list of ingredients.",
        techstack: ["React JS","TailwindCSS","Express.js", "react-markdown", "tailwindcss-typography", "HuggingFace Inference", "DeepSeek v3.2", "LLM", "Prompt Engineering"],
        github: "https://github.com/manishambre5/let-him-cook",
        viewlive: "https://manishambre5.github.io/let-him-cook/"
    },
    {
        title: "Sexism Identification in Social Networks",
        subtitle: "Academic Research Lab in Sexism Identification in social networks involving classification of tweets from the EXIST dataset.",
        techstack: ["Python", "Pandas", "HuggingFace", "XLM-RoBERTa", "DeBERTa", "LLM", "DeepSeek", "Llama", "Prompt Engineering"],
        github: "https://github.com/manishambre5/sexism_identification",
        viewlive: ""
    },
    {
        title: "Triads",
        subtitle: "A word puzzle game that challenges players to identify connections among the words in a grid format.",
        techstack: ["JavaScript","TailwindCSS"],
        github: "https://github.com/manishambre5/triads",
        viewlive: "https://manishambre5.github.io/triads/"
    },
    {
        title: "YinYang",
        subtitle: "A gird puzzle game that challenges players to balance the grid based on a set of rules.",
        techstack: ["JavaScript","TailwindCSS"],
        github: "https://github.com/manishambre5/yinyang",
        viewlive: "https://manishambre5.github.io/yinyang/"
    },
    {
        title: "next flick",
        subtitle: "A movie recommendation app that recommends good cinema based on an input movie.",
        techstack: ["React JS","TailwindCSS","Python","Scikit-learn","Flask"],
        github: "https://github.com/manishambre5/next-flick",
        viewlive: ""
    },
    {
        title: "Ultra Marathon Germany",
        subtitle: "Exploratory Data Analysis on race records registered in the 50km and 50mi ultra-marathon events held in Germany between 1798 and 2022.",
        techstack: ["Python","Pandas","Seaborn","Matplotlib"],
        github: "https://github.com/manishambre5/Ultra-Marathon-Germany",
        viewlive: ""
    },
    {
        title: "PINT",
        subtitle: "Pinterest-Inspired Web Feed with a masonry grid.",
        techstack: ["TailwindCSS","React JS"],
        github: "https://github.com/manishambre5/pint",
        viewlive: "https://manishambre5.github.io/pint/"
    },
    {
        title: "Vivek / Reason",
        subtitle: "A website designed as a promotional tool for an award winning documentary.",
        techstack: ["CSS","JavaScript"],
        github: "https://github.com/manishambre5/vivek-reason",
        viewlive: "https://manishambre5.github.io/vivek-reason/"
    }
];


export default projects;