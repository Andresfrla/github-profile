export const getInfo = async ({ username }) => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}/repos`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
      return {};
    }
  };