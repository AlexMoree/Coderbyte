public static string[] FindSkillsinResume(string resume) {
  // Simulate the 200ms processing time
  return new Promise((resolve) => {
    setTimeout(() => {
      // Generate a random list of skills for demonstration purposes
      const numSkills = Math.floor(Math.random() * 10) + 5;
      const skills = Array.from({ length: numSkills }, (_, i) => `Skill ${i + 1}`);
      resolve(skills);
    }, 200);
  });
}

function processResumes(resumes) {
  // Start timing the execution
  console.time('Execution time');

  // Process resumes in parallel using Promise.all()
  const results = Promise.all(resumes.map((resume) => FindSkillsinResume(resume)));

  // Stop the timer and print the elapsed time
  console.timeEnd('Execution time');

  // Print the results
  results.then((skillsArray) => {
    skillsArray.forEach((skills, i) => {
      console.log(`Resume ${i + 1} skills: ${skills.join(', ')}`);
    });
  });
}

const resumes = [
  // ... array of resumes ...
];

processResumes(resumes);