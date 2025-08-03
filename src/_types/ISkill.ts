import { SkillType } from "./SkillType";

export interface ISkill {
    readonly type: SkillType; 
    readonly name: string;
}