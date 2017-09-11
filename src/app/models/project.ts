import { Metric } from './metric';

export class Project {
    id: string;
    projectName: string;
    clientName: string;
    completionDate: Date;
    solutionName: string;
    description: string;
    pointOfContact: string;
    peopleImpacted: number;
    externalPeopleImpacted: Metric;
    internalPeopleImpacted: Metric;
    valueCreated: number;
    costReduction: Metric;
    incrementalRevenue: Metric;
}
