export class Task {
    id:number;
    taskName:string;
    taskDescription:string;
    completed:boolean;
}

export class Convert {
    public static toTask(json: string): Task {
        return JSON.parse(json);
    }
    public static taskToJson(value: Task): string {
        return JSON.stringify(value);
    }
}
