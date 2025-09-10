interface SkillTagProps {
    skillName: string;
    level?: 'Beginner' | 'Intermediate' | 'Avanced';
}

const SkillTag: React.FC<SkillTagProps> = ({ skillName, level}) => {
    let levelClass = '';
    if (level) {
        levelClass = 'skill-level-${level.toLowerCase()}';
    }
    return (
        <span className={'skill-tag ${levelClass}'}>
            {skillName}
            {level && <span className= "skill-level-indicator"> ({level})</span>}
        </span>
    );
};