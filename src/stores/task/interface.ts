export type Time = '10:00' | '10:30' | '11:00' | '11:30' | '12:00' | '12:30' | '13:00' | '13:30' | '14:00' | '14:30' | '15:00' | '15:30' | '16:00'

export type TField = { time: Time, text: string };

export type TUsersFields = {
    [key: string]: TField;
}

export type TTimeFields = {
    [key in Time]: TUsersFields
}

export interface ITable {
    titles: string[];
    fields: TTimeFields;
}
