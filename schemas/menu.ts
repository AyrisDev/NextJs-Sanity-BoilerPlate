import { BiPackage } from "react-icons/bi";
import { defineField, defineType } from "sanity";
import { GrProjects } from "react-icons/gr";

const menu = defineType({
  title: "Menu",
  name: "menu",
  type: "document",
  icon: GrProjects,
  fields: [
    defineField({
      name: "name",
      type: "string",
    }),
    defineField({
      name: "title",
      type: "localeString",
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "title.en",
    },
  },
});

export default menu;
