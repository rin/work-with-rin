export interface LinkInterface {
  title: string;
  type: string;
  url: string;
}

export interface InterestInterface {
  name: string;
}

export interface SkillInterface {
  name: string;
  rating: number;
  marked: Boolean;
}

export interface SkillListInterface {
  skills: Array<SkillInterface>
}