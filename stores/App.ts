import { defineStore } from "pinia";
import { computed, ref } from "vue";

type Mood = {
  id: number;
  name: String;
  vibe: String;
  color: String;
  musicLink: String;
  activity: String;
};

type AppState = {
  currentMood: Mood;
  moodList: Mood[];
};

const MOODS: Mood[] = [
  {
    id: 0,
    name: "Calm",
    vibe: "Beach Vibes",
    color: "#4E92B0",
    musicLink:
      "https://open.spotify.com/embed/track/6zeE5tKyr8Nu882DQhhSQI?utm_source=generator",
    activity: "Try deep breathing.",
  },
  {
    id: 1,
    name: "Energetic",
    vibe: "Dance Party",
    color: "#FF6F61",
    musicLink:
      "https://open.spotify.com/embed/track/0rMUIEJIdeo9I3hPLSHWJS?utm_source=generator",
    activity: "Dance to your favorite song!",
  },
];
export const useAppStore = defineStore("app", () => {
  const initialState: AppState = {
    currentMood: MOODS[0],
    moodList: MOODS,
  };
  const moodList = ref<Mood[]>(initialState.moodList);
  const currentMood = ref<Mood>(initialState.currentMood);

  return { moodList, currentMood };
});
