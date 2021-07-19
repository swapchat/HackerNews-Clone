import axios from "axios";
import { BASE_API_URL } from "./constants";

const getStory = async (id) => {
  try {
    const story = await axios.get(`${BASE_API_URL}/item/${id}.json`);
    console.log(story);
    return story;
  } catch (error) {
    console.log("Error while getting a story", error);
  }
};

export const getStories = async (type) => {
  try {
    const { data: storyIds } = await axios.get(
      `${BASE_API_URL}/${type}stories.json`
    );
    const stories = await Promise.all(storyIds.slice(0, 30).map(getStory));
    console.log(stories);
    return stories;
  } catch (error) {
    console.log("Error while getting list of stories.");
  }
};
