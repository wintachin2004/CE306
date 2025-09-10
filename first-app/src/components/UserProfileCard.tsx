export interface UserData {
    avatarUrl?: string;
    email: string;
    isOnline: boolean;
    skill: Skill[];
}

interface UserProfileCardProps {
    user: UserData;
    onViewDeatail: (userId: string | number) => void;
}

const UserProfileCard: React.FC<UserProfileCardProps> = ({user, onViewDetails}) =