export const SkillType = {
    FRONTEND: "🎨 Frontend",
    BACKEND: "🛠️ Backend",
    TESTING: "🧪 Testing",
    MOBILE: "📱 Mobile",
    DEVOPS: "⚙️ DevOps",
} as const;

export type SkillType = Readonly<typeof SkillType[keyof typeof SkillType]>;