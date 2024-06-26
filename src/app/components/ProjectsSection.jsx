"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [

  {
    id: 1,
    title: "SocialApp",
    description: "SocialApp is a social media website built with the MERN stack (MongoDB, ExpressJS, React.js, NodeJS) and Passport for authentication. It features real-time chat via socket.io, uses REST APIs for data management, and has a responsive, modern design for all devices.",
    image: "/images/projects/socialApp.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/NytWarrior/SocialApp3.0",
    previewUrl: "https://socialapp3-0.onrender.com/",
  },
  {
    id: 2,
    title: "E-commerce Application",
    description: "The E-commerce is a Ecommerce Website designed using Nextjs for user to buy, track and pay for the products and an admin panel for admin from where admin can access to everything going on the orders, products and payments.",
    image: "/images/projects/Ecommerce.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/NytWarrior/dreamkart-nextjs",
    previewUrl: "https://dream-kart.netlify.app/",
  },
  {
    id: 3,
    title: "MovieWorld Application",
    description: "The MovieWorld is designed using Full Stack Web Development(MERN stack) for user to share reviews, can have their own favourites collections and can see the movie/tv-shows details, cast and other related stuffs.",
    image: "/images/projects/MovieWorld.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/NytWarrior/movie-app-mern",
    previewUrl: "https://movieworld-mern.netlify.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        {/* <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        /> */}
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
