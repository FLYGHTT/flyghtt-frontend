import image from "@/public/avatar.png";
export const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
    image: image,
    date: "10th Oct, 2023",
    star: "4",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
    image: image,
    date: "10th Oct, 2023",
    star: "4",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
    image: image,
    date: "10th Oct, 2023",
    star: "4",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
    image: image,
    date: "10th Oct, 2023",
    star: "4",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
    image: image,
    date: "10th Oct, 2023",
    star: "4",
  },
];

export const plans = [
  {
    name: "Premium",
    features: [
      { tick: true, title: "Feature 1" },
      { tick: true, title: "Feature 1" },
      { tick: true, title: "Feature 1" },
      { tick: true, title: "Feature 1" },
      { tick: true, title: "Feature 1" },
      { tick: true, title: "Feature 1" },
      { tick: true, title: "Feature 1" },
      { tick: true, title: "Feature 1" },
      { tick: true, title: "Feature 1" },
    ],
  },
  {
    name: "Free",
    features: [
      { tick: true, title: "Feature 1" },
      { tick: true, title: "Feature 1" },
      { tick: true, title: "Feature 1" },
      { tick: true, title: "Feature 1" },
      { tick: false, title: "Feature 1" },
      { tick: false, title: "Feature 1" },
      { tick: false, title: "Feature 1" },
      { tick: false, title: "Feature 1" },
      { tick: false, title: "Feature 1" },
    ],
  },
];
import home from "@/assets/icons/home.svg";
import businessicon from "@/assets/icons/business.svg";
import premium from "@/assets/icons/premium.svg";
import tool from "@/assets/icons/tool.svg";
import draft from "@/assets/icons/draft.svg";
import settings from "@/assets/icons/settings.svg";
import explore from "@/assets/icons/explore.svg";
export const sidebartop = [
  {
    title: "Home",
    icon: home,
    link: "/dashboard",
  },
  {
    title: "My Businesses",
    icon: businessicon,
    link: "/dashboard/businesses",
  },
  {
    title: "My Tools",
    icon: tool,
    link: "/dashboard/tools",
  },
  {
    title: "My Drafts",
    icon: draft,
    link: "/dashboard/drafts",
  },
];
export const sidebarbottom = [
  {
    title: "Settings",
    icon: settings,
    link: "/dashboard/settings",
  },
  {
    title: "Upgrade plan",
    icon: premium,
    link: "/dashboard/upgrade",
  },
  {
    title: "Explore community",
    icon: explore,
    link: "/dashboard/community",
  },
];
export const model = {
  id: 1,
  name: "CAFEY porter's model",
  status: "completed",
  // created: "12 May",
  modified: "10 June",
  // fileType: "pdf",
  // size: "128kb",
  isFavorite: false,
  isPinned: false,
};

export const models = [
  model,
  { ...model, id: 2 },
  { ...model, id: 3 },
  { ...model, id: 4 },
];

 const business = {
  id: 1,
  name: "CAFEY Foods",
  employeeNo: "5-10",
  location: "Lagos, Nigeria",
  toolsNo: "5",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
};

export const businesses = [
  business,
  { ...business, id: 2 },
  { ...business, id: 3 },
  { ...business, id: 4 },
];
