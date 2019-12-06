import { BaseComponentType } from '../interfaces';

export default class BaseComponent implements BaseComponentType {
    id: string;
    target: HTMLElement;
    component!: HTMLElement;

    constructor(props: any) {
        this.id = props.id;
        this.target = props.target;
    }
}