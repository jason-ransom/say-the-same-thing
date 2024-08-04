import {FC} from "react";

export type PromptCardProps = {
    children: string;
}

const PromptCard: FC<PromptCardProps> = ({ children }) => {
    return (
        <div>
            <h1>{children}</h1>
        </div>
    );
};

export default PromptCard;
