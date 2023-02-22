// Retrieve the featured jobs JSON data
const featuredJobsData = {
  featuredJobs: [
    {
      title: "Hello World",
      company: "ABC Company",
      location: "New York, NY",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Front End Developer",
      company: "XYZ Inc.",
      location: "San Francisco, CA",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "Software Engineer",
      company: "123 Corporation",
      location: "Boston, MA",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      title: "Senior Developer",
      company: "ABC Company",
      location: "New York, NY",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Full-Stack Developer",
      company: "XYZ Inc.",
      location: "San Francisco, CA",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "Operations Manager",
      company: "123 Corporation",
      location: "Boston, MA",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      title: "Systems Design Engineer",
      company: "123 Corporation",
      location: "Boston, MA",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      title: "Engineer 1",
      company: "123 Corporation",
      location: "Boston, MA",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
  ],
};


// Select the featured jobs list
const featuredJobsList = document.querySelector("#featured-jobs-list");

// Loop through the featured jobs data and create list items
featuredJobsData.featuredJobs.forEach((job) => {
  const listItem = document.createElement("li");
  listItem.innerHTML = `
      <h3>${job.title}</h3>
      <p>${job.company} - ${job.location}</p>
      <p>${job.description}</p>
      <a href="#">Apply Now</a>
    `;
  featuredJobsList.appendChild(listItem);
});
