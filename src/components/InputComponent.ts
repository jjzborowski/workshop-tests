import { InputComponentType } from '../common/interfaces';
import BaseComponent from './BaseComponent';

export default class InputComponent extends BaseComponent implements InputComponentType {
    constructor(props: any) {
        super(props);
        this.initTemplate(props.placeholder);
    }

    initTemplate = (placeholder = 'Amount of generated images...'): void => {
        this.component = document.createElement('input');
        this.component.setAttribute('placeholder', placeholder);
        this.target.appendChild(this.component);
    };
};