function getStarCount(repoUrl, starCountElementId, forkCountElementId,descriptionElementId) {
    $.ajax({
      url: 'https://api.github.com/repos/gwfisher/' + repoUrl,
      method: 'GET',
      success: function(responseProjectData) {
        $(starCountElementId).html(responseProjectData.stargazers_count);
        $(forkCountElementId).html(responseProjectData.forks_count);
        $(descriptionElementId).html(responseProjectData.description);
      },
      error: function(jqXHR, textStatus, errorThrown) {
        // Handle errors here (e.g., display an error message)
        console.error("Error fetching star count:", errorThrown);
      }
    });
}