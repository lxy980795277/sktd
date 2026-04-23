import type { FC } from "react";
import "./milestones-timeline.css";

type Milestone = {
  year: string;
  title: string;
  description: string;
};

type MilestonesTimelineProps = {
  milestones: Milestone[];
};

export const MilestonesTimeline: FC<MilestonesTimelineProps> = ({ milestones }) => {
  return (
    <div className="milestones-timeline">
      {milestones.map((milestone) => (
        <div key={milestone.year} className="milestones-timeline__item">
          {/* 圆点骑在顶部边框线上 */}
          <div className="milestones-timeline__dot" />

          <p className="milestones-timeline__year">{milestone.year}</p>
          <p className="milestones-timeline__title">{milestone.title}</p>
          <p className="milestones-timeline__desc">{milestone.description}</p>
        </div>
      ))}
    </div>
  );
};
