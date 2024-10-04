export type TField = { time: string, text: string };

export type TUsersFields = {
    [key: string]: TField;
}

export type TTimeFields = {
    [key: string]: TUsersFields
}

export interface ITable {
    titles: string[];
    fields: TTimeFields;
}

export interface ITask {
    id: number;
    time: string;
    description: string;
    user_id: number;
    notify: boolean;
}
