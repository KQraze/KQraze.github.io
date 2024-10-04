export type TTimeField = [string, ITask]

export type TTimeFields = {
    [key: string]: ITask
}

export interface ITable {
    titles: string[];
    fields: TTimeField[];
}

export interface IResponseTasks {
    tasks: ITask[],
    user_id: number;
    user_name: string;
}

export interface ITask {
    id: number;
    time: string;
    description: string | null;
    user_id: number;
    notify: boolean;
}
