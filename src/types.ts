export interface Todo {
    id: number;
    description: string;
    completed: boolean;
}

export interface ButtonProps {
    children: React.ReactNode;
    click: (e?:any) => void;
}