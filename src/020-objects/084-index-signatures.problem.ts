interface Score {
  [k: string]: number;
}

// Both are valid solutions but Record<T,K> is more cleaner
// const scores: Score = {};
const scores: Record<string, number> = {};

scores.math = 95;
scores.english = 90;
scores.science = 85;
