type Leader = {
  _id: string;
  totalScore: number;
  userId: {
    username: string;
  };
};
export type Leaders = Leader[];
export type LeaderBoardResponse = {
  data: Leaders;
};
