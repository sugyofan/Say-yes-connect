import { useState, useCallback } from "react";
import { AnimatePresence } from "motion/react";
import { OpeningScreen } from "./components/screens/OpeningScreen";
import { PhilosophyScreen } from "./components/screens/PhilosophyScreen";
import { QuestionScreen } from "./components/screens/QuestionScreen";
import { ProfilePreviewScreen } from "./components/screens/ProfilePreviewScreen";
import { IntentionalPauseScreen } from "./components/screens/IntentionalPauseScreen";
import { MatchScreen } from "./components/screens/MatchScreen";
import { FinalScreen } from "./components/screens/FinalScreen";

const SCREENS = [
  "opening",
  "philosophy",
  "commitment",
  "faith",
  "emotional-safety",
  "future-vision",
  "profile-preview",
  "intentional-pause",
  "match",
  "final",
] as const;

type Screen = (typeof SCREENS)[number];

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("opening");

  const goTo = useCallback((screen: Screen) => {
    setCurrentScreen(screen);
  }, []);

  const nextScreen = useCallback(() => {
    const idx = SCREENS.indexOf(currentScreen);
    if (idx < SCREENS.length - 1) {
      setCurrentScreen(SCREENS[idx + 1]);
    }
  }, [currentScreen]);

  return (
    <div
      className="w-full min-h-[100dvh] flex items-center justify-center"
      style={{ background: "#1a1018" }}
    >
      <AnimatePresence mode="wait">
        {currentScreen === "opening" && (
          <OpeningScreen key="opening" onNext={nextScreen} />
        )}
        {currentScreen === "philosophy" && (
          <PhilosophyScreen key="philosophy" onNext={nextScreen} />
        )}
        {currentScreen === "commitment" && (
          <QuestionScreen
            key="commitment"
            headline="What does commitment mean to you?"
            options={[
              "Growing together through every season",
              "Building a lifelong partnership",
              "Faith-centered union",
              "Emotional loyalty and stability",
              "I'm still discovering",
            ]}
            footer="Your answers shape meaningful introductions."
            onNext={nextScreen}
          />
        )}
        {currentScreen === "faith" && (
          <QuestionScreen
            key="faith"
            headline="How does faith shape your relationships?"
            options={[
              "It is my foundation",
              "It guides my decisions",
              "I'm exploring my journey",
              "It's personal to me",
              "Prefer not to say",
            ]}
            onNext={nextScreen}
          />
        )}
        {currentScreen === "emotional-safety" && (
          <QuestionScreen
            key="emotional-safety"
            headline="What makes you feel emotionally safe?"
            options={[
              "Honest communication",
              "Consistency",
              "Emotional maturity",
              "Shared values",
              "Mutual respect",
            ]}
            onNext={nextScreen}
          />
        )}
        {currentScreen === "future-vision" && (
          <QuestionScreen
            key="future-vision"
            headline="What kind of future are you building?"
            options={[
              "Marriage and family",
              "Purpose-driven partnership",
              "Growth and shared adventure",
              "Faith-led life",
              "Still defining my path",
            ]}
            onNext={nextScreen}
          />
        )}
        {currentScreen === "profile-preview" && (
          <ProfilePreviewScreen
            key="profile-preview"
            onNext={() => goTo("intentional-pause")}
          />
        )}
        {currentScreen === "intentional-pause" && (
          <IntentionalPauseScreen
            key="intentional-pause"
            onNext={nextScreen}
          />
        )}
        {currentScreen === "match" && (
          <MatchScreen key="match" onNext={nextScreen} />
        )}
        {currentScreen === "final" && <FinalScreen key="final" />}
      </AnimatePresence>
    </div>
  );
}
