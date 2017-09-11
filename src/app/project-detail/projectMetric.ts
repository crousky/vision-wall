export class ProjectMetric {
    selected: boolean;
    title: string;
    value: number;
    description: string;

    constructor(
        selected: boolean,
        title: string,
        value: number,
        description: string
    ) {
        this.selected = selected;
        this.title = title;
        this.value = value;
        this.description = description;
    }
}
