fetch(document.location.origin + "/data/projects.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((item) => {
      const name = item.name;
      const description = item.description;
      const fullPageUrl = item.full_page;
      const downloads = item.downloads;
      // Do something with the extracted values
      console.log("Name:", name);
      console.log("Description:", description);
      console.log("Full Page URL:", fullPageUrl);
      console.log("Downloads:", downloads);

      const project = document.createElement("div");
      project.classList.add("project");

      const projectTitle = document.createElement("h2");
      projectTitle.textContent = name;
      projectTitle.classList.add("center");
      project.appendChild(projectTitle);

      const projectDescription = document.createElement("p");
      projectDescription.textContent = description;
      projectDescription.classList.add("center");
      project.appendChild(projectDescription);

      const moreInfoBox = document.createElement("div");
      moreInfoBox.classList.add("center");
      moreInfoBox.classList.add("mibox");
      const moreInfo = document.createElement("a");
      moreInfo.textContent = "More Info";
      moreInfo.href = fullPageUrl;
      moreInfo.classList.add("center");
      moreInfoBox.appendChild(moreInfo);
      project.appendChild(moreInfoBox);

      const projectDownloads = document.createElement("ul");
      downloads.forEach((download) => {
        const downloadItem = document.createElement("li");
        const downloadLink = document.createElement("a");
        downloadLink.textContent = download.name;
        downloadLink.href = download.url;
        downloadItem.appendChild(downloadLink);
        projectDownloads.appendChild(downloadItem);
      });
      project.appendChild(projectDownloads);

      document.getElementById("project-box").appendChild(project);
    });
  })
  .catch((error) => {
    console.error("Error when getting projects \\/\n", error);
  });
